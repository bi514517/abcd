
import * as crypto from 'crypto';


export class User {

  id: number;

  name: string;

 
  avatar: string;

  email: string;

  hashPassword() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex');
  }
  password: string;
}