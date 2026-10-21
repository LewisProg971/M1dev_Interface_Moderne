import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BindingTest } from './binding-test';

describe('BindingTest', () => {
  let component: BindingTest;
  let fixture: ComponentFixture<BindingTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindingTest],
    }).compileComponents();

    fixture = TestBed.createComponent(BindingTest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
