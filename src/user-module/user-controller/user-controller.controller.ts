import { Controller, Get, Post, Put, Delete, Body, Render, Res, Param } from '@nestjs/common';
import { UserService } from '../user-service';
import { User } from '../user.entity';
import { Response } from 'express';
import { AuthService } from  'src/auth-module/auth-service';

@Controller('user')
export class UserControllerController {
    constructor(private readonly service:UserService,private  readonly  authService:  AuthService){}
    @Get('/')
    getUser(@Res() res: Response){
        return res.render('manager', { 
            data: this.service.getUser()
        });
    }
    @Get('login') 
    @Render('signin')
    signin() {
     
    }  
    @Post('login')
    login(@Body() user: User) {
     return this.authService.login(user);
    }  
    @Get('register')
    @Render('register')
    register(){
        return { message: 'Hello world!' };
    }
    @Post('register')
    createUser(@Body() user: User,@Res() res: Response){
        this.authService.register(user);
        res.redirect('/user');
    }
    @Put()
    updateUser(@Body() user: User){
     return this.service.updateUser(user)
    }
    @Get('delete/:id')
    delUser(@Param('id') id :string , @Res() res: Response){
      this.service.delUser(id);
      return res.redirect('/user');
    }
}
