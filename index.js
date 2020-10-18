//alert("hello");



// document.querySelectorAll("button")[2].addEventListener("click", handleClick);
// function handleClick(){
//     alert("hello");
// }

var noOfButtons= document.querySelectorAll(".drum").length;
for(var i=0;i<noOfButtons;i++){
document.querySelectorAll(".drum")[i].addEventListener("mousedown", playMusicclick);
//buttonAnimation(this.innerHTML);
//console.log();

}

function playMusicclick(){
    var key= this.innerHTML;
    console.log(key);
    buttonAnimation(this.innerHTML);

    switch (key){
    
    case "k":
        playSound("sounds/crash.mp3");
    break;
        case "s":
        playSound("sounds/snare.mp3");
    break;
    case "a":
        playSound("sounds/tom-1.mp3");
    break;
        case "d":
        playSound("sounds/tom-2.mp3");
    break;
    case "l":
        playSound("sounds/tom-3.mp3");
    break;
        case "j":
        playSound("sounds/tom-4.mp3");
    break;
    case "w":
        playSound("sounds/kick-bass.mp3");
    break;
    
    }
    }

// function onClick(){
//     alert("hello");
// }


function playSound(path){
 var myAudio = new Audio(path);
 myAudio.play();

}
// function changeColor(){
//    this.style.color="pink";

// }
// function combination(){
//     playSound();
//     changeColor();
   
// }
// var house1={
// name:"jhon",
// age:19,
// exp:2,
// languages:["eng","tel"]

// }
// console.log(house1.name);

// function House1(name, age, exp, languages){
    
//     this.name=name;
//     this.age=age;
//     this.exp=exp;
//     this.languages=languages;
//     this.method= function(){
//         return (1+3);

//     }
    
    
//     }

//     function on(){
//     var house1=new House1("thrilok",2,1,["english]"]);
//     //onClick();
//    console.log(house1.method());

//     }

 
var noOfButtons= document.querySelectorAll(".drum").length;
//for(var i=0;i<noOfButtons;i++){
document.addEventListener("keypress", function(event){
    playMusic(event.key);
   
  //  buttonAnimation(event.key);




});



//}
function playMusic(key){
//var key= this.event.key;
console.log(key.toLowerCase());
switch (key){

case "k":
    playSound("sounds/crash.mp3");
break;
    case "s":
    playSound("sounds/snare.mp3");
break;
case "a":
    playSound("sounds/tom-1.mp3");
break;
    case "d":
    playSound("sounds/tom-2.mp3");
break;
case "l":
    playSound("sounds/tom-3.mp3");
break;
    case "j":
    playSound("sounds/tom-4.mp3");
break;
case "w":
    playSound("sounds/kick-bass.mp3");
break;

}
}

function buttonAnimation(currentkey){

//console.log(currentkey);
var buttona= document.querySelector("." + currentkey);
 console.log(buttona);
 buttona.classList.add("pressed");
 setTimeout(function(){

    buttona.classList.remove("pressed");},100);

}

 