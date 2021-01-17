import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ViewerEntity } from '../user';
import {
  AuthDecorator,
  AuthorizationTokenDecorator,
  AuthService,
  HasTokenExpiredType,
} from '~auth';
import { AuthorizationToken, PrismaClient } from '~prisma';
import { LoginInput, LoginType } from './dto';
import { AuthorizationTokenEntity } from './entities';

@Resolver((of) => AuthorizationTokenEntity)
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly prisma: PrismaClient,
  ) {}

  /**
   * Resolve `AuthorizationTokenEntity`.`user` field.
   * @param authorizationToken parent object.
   */
  @ResolveField((returns) => ViewerEntity)
  user(@Parent() authorizationToken: AuthorizationToken) {
    return this.prisma.user.findUnique({
      where: { id: authorizationToken.userId },
    });
  }

  /**
   * User login or using phone register.
   * @param data User create Authorization login type.
   */
  @Mutation((returns) => AuthorizationTokenEntity, {
    description: 'User login or using phone register.',
  })
  login(
    @Args({
      name: 'data',
      type: () => LoginInput,
    })
    data: LoginInput,
  ) {
    const { account, type, encrypted } = data;
    if (type === LoginType.PASSWORD) {
      return this.authService.loginWithPassword(account, encrypted);
    }

    return this.authService.loginWithSecurityCode(account, encrypted);
  }

  /**
   * Query HTTP endpoint authorization token entity.
   * @param client token query Prisma client.
   */
  @Query((returns) => AuthorizationTokenEntity, {
    description: 'Query HTTP endpoint authorization token entity.',
  })
  @AuthDecorator({ hasAuthorization: true, type: HasTokenExpiredType.AUTH })
  authorization(
    @AuthorizationTokenDecorator()
    token: AuthorizationToken,
  ) {
    return token;
  }

  /**
   * Refresh HTTP endpoint authorization token entity.
   * @param client token query Prisma client.
   */
  @Mutation((returns) => AuthorizationTokenEntity, {
    description: 'Refresh HTTP endpoint authorization token entity.',
  })
  @AuthDecorator({ hasAuthorization: true, type: HasTokenExpiredType.REFRESH })
  refreshAuthorization(
    @AuthorizationTokenDecorator()
    token: AuthorizationToken,
  ) {
    return this.authService.refreshAuthorizationToken(token);
  }
}
