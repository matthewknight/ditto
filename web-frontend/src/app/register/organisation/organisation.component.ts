import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.scss']
})
export class OrganisationComponent implements OnInit {
    isLinear = false;
    nameFormGroup: FormGroup;
    emailFormGroup: FormGroup;
    passwordFormGroup: FormGroup;

    constructor(private _formBuilder: FormBuilder) {}

    ngOnInit() {
        this.nameFormGroup = this._formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required]
        });
        this.emailFormGroup = this._formBuilder.group({
            email: ['', Validators.required]
        });
        this.passwordFormGroup = this._formBuilder.group({
            password: ['', Validators.required]
        });
    }

    register() {
        console.log('Register clicked');
    }
}
