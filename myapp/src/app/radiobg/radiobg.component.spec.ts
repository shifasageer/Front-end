import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiobgComponent } from './radiobg.component';

describe('RadiobgComponent', () => {
  let component: RadiobgComponent;
  let fixture: ComponentFixture<RadiobgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadiobgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadiobgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
