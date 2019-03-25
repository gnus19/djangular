import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeSDComponent } from './mensaje-sd.component';

describe('MensajeSDComponent', () => {
  let component: MensajeSDComponent;
  let fixture: ComponentFixture<MensajeSDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajeSDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajeSDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
