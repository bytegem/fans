import Joi from "joi";
import { tcbStorageCloudFileIdToPath } from "src/utils/cloudbase.util";
import { tcbStorageFileIsImageValidator, tcbStorageFileIsVideoValidator } from "src/validator/tcb-storage-file.validator";

export const CreateMomentValidationSchema = Joi.object({
    text: Joi.string()
        .alphanum().max(5000)
        .required()
        .label('内容'),
    images: Joi.array().unique().max(9).items(
        Joi.string().external(tcbStorageFileIsImageValidator).required(),
    ).label('图片'),
    video: Joi.object({
        cover: Joi.string().external(tcbStorageCloudFileIdToPath).required(),
        src: Joi.string().external(tcbStorageFileIsVideoValidator).required(),
    }),
    audio: Joi.object({
        cover: Joi.string().external(tcbStorageCloudFileIdToPath),
        src: Joi.string().external(tcbStorageFileIsVideoValidator).required(),
    }),
    vote: Joi.array().unique().items(
        Joi.string().required().alphanum().min(1).max(20),
    ),
    location: Joi.object({
        longitude: Joi.number().required(),
        latitude: Joi.number().required(),
    }),
});
