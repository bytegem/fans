import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import {
  AUTH_METADATA_HAS_AUTHORIZATION,
  AUTH_METADATA_HAS_AUTHORIZATION_TYPE,
} from './authorization-token/constants';
import { HasTokenExpiredType } from './authorization-token/enums';
import { AuthorizationGuard } from './authorization.guard';

/**
 * Auth Decorator Options.
 */
export interface AuthDecoratorOptions {
  /**
   * Has authorization token
   */
  hasAuthorization?: boolean;

  /**
   * Has authorization token type.
   */
  type?: HasTokenExpiredType;
}

/**
 * Need validate HTTP endpoint `Authorization` token decorator.
 * @param param validate HTTP endpoit `Authorization` token options.
 * @param param.hasAuthorization Has need validate
 * @param param.type validate token type.
 */
export function Authorization(options?: AuthDecoratorOptions) {
  return applyDecorators(
    SetMetadata(AUTH_METADATA_HAS_AUTHORIZATION, options?.hasAuthorization),
    SetMetadata(
      AUTH_METADATA_HAS_AUTHORIZATION_TYPE,
      options?.type || HasTokenExpiredType.AUTH,
    ),
    UseGuards(AuthorizationGuard),
  );
}

/**
 * Http auth validate token.
 */
export const AuthorizationWith = () =>
  Authorization({
    hasAuthorization: true,
    type: HasTokenExpiredType.AUTH,
  });

/**
 * Http auth, without validate token.
 */
export const AuthorizationWithout = () =>
  Authorization({
    hasAuthorization: false,
    type: HasTokenExpiredType.AUTH,
  });
