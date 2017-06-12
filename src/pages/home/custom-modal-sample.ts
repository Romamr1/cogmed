import { Component } from '@angular/core';

import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { NgForm } from '@angular/forms';
import { MainServices } from '../../services/main.service';
export class CustomModalContext extends BSModalContext {

}

@Component({
  selector: 'modal-content',
  styles: [`
        .custom-modal-container {
            padding: 15px;
            heigth: auto;
        }
        .logInButton {
          background-color: #3CC9DB;
          margin-top: 40px;
        }

        .custom-modal-header {
            background-color: #3CC9DB;
            color: #fff;
            border-radius: 5px;
            -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            margin-top: -15px;
            margin-bottom: 40px;
        }        
    `],
   template: `
        <div class="container-fluid custom-modal-container">
            <div class="row custom-modal-header">
                <div class="col-sm-12">
                    <h1>Check credentials</h1>
                </div>
            </div>
            <div class="row" [ngClass]="{'myclass' : shouldUseMyClass}">
                <div class="col-xs-12">
                    <div class="jumbotron">
          						<form (ngSubmit)="onSubmitCr(myForm)" #myForm="ngForm" novalidate>
                        <ion-item>
                          <ion-label>USERNAME</ion-label>
                          <ion-input type="text" name="name" ngModel required></ion-input>
                        </ion-item>
                        <ion-item>
                          <ion-label>PASSWORD</ion-label>
                          <ion-input type="password" name="password" ngModel required></ion-input>

                        </ion-item>
                        <a href="">FORGOT?</a>

                        <button ion-button class="logInButton" block type="submit">LOG IN</button>
          						</form>
                    </div>
                </div>
            </div>
        </div>`
})
export class CustomModal implements CloseGuard, ModalComponent<CustomModalContext> {
  context: CustomModalContext;

  public wrongAnswer: boolean;
  public users: any[];

  constructor(public dialog: DialogRef<CustomModalContext>, private mainServices: MainServices) {
		this.context = dialog.context;
		this.wrongAnswer = true;
		dialog.setCloseGuard(this);
    this.users = mainServices.getUsers();
	}


  onSubmitCr(form: NgForm){
    console.log(form.value);
    console.log(this.users);
    for (let i=0;i<this.users.length;i++){
      if ((this.users[i].name === form.value.name) && (this.users[i].password === form.value.password)) {
        this.wrongAnswer = false;
      	this.dialog.close();
      }
    }
  }
  beforeDismiss(): boolean {
    return true;
  }
  beforeClose(): boolean {
    return this.wrongAnswer;
  }
}
