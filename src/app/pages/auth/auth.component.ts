import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
    public authForm = this.fb.group({
        login: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.max(16)])],
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.compose([Validators.required])],
        passCheck: ['', Validators.required],
    });

    constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

    ngOnInit(): void {}

    onSubmitClick() {
        this.authService.setUser(this.authForm.controls.login.value, this.authForm.controls.email.value);
        this.router.navigate(['/main']);
    }
}
