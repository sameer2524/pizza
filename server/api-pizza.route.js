
const express=require('express');
const app=express();

const apiPRouter=express.Router();

let Pizza=require('./pizza');


apiPRouter.route('/allPizza').get((req,resp)=>{
  
    Pizza.find((err,data)=>{
        if(err){
            resp.send("Failure");
        }
        resp.send(data);
    });
});

apiPRouter.route('/:pizzaId').get((req,resp)=>{
  
    let p_pizzaId=req.params.pizzaId;
    Pizza.find({pizzaId:p_pizzaId},(err,data)=>{
        if(err) {resp.send("Failed to load data for:"+p_pizzaId);}
        resp.send(data);
    });
});

apiPRouter.route('/pizzaName/:pizzaName').get((req,resp)=>{
 
   let p_pizzaName=req.params.pizzaName;
    Pizza.find({pizzaName:p_pizzaName},(err,data)=>{
        if(err) {resp.send("Failed to load data for:"+p_pizzaName);}
        resp.send(data);
    });
});

apiPRouter.route('/addPizza').post((req,resp)=>{
    let body_pizza=new Pizza(req.body);
   body_pizza.save().then(
                                ()=>resp.send("New pizza added to database"),
                                (err)=>resp.send("Failed while adding pizza details!! ")
   );
    
   
});

apiPRouter.route('/delete/:pizzaId').delete((req,resp)=>{
    
    let s_pizzaId=req.params.pizzaId;
    Pizza.findOneAndDelete({pizzaId:s_pizzaId},(err,data)=>{
        if(err)resp.send("No Records found!!!");
        resp.send(data+"deleted records");
    });
});

apiPRouter.route('/update/:pizzaId/:price').put((req,resp)=>{
    
    let o_pizzaId=req.params.pizzaId;
    let o_price=req.params.price;
    Pizza.updateOne({pizzaId:o_pizzaId},{price:o_price},(err,data)=>{
    if(err) resp.send("Failed to update!!!");
    resp.send("Updated records for" + o_pizzaId + "as" + o_price);
});
    
 });
module.exports=apiPRouter;