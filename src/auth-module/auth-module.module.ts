import { Module } from '@nestjs/common';

//import { User } from '../user-module/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth-service';
import { UserService } from '../user-module/user-service';

@Module({
    imports: [
    JwtModule.register({
        secretOrPrivateKey: 'secret12356789'
    })
    ],
    providers: [AuthService,UserService]
})
export class AuthModuleModule {}
