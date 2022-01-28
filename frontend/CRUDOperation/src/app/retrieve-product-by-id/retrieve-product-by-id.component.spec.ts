import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveProductByIdComponent } from './retrieve-product-by-id.component';

describe('RetrieveProductByIdComponent', () => {
  let component: RetrieveProductByIdComponent;
  let fixture: ComponentFixture<RetrieveProductByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrieveProductByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveProductByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
