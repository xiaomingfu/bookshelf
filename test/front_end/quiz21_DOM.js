 var clickMe = document.querySelector("button");
// var isPurple = false;
// clickMe.addEventListener("click", changeColor);
// function changeColor(){
//     if(isPurple){
//         document.body.style.background = "white";  
//     }
//     else{
//         document.body.style.background = "purple";
//     }
//     isPurple = !isPurple;
// }

clickMe.addEventListener("click", function(){
    document.body.classList.toggle("purple");
});