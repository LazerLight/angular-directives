import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaveNumComponent } from './fave-num.component';

describe('FaveNumComponent', () => {
  let component: FaveNumComponent;
  let fixture: ComponentFixture<FaveNumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaveNumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaveNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
