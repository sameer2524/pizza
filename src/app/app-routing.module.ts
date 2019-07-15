import { NgModule } from '@angular/core';
import { PizzaDeleteComponent } from './pizza/pizza-delete/pizza-delete.component';
import { PizzaUpdateComponent } from './pizza/pizza-update/pizza-update.component';
import { PizzaGetComponent } from './pizza/pizza-get/pizza-get.component';
import { pizzaAddComponent } from './pizza/pizza-add/pizza-add.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{path:'',redirectTo:'allPizza',pathMatch:'full'},
{path:'allPizza', component:PizzaGetComponent},
{path:'pizza/add', component:pizzaAddComponent},
{path:'pizza/delete/:pizzaId',component:PizzaDeleteComponent},
{path:'pizza/update/:pizzaId/:price',component:PizzaUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
