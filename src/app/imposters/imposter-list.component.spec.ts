import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImposterListComponent } from './imposter-list.component';

describe('ImposterListComponent', () => {
  let component: ImposterListComponent;
  let fixture: ComponentFixture<ImposterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImposterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImposterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
