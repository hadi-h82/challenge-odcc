import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-create-or-edit-user-dialog-component',
  templateUrl: './create-or-edit-user-dialog-component.component.html',
  styleUrls: ['./create-or-edit-user-dialog-component.component.scss'],
})
export class CreateOrEditUserDialogComponentComponent implements OnInit {
  title!: string;
  model!: User;
  userForm!: FormGroup;

  constructor(public bsModalRef: BsModalRef, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      ID: [this.model?.ID || 0],
      ProfilePhoto: [this.model?.ProfilePhoto || ''],
      FirstName: [this.model?.FirstName || '', Validators.required],
      LastName: [this.model?.LastName || '', Validators.required],
      Age: [this.model?.Age || '', [Validators.required, Validators.min(0)]],
      Education: [this.model?.Education || '', Validators.required],
      NationalID: [this.model?.NationalID || '', Validators.required],
      BirthDate: [this.model?.BirthDate || '', Validators.required],
    });
  }

  save(): void {
    if (this.userForm.valid) {
      this.model = this.userForm.value;
      this.bsModalRef.hide();
    } else {
      alert('Form is invalid!');
    }
  }

  cancel(): void {
    this.bsModalRef.hide();
  }
}
