


var secondsLeft = 60;

var ansBTn = document.querySelectorAll("ansBTN");
var nxtBtn = document.getElementById("nxtBtn");
// var startBtn = document.getElementById("stBtn");
// var inputs = document.getElementById("start")

var questionContainer = document.getElementById("questionS");
var indexCorrect=[]

var choicesContainer = document.getElementById("multiChoice")
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById ("choiceB");
var choiceC = document.getElementById("choiceC");




// QUESTIONS

let question1 = {
questionContainer: "Where is the text of the title tag displayed?",
choicesContainer: ["title bar", "body tag", "nav bar"],
indexCorrect: 0
}

let question2 = {
questionContainer: "what is stella?",
choicesContainer: ["g", "d", "p"],
indexCorrect: 0
}


//  START BTN ACTIVATED TIMER

function myStart() {

var timerInterval = setInterval(function() {
secondsLeft--;
start.textContent = secondsLeft;

if(secondsLeft === 0) {
clearInterval(timerInterval);
alert("Game-Over");
}

         
}, 1000);

  questionS.innerHTML = question1.questionContainer;
  choiceA.innerHTML = question1.choicesContainer[0];
  choiceB.innerHTML = question1.choicesContainer[1];
  choiceC.innerHTML = question1.choicesContainer[2];
}

function nxtBtn() {

  if (choiceA, choiceB, choiceC) {
      questionS.innerHTML = question1.questionContainer;
  }




}

// startBtn.addEventListener("click",myStart());

// WHEN A USER CLICKS ON THE BUTTN WITH THE CLASS ANS BTN  
// IS THE USER RIGHT OR WRONG
// IF RIGHT GET PNT AND ADV
// IF WRONG MINUS TIMECLK  secondsleft minus 5 AND ADV 

// ADD ARRAY OF ANS OBJECT
// GET NEXT QUEST - ARRAY OF QUEST OBJ

    
// QUIZ QUESTIONS

// var userQuess = function myChoice() {

//   if (userQuess ===) {

//   }

// }





// var answersFalse = []




// // quest.textContent = question1.quest1;
// anwsersF.textContent = question1.choice1;
// anwsersF.textContent = question1.choice2;
// anwsersT.textContent = question1.choice3;
// // function questions()

// // for (let i = 0; i < question1.length; i++) {
// //     question1[i];
// //     var nextQ = question1.push(quest1);
// //     quest.textContent = question1.push(quest1);
  
// // }

// //  console.log(question1)
// // // for (let i = 0; i < question1.choice1.length; i++) {
// // // (question1.choice1[i]);
    
    
// // // }

// // function nxtQuest(question) {
 
// // }
 

// var count = 0;
// var pointScore = document.querySelector("#point");
// // var decrementEl = document.querySelector("#decrement");
// var countEl = document.querySelector("#count");

// function myPoint(answersF, answersT) {
//   countEl.textContent = count;
//   let answersF = false;
//   let answersT = true;

//   if (answersT) {pointScore.addEventListener("click", function() {
//     count++;
//     alert("correct");
//   setCounterText();
// });


//   }
//   else if (answersF) {
//   alert("wrong choice")
//   }
//   }

