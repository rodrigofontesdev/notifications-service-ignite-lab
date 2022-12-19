import { Module } from '@nestjs/common';
import { NotificationsRepository } from '@app/repositories/notification-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsRespository } from './prisma/repositories/prisma-notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRespository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
