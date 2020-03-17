import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImposterDetailComponent } from './imposter-detail.component';

describe('ImposterDetailComponent', () => {
  let component: ImposterDetailComponent;
  let fixture: ComponentFixture<ImposterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImposterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImposterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
