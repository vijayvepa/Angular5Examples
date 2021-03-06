import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { AddServerComponent } from './add-server/add-server.component';
import { BindingAssignmentComponent } from './binding-assignment/binding-assignment.component';
import { DirectivesAssignmentComponent } from './directives-assignment/directives-assignment.component';


@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent, WarningAlertComponent, SuccessAlertComponent, AddServerComponent, BindingAssignmentComponent, DirectivesAssignmentComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
