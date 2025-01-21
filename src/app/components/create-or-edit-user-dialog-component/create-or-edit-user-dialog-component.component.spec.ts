import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditUserDialogComponentComponent } from './create-or-edit-user-dialog-component.component';

describe('CreateOrEditUserDialogComponentComponent', () => {
  let component: CreateOrEditUserDialogComponentComponent;
  let fixture: ComponentFixture<CreateOrEditUserDialogComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateOrEditUserDialogComponentComponent]
    });
    fixture = TestBed.createComponent(CreateOrEditUserDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
