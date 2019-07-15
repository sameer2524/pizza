import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { piService } from '../pi-service.service';

@Component({
  selector: 'app-pizza-delete',
  templateUrl: './pizza-delete.component.html',
  styleUrls: ['./pizza-delete.component.css']
})
export class PizzaDeleteComponent implements OnInit {

  constructor(private route:ActivatedRoute, private pizzaService:piService) { }

  ngOnInit() {
    let pizzaId=this.route.snapshot.paramMap.get("pizzaId");
    this.deletePizza(pizzaId);
  }
  deletePizza(pizzaId)
  {
    this.pizzaService.deletePizza(pizzaId);
  }
}