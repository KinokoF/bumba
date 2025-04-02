import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiPageComponent } from './premi-page.component';

describe('PremiPageComponent', () => {
  let component: PremiPageComponent;
  let fixture: ComponentFixture<PremiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremiPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
