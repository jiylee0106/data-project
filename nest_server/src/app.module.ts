import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PointModule } from './point/point.module';
import { ContentModule } from './content/content.module';
import { CollectionModule } from './collection/collection.module';
import { AuthModule } from './auth/auth.module';
import { CampaignModule } from './admin/campaign/campaign.module';
import { NewsModule } from './admin/news/news.module';
import { ParticipationModule } from './admin/participation/participation.module';
import { VideoModule } from './admin/video/video.module';

@Module({
  imports: [
    UserModule,
    PointModule,
    ContentModule,
    CollectionModule,
    AuthModule,
    CampaignModule,
    NewsModule,
    ParticipationModule,
    VideoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
