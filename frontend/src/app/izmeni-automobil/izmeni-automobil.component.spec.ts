import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmeniAutomobilComponent } from './izmeni-automobil.component';

describe('IzmeniAutomobilComponent', () => {
  let component: IzmeniAutomobilComponent;
  let fixture: ComponentFixture<IzmeniAutomobilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzmeniAutomobilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IzmeniAutomobilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
