import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModuleModule } from './user-module/user-module.module';
import { AuthModuleModule } from './auth-module/auth-module.module';

@Module({
  imports: [UserModuleModule, AuthModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
