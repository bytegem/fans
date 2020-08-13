import { App } from "../../app";
import queryCurrentUser from "../user/queryCurrentUser";

export default async (app: App) => {
    const { uid } = await queryCurrentUser(app);
    const db = app.server.database();
    const _ = db.command;
    const { limit = 20, offset = 0 } = app.event.data || {};

    return db.collection('moments')
        .aggregate()
        .lookup({
            from: "user-follow",
            as: "follow",
            let: {
                userId: "$userId"
            },
            pipeline: _.aggregate.pipeline().match(_.expr(
                _.aggregate.and([
                    _.aggregate.eq(['$userId', uid]),
                    _.aggregate.eq(["$targetUserId", "$$userId"]),
                ]),
            )).project({
                _id: false,
                targetUserId: true,
            }).done(),
        })
        .lookup({
            from: "topic-user",
            as: "topices",
            let: {
                topicId: "$topicId"
            },
            pipeline: _.aggregate.pipeline().match(_.expr(
                _.aggregate.and([
                    _.aggregate.eq(['$userId', uid]),
                    _.aggregate.eq(["$topicId", "$$topicId"]),
                ]),
            )).project({
                _id: false,
                topicId: true,
            }).done(),
        })
        .project({
            _id: false,
            id: "$_id",
            createdAt: true,
            userId: true,
            topicId: true,
            follow: _.aggregate.map({
                input: "$follow",
                in: '$$this.targetUserId',
            }),
            topices: _.aggregate.map({
                input: '$topices',
                in: '$$this.topicId',
            }),
        })
        .match(_.expr(
            _.aggregate.or([
                _.aggregate.in(['$userId', '$follow']),
                _.aggregate.in(['$topicId', '$topices']),
                _.aggregate.eq(['$userId', uid]),
            ]),
        ))
        .project({ id: true, createdAt: true, })
        .limit(limit)
        .sort({ 'createdAt': -1 })
        .skip(offset)
        .end();
}