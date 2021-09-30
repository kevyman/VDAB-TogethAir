import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddButtonsComponent } from './add-buttons.component';

describe('AddButtonsComponent', () => {
  let component: AddButtonsComponent;
  let fixture: ComponentFixture<AddButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
