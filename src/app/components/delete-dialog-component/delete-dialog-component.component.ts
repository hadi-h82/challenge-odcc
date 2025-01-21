import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-delete-dialog-component',
  templateUrl: './delete-dialog-component.component.html',
  styleUrls: ['./delete-dialog-component.component.scss'],
})
export class DeleteDialogComponentComponent implements OnInit {
  title!: string;
  message!: string;
  result!: boolean;

  constructor(public bsModalRef: BsModalRef) {}
  ngOnInit(): void {}

  deleteUser(): void {
    this.result = true;
    this.bsModalRef.hide();
  }

  cancel(): void {
    this.result = false;
    this.bsModalRef.hide();
  }
}
