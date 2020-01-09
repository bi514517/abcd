import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
let a = [];
@Injectable()
export class UserService {
    getUser(){
        return a;
    }
    createUser(user : User){
        a.push(user)
        console.log(a);
        return user;
    }
    updateUser(user : User){
        a[this.findIndex(user.id,"id")] = user
        return user;
    }
    delUser(id : string){
        const idx = this.findIndex(id,"id")
        var b = [];
        a.filter(function(ele,i){
            if(i != idx)
            b.push(ele);
        });
        a = b;
        return "đã xóa "
    }
    findByEmail(email: string): Promise<User> {
        return a[this.findIndex(email,"email")];
    }

    findById(id: number): Promise<User> {
        return a[this.findIndex(id,"id")];
    }
    findIndex(value,type){
        var index = -1;
        a.forEach((element,i) => {
            if(element[type] == value)
                index = i;
        });
        return index;
    }
}
