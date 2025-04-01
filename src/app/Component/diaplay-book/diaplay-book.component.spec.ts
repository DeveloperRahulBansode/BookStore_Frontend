import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaplayBookComponent } from './diaplay-book.component';

describe('DiaplayBookComponent', () => {
  let component: DiaplayBookComponent;
  let fixture: ComponentFixture<DiaplayBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiaplayBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiaplayBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
