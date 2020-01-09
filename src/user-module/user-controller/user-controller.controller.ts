import { Controller, Get, Post, Put, Delete, Body} from '@nestjs/common';
import { UserService } from '../user-service';
import { User } from '../user.entity';
import { AuthService } from  'src/auth-module/auth-service';

@Controller('user-controller')
export class UserControllerController {
    constructor(private readonly service:UserService,private  readonly  authService:  AuthService){}
    @Get()
    getUser(){
     return this.service.getUser()
    }
    @Post('login')
    login(@Body() user: User) {
     return this.authService.login(user);
    }  
    @Post()
    createUser(@Body() user: User){
     return this.authService.register(user);
    }
    @Put()
    updateUser(@Body() user: User){
     return this.service.updateUser(user)
    }
    @Delete()
    delUser(id :number){
     return this.service.delUser(id)
    }
}
