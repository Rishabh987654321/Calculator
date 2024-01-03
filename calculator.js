const express=require("express");
const app=express();

const body_parser=require("body-parser"); //we use body parser to give output of data stored in form in this case we return the calculation
app.use(body_parser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
    var num1=Number(req.body.n1);
    var num2=Number(req.body.n2);
    var result=num1+num2;
    res.send("The result is: "+result);
});

app.listen(3000,function(){
    console.log("server started at port 3000");
});