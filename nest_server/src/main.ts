import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const origin = configService.get<string>('ORIGIN');
  const corsOptions = {
    origin,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    credentials: true,
  };

  const config = new DocumentBuilder()
    .setTitle('Nest API')
    .setDescription('Sinabro를 위한 swagger 문서')
    .setVersion('1.0.0')
    .addBearerAuth()
    .addTag('Auth', '인증 정보 관련 API')
    .addTag('User', '유저 정보 관련 API')
    .addTag('Point', '포인트 관련 API')
    .addTag('Collection', '컬렉션 관련 API')
    .addTag('Content', '컨텐츠 관련 API')
    .addTag('Global', '글로벌 관련 API')
    .addServer('http://localhost:3000/api')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  app.enableCors(corsOptions);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
};
bootstrap();
