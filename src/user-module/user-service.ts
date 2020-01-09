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
    delUser(id : number){
        const idx = this.findIndex(id,"id")
        const name = a[idx]["name"];
        a.slice(idx,1);
        return "đã xóa " + name;
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
            element[type] = value;
        });
        return index;
    }
}
