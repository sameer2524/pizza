import { Component, OnInit, OnDestroy } from '@angular/core';
import { Pizza } from '../pizza';
import { ActivatedRoute, Router, NavigationEnd, RouterEvent } from '@angular/router';

import { Subject } from 'rxjs';
// import { filter } from 'minimatch';
import { piService } from '../pi-service.service';

@Component({
  selector: 'app-pizza-get',
  templateUrl: './pizza-get.component.html',
  styleUrls: ['./pizza-get.component.css']
})
export class PizzaGetComponent implements OnInit,OnDestroy {
  public destroyed = new Subject<any>();
  pizzas:Pizza[];
  selectedPizza:Pizza;
  constructor(private route:ActivatedRoute,
    private service:piService,
    private router: Router) { 
 // override the route reuse strategy
      this.router.routeReuseStrategy.shouldReuseRoute = function(){
        return false;
      }

      this.router.events.subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
          // trick the Router into believing it's last link wasn't previously loaded
          this.router.navigated = false;
          // if you need to scroll back to top, here is the right place
          window.scrollTo(0, 0);
        }
        this.selectedPizza=null;
        });  
    }

  ngOnInit() {
    this.service.getPizzas().subscribe(PizzaList=>this.pizzas=PizzaList);   
  }
  onSelection(pizza:Pizza){
    this.selectedPizza=pizza;
  }
  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
 
}