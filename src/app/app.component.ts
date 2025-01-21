import { Component, OnInit } from '@angular/core';
import { DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UserService } from './services/user.service';
import { CreateOrEditUserDialogComponentComponent } from './components/create-or-edit-user-dialog-component/create-or-edit-user-dialog-component.component';
import { User } from './models/user.model';
import { DeleteDialogComponentComponent } from './components/delete-dialog-component/delete-dialog-component.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'challenge-odcc';
  isPopupVisible = false;
  Modal!: BsModalRef;

  users: User[] = [];
  constructor(
    private ModalService: BsModalService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  onEditClick = (e: DxDataGridTypes.ColumnButtonClickEvent) => {
    const initialState = {
      title: 'Edit',
      model: e.row?.key,
    };

    this.Modal = this.ModalService.show(
      CreateOrEditUserDialogComponentComponent,
      {
        initialState,
        class: 'modal-dialog-centered modal-lg',
      }
    );

    this.Modal.onHidden?.subscribe(() => {
      this.userService.editUser(this.Modal?.content?.model);
    });
  };

  onAddClick() {

    const initialState: any = {
      title: 'Create',
      model: {
        ID: null,
        ProfilePhoto: '',
        FirstName: '',
        LastName: '',
        Age: null,
        Education: '',
        NationalID: '',
        BirthDate: '',
      },
    };

    this.Modal = this.ModalService.show(
      CreateOrEditUserDialogComponentComponent,
      {
        initialState,
        class: 'modal-dialog-centered modal-lg',
      }
    );

    this.Modal.onHidden?.subscribe(() => {
      if(this.Modal?.content?.userForm.valid)
      this.userService.addUser(this.Modal?.content?.userForm.value);

    });
  };

  onDeleteClick = (e: DxDataGridTypes.ColumnButtonClickEvent) => {
    const initialState = {
      title: 'Delete',
      message: 'Do you want to delete this user?',
    };

    this.Modal = this.ModalService.show(DeleteDialogComponentComponent, {
      initialState,
      class: 'modal-dialog-centered',
    });

    this.Modal.onHidden?.subscribe(() => {
      const result = this.Modal?.content?.result;
      console.log(result);

      if (result) {
        this.deleteUser(e.row?.key.ID);
      }
    });
  };

  addUser() {
    const newUser = {
      ID: this.users.length + 1,
      ProfilePhoto: 'https://example.com/images/user4.jpg',
      FirstName: 'Robert',
      LastName: 'Brown',
      Age: 40,
      Education: "Master's in Engineering",
      NationalID: '789456123',
      BirthDate: '1983-08-15',
    };
    this.userService.addUser(newUser);
  }

  deleteUser(userId: number) {
    this.userService.deleteUser(userId);
  }
}
