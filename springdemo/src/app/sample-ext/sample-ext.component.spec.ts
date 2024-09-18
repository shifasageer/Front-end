import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleExtComponent } from './sample-ext.component';

describe('SampleExtComponent', () => {
  let component: SampleExtComponent;
  let fixture: ComponentFixture<SampleExtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleExtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleExtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
