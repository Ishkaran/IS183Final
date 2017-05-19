import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankCreateComponent } from './Tank-create.component';

describe('TankCreateComponent', () => {
  let component: TankCreateComponent;
  let fixture: ComponentFixture<TankCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
