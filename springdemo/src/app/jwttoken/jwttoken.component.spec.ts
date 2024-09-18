import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JwttokenComponent } from './jwttoken.component';

describe('JwttokenComponent', () => {
  let component: JwttokenComponent;
  let fixture: ComponentFixture<JwttokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JwttokenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JwttokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
