import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptivechildComponent } from './receptivechild.component';

describe('ReceptivechildComponent', () => {
  let component: ReceptivechildComponent;
  let fixture: ComponentFixture<ReceptivechildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptivechildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptivechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
