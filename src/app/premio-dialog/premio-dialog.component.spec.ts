import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremioDialogComponent } from './premio-dialog.component';

describe('PremioDialogComponent', () => {
  let component: PremioDialogComponent;
  let fixture: ComponentFixture<PremioDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremioDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
