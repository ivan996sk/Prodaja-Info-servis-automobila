import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAutomobilComponent } from './new-automobil.component';

describe('NewAutomobilComponent', () => {
  let component: NewAutomobilComponent;
  let fixture: ComponentFixture<NewAutomobilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAutomobilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAutomobilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
