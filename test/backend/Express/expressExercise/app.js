var express = require("express");
var app = express();

var port = process.env.PORT || 3000;
app.listen(port,function(){
    console.log("Server Has Started!");
});

// "/" => "Hi there, welcome to my assignment!"
app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

// "/speak/pig" => "The pig says 'Oink'"
// "/speak/cow" => "The pig says 'Moo'"
// "/speak/dog" => "The pig says 'Woof Woof!'"
app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        cat: "I hate you human",
        goldfish: "...",
    };
    var animal = req.params.animal.toLowerCase();
    var animalSound = sounds[animal];
    
    res.send("The " + animal + " says '" + animalSound + "'");  
});

// "repeat/hello/3" => "hello" * 3
// "repeat/hello/5" => "hello" * 5
// "repeat/blah/2" => "blah" * 2

app.get("/repeat/:world/:number", function(req,res){
    var world = req.params.world;
    var num = Number(req.params.number);
    var prt = "";
    for(var i=0; i<num; i++){
        prt += world + " ";
    }
    res.send(prt);
});

app.get("*", function(req,res){
    res.send("Sorry, page not found... What are you doing with your life?");
});