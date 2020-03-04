import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProductsSectionComponent } from './our-products-section.component';

describe('OurProductsSectionComponent', () => {
  let component: OurProductsSectionComponent;
  let fixture: ComponentFixture<OurProductsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurProductsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurProductsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
