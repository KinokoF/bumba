import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimbriPageComponent } from './timbri-page.component';

describe('TimbriPageComponent', () => {
  let component: TimbriPageComponent;
  let fixture: ComponentFixture<TimbriPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimbriPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimbriPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
