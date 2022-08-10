
var display_screen = document.getElementById("display");

var clear_button = document.getElementById("clear");

clear_button.addEventListener(
  "click", function (e) {
    
        display_screen.innerText = '';
    
  }
);


var division_button = document.getElementById("division");

division_button.addEventListener(
  "click", function (e) {
    
        display_screen.innerText += e.target.innerText
    }
  
);


var multiplication_button = document.getElementById("multiplication");

multiplication_button.addEventListener(
  "click", function (e) {
    
        display_screen.innerText += e.target.innerText
    
  }
);


var back_button = document.getElementById("back");

back_button.addEventListener(
  "click", function (e) {
    
        display_screen.innerText = display_screen.innerText.slice(0,-1);
    }
);


var seven_button = document.getElementById("seven");

seven_button.addEventListener(
  "click", function (e) {
    display_screen.innerText += e.target.innerText
    
  }
);


var eight_button = document.getElementById("eight");

eight_button.addEventListener(
  "click", function (e) {
    display_screen.innerText += e.target.innerText
    
  }
);


var nine_button = document.getElementById("nine");

nine_button.addEventListener(
  "click", function (e) {
    display_screen.innerText += e.target.innerText
    
  }
);


var subtraction_button = document.getElementById("subtraction");

subtraction_button.addEventListener(
  "click", function (e) {
    display_screen.innerText += e.target.innerText
    
  }
);


var four_button = document.getElementById("four");

four_button.addEventListener(
  "click", function (e) {
    display_screen.innerText += e.target.innerText
    
  }
);


var five_button = document.getElementById("five");

five_button.addEventListener(
  "click", function (e) {
    display_screen.innerText += e.target.innerText
    
  }
);


var six_button = document.getElementById("six");

six_button.addEventListener(
  "click", function (e) {
    display_screen.innerText += e.target.innerText
    
  }
);


var addition_button = document.getElementById("addition");

addition_button.addEventListener(
  "click", function (e) {
    display_screen.innerText += e.target.innerText
    
  }
);


var one_button = document.getElementById("one");

one_button.addEventListener(
  "click", function (e) {
    display_screen.innerText += e.target.innerText
    
  }
);


var two_button = document.getElementById("two");

two_button.addEventListener(
  "click", function (e) {
    display_screen.innerText += e.target.innerText
    
  }
);


var three_button = document.getElementById("three");

three_button.addEventListener(
  "click", function (e) {
    display_screen.innerText += e.target.innerText
    
  }
);


var dot_button = document.getElementById("dot");

dot_button.addEventListener(
  "click", function (e) {
    display_screen.innerText += e.target.innerText
    
  }
);


var open_bracket_button = document.getElementById("open-bracket");

open_bracket_button.addEventListener(
  "click", function (e) {
    display_screen.innerText += e.target.innerText
    
  }
);


var zero_button = document.getElementById("zero");

zero_button.addEventListener(
  "click", function (e) {
    display_screen.innerText += e.target.innerText
    
  }
);

var closed_bracket_button = document.getElementById("closed-bracket");

closed_bracket_button.addEventListener(
  "click", function (e) {
    display_screen.innerText += e.target.innerText
    
  }
);


var equal_button = document.getElementById("equal");

equal_button.addEventListener(
  "click", function (e) {
   try{
    display_screen.innerText = eval(display_screen.innerText);
   
  } catch{
   display_screen.innerText = 'Error!';
  }
 }

);














