import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PointModule } from './point/point.module';
import { ContentModule } from './content/content.module';
import { CollectionModule } from './collection/collection.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { CampaignModule } from './campaign/campaign.module';
import { NewsModule } from './news/news.module';
import { ParticipationModule } from './participation/participation.module';
import { VideoModule } from './video/video.module';

@Module({
  imports: [
    UserModule,
    PointModule,
    ContentModule,
    CollectionModule,
    AuthModule,
    AdminModule,
    CampaignModule,
    NewsModule,
    ParticipationModule,
    VideoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
