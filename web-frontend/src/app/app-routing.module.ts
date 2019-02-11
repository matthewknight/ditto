import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {IndividualComponent} from './register/individual/individual.component';
import {OrganisationComponent} from './register/organisation/organisation.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'register',
        children: [
            { path: '', component: RegisterComponent},
            { path: 'individual', component: IndividualComponent},
            { path: 'organisation', component: OrganisationComponent},
        ]
    },
    {
        path: "**",
        component: PageNotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
