import { Module } from '@nestjs/common';
import { UserService } from './user-service';
import { AuthService } from  'src/auth-module/auth-service';
import { JwtModule } from '@nestjs/jwt';
import { UserControllerController } from './user-controller/user-controller.controller';

@Module({
  imports: [    JwtModule.register({
    secretOrPrivateKey: 'secret12356789'
  })],
  providers: [UserService,AuthService],
  controllers: [UserControllerController]
})
export class UserModuleModule {}
