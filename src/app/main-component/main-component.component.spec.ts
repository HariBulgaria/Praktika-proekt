import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponentComponent } from './main-component.component';

describe('MainComponentComponent', () => {
  let component: MainComponentComponent;
  let fixture: ComponentFixture<MainComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
