var express=require('express')
var bodyParser=require('body-parser')
var mysql=require('mysql')
var app=express()
app.use(bodyParser.json())

app.get("/",function(request,response){
  response.send("hello from express js....")
});


app.get("/date",function(request,response){
  response.send("Date is:.."+new Date().toLocaleString())
});

app.listen(9596,function(err){
  if (err) throw err
  console.log("Server started on port 9596, to shut down hit ctrl+c")
})
