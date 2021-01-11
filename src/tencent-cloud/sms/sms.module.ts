import { forwardRef, Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma';
import { TencentCloudModule } from '../tencent-cloud.module';
import { TencentCloudShortMessageService } from './sms.service';

@Module({
  imports: [PrismaModule, forwardRef(() => TencentCloudModule)],
  providers: [TencentCloudShortMessageService],
  exports: [TencentCloudShortMessageService],
})
export class TencentCloudShortMessageServiceModule {}