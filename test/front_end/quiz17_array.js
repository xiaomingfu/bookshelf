var answer = prompt("What do you want to do?");
var array = [];
while(answer !== "quit"){   
    if(answer === "new"){
        newTodo();
    }
    else if (answer === "list"){
        listTodo();
    }
    else if (answer === "delete"){
        deleteTodos();
    }
    answer = prompt("What do you wnat to do?");

}
function newTodo(){
    var newTodo = prompt("what do you want to do?");
    array.push(newTodo);
    console.log("Deleted Todo");
}

function listTodo(){
    console.log("**********");
    array.forEach(function(item,index,){
        
        console.log(index + ":" + item);   
    });
    console.log("**********");  
}

function deleteTodo(){
    var i = prompt("What is the index you want to remove?")
    // delete(array[i]);
    array.splice(index,1);
    console.log("Deleted Todo")
}