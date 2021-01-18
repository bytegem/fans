import { dayjs } from '~deps';

/**
 * 认证Token有效期
 */
export interface AuthorizationTokenValidityPeriod {
  /**
   * token 生命有效期
   */
  expiredIn: {
    value: number;
    unit: dayjs.UnitType;
  };

  /**
   * Token 用作刷新生命周期
   */
  refreshExpiredIn: {
    value: number;
    unit: dayjs.UnitType;
  };
}
