import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {RegistrationService} from '../api/registration.service';
import {Volunteer} from '../../models/Volunteer';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss']
})
export class IndividualComponent implements OnInit {
    isLinear = false;
    nameFormGroup: FormGroup;
    emailFormGroup: FormGroup;
    passwordFormGroup: FormGroup;

    constructor (
        private _formBuilder: FormBuilder,
        private _registrationService: RegistrationService
    ) {}

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
        this._registrationService.registerIndividual(new Volunteer(
            this.nameFormGroup.get('firstName').value,
            this.nameFormGroup.get('lastName').value,
            this.emailFormGroup.get('email').value,
            this.passwordFormGroup.get('password').value
        )).subscribe(value => {
                console.log(value);
            },
            error => {
                console.log(error);
            }
        );
    }
}
