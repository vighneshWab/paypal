import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirbasetodoComponent } from './firbasetodo.component';

describe('FirbasetodoComponent', () => {
  let component: FirbasetodoComponent;
  let fixture: ComponentFixture<FirbasetodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirbasetodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirbasetodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
