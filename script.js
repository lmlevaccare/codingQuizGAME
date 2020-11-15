
var secondsLeft = 60;

var pntCard = document.getElementById("scoreCard");

var indexCorrect = []
var ansBTn = document.querySelectorAll("ansBTN");
// var nxtBtn = document.getElementById("nxtBtn");
// var startBtn = document.getElementById("stBtn");
// var inputs = document.getElementById("start")
var questionContainer = document.getElementById("questionContain");


var count = 0;
var pntCard = document.querySelector("#scoreCard");
// var decrementEl = document.querySelector("#decrement");
var countER= document.querySelector("#count");

var choicesContainer = document.getElementById("multiChoice")
var choiceArray0 = document.getElementById("choiceA");
var choiceArray1 = document.getElementById ("choiceB");
var choiceArray2= document.getElementById("choiceC");



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


// QUESTIONS

let question1 = {
questionContainer: "Where is the text of the title tag displayed?",
choicesContainer: ["title bar", "body tag", "nav bar"],
// indexCorrect: 0
}

let question2 = {
questionContainer: "what is Java Source Code is compiled into?",
choicesContainer: ["Bytecode", "eXcode", "IDK"],
// indexCorrect: 0
}


let question3 = {
questionContainer: "How can you remove an item by index position?",
choicesContainer: ["Splice", "hoP", "Jump"],
// indexCorrect: 0
}

//  START BTN ACTIVATED TIMER




function nxtQuest() {
  questionS.innerHTML = question2.questionContainer;
  choiceA.innerHTML = question2.choicesContainer[0];
  choiceB.innerHTML = question2.choicesContainer[1];
  choiceC.innerHTML = question2.choicesContainer[2];
  
}

function setCounterText() {
  countER.textContent = count;
}

choiceA.addEventListener("click", function() {
  count++;
  setCounterText();
});

choiceB.addEventListener("click", function() {
  if(count > 0) {
    count--;
    setCounterText();
  }



  
}); 
 



// function setCounterText() {

// }

// incrementEl.addEventListener("click", function() {
//   count++;
//   setCounterText();
// });

// decrementEl.addEventListener("click", function() {
//   if(count > 0) {
//     count--;
//     setCounterText();
//   }
// }); 


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