import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAppartementFormComponent } from './new-appartement-form.component';

describe('NewAppartementFormComponent', () => {
  let component: NewAppartementFormComponent;
  let fixture: ComponentFixture<NewAppartementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAppartementFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAppartementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
