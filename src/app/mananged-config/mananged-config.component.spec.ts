import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManangedConfigComponent } from './mananged-config.component';

describe('ManangedConfigComponent', () => {
  let component: ManangedConfigComponent;
  let fixture: ComponentFixture<ManangedConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManangedConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManangedConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
