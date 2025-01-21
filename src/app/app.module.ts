import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxDataGridModule } from 'devextreme-angular';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateOrEditUserDialogComponentComponent } from './components/create-or-edit-user-dialog-component/create-or-edit-user-dialog-component.component';
import { UserService } from './services/user.service';
import { DeleteDialogComponentComponent } from './components/delete-dialog-component/delete-dialog-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DeleteDialogComponentComponent,
    CreateOrEditUserDialogComponentComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule ,
    ModalModule.forRoot(),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
