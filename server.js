var express=require('express');
var app=express();
app.get("/",(req,resp)=>{
    resp.send(
        "<h1>hello sales by vijay</h1>"
        +"<hr/>"+"<h3>smart devices</h3>"
        +"<br>"
        +"<ol>"
        +"<li>lapy</li>"
        +"<li>phoone</li>"
        +"<li>mobile</li>"
        +"<li>watch</li>"
        +"</ol>"
    );
});
var server=app.listen(9000);
console.log("online shop");