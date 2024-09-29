import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorHandlingPageComponent } from './error-handling-page.component';

describe('ErrorHandlingPageComponent', () => {
  let component: ErrorHandlingPageComponent;
  let fixture: ComponentFixture<ErrorHandlingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorHandlingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorHandlingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
