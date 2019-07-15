import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../pizza';
import { ActivatedRoute, Router } from '@angular/router';
import { piService } from '../pi-service.service';



@Component({
  selector: 'app-pizza-update',
  templateUrl: './pizza-update.component.html',
  styleUrls: ['./pizza-update.component.css']
})
export class PizzaUpdateComponent implements OnInit {
  @Input()
  pizza:Pizza[];
  
  constructor(private router: Router,private service:piService) { }

  ngOnInit() {
     }


  updatePizza(id:any,price:any){
    
    this.service.updatePizza(id,price);
    this.router.navigateByUrl('/updatedPizza');
  }

} 