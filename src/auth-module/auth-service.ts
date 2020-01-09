import { Injectable } from '@nestjs/common';
import { JwtService } from  '@nestjs/jwt';
import { UserService } from  '../user-module/user-service';
import { User } from  '../user-module/user.entity';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) 
    { 
        
    }
    private async validate(userData: User): Promise<User> {
        return await this.userService.findByEmail(userData.email);
    }

    public login(user: User){

        let payload = `${user.name}${user.id}`;
        const accessToken = this.jwtService.sign(payload);
        console.log(user);
        
        if(this.userService.findIndex(user.name,"name") != -1 &&
            this.userService.findIndex(user.password,"password") != -1)
            return {
                expires_in: 3600,
                access_token: accessToken,
                user_id: payload,
                status: 200
            };
        else return {
            mess: "Đăng nhập thất bại",
            status: 404
        }

    }

    public register(user: User){
        user.id = Math.floor(Math.random() * 100000);
        return this.userService.createUser(user)
    } 
}
