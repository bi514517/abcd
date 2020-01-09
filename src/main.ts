import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );
  app.set('views', join(__dirname, '../src','views'));
  app.set('view engine', 'ejs');
  await app.listen(3000);
  console.log('app đang chạy tại localhost:3000');
  
}
bootstrap();
