import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRDVComponent } from './info-rdv.component';

describe('InfoRDVComponent', () => {
  let component: InfoRDVComponent;
  let fixture: ComponentFixture<InfoRDVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoRDVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoRDVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
