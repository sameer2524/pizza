import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { ActivatedRoute } from '@angular/router';
import { piService } from '../pi-service.service';

@Component({
  selector: 'app-pizza-add',
  templateUrl: './pizza-add.component.html',
  styleUrls: ['./pizza-add.component.css']
})
export class pizzaAddComponent implements OnInit {
  angForm:FormGroup;
  constructor(private fb:FormBuilder, private pizzaService:piService) { 
    this.createForm();
  }

  ngOnInit() {
  }
  createForm(){
    this.angForm=this.fb.group({
      pizzaId:['',Validators.required],
      pizzaName:['',Validators.required],
      price:['',Validators.required]
    });
  }

  addPizza(pizzaId,pizzaName,price){
    this.pizzaService.addPizza(pizzaId,pizzaName,price);
  }

}
