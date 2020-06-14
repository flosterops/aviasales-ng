import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUserModel } from '../../models/userModel';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public user: BehaviorSubject<IUserModel> = new BehaviorSubject<IUserModel>(null);
    constructor() {}

    public setUser(login: string, email: string) {
        const user = { login, email };
        this.user.next(user);
    }
}
