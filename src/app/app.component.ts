import { Component, OnInit } from '@angular/core';
import { DxDataGridTypes } from 'devextreme-angular/ui/data-grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'challenge-odcc';
  isPopupVisible = false;
  constructor() {}

  ngOnInit(): void {}

  addUser() {
    console.log('addUser');
  }

  onEditClick = (e: DxDataGridTypes.ColumnButtonClickEvent) => {
    console.log('edit');
    // console.log(e);
  };

  onDeleteClick = (e: DxDataGridTypes.ColumnButtonClickEvent) => {
    console.log('delete');
    // console.log(e);
  };
}
