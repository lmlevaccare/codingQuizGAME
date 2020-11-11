



var inputs = document.getElementById(".main")


var secondsLeft = 10;

function myStart() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    main.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
     alert("Game-Over");
    }
      
   
      

  }, 1000);
}

//  var minusT = document.getElementById("timer");

// function nxtQuest() {   
// }

// nxtQuest();

// function score(myTimer) {
//  var d = setInterval(myTimer, 1000);
//         document.getElementById("pnTs").innerHTML = d;
//     


var questions = document.getElementById("quest");
var choices = document.getElementById("choicE1");
var choices = document.getElementById("choice2");
var choices = document.getElementById ("choice3");
var answers = document.getElementById("anwser");

var correctA = [];
var wrongA = [];


let question1 = {
    quest1: "What is Stella?",
    choice1: ["a large dog", "cat", "goat"],
    // choice2: "cat",
    // choice3: "goat",
    answer1: "dog"
};


// for (let i = 0; i < question1.choice1.length; i++) {
//     alert(question1.choice1[i]);
//     return this.choice1;
// }

quest.textContent = question1.quest1;
choicE1.textContent = question1.choice1;
choice2.textContent = question1.choice2;
choice3.textContent = question1.choice3;


