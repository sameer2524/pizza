import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { pizzaAddComponent } from './pizza-add.component';


describe('PizzaAddComponent', () => {
  let component: pizzaAddComponent;
  let fixture: ComponentFixture<pizzaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ pizzaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(pizzaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
