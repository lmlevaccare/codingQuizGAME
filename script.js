

const questionContainerElement = document.getElementById('questionContainer')
var choicesContainer = document.getElementById("multiChoice")

var btnA = document.getElementById("btnA");
var btnB = document.getElementById("btnB");
var btnC = document.getElementById("btnC");


var indexCorrect = []

var pntCard = document.querySelector("#scoreCard");

var countER = document.querySelector("#count");

// var start = document.getElementById('start');




var questiondiv = document.getElementById("questionS");


 var nextBtn = document.getElementById('add');
// nextBtn.addEventListener("click", addQuestion);



var secondsLeft = 60;

var questionStart = "what is html?"
  var choices = ["mark-up", "stella", "lauren"];

function myStart() {
   
   

    var timerInterval = setInterval(function() {
        secondsLeft--;

 
        // $('#start').text(secondsLeft)
        start.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("Game-Over");
        }


    }, 1000);


    $('#questionS').append('<p>' + questionStart + '</p>');
    $('#multiChoiceA').append('<p>' + choices[0] + '</p>');
    $('#multiChoiceB').append('<p>' + choices[1] + '</p>');
    $('#multiChoiceC').append('<p>' + choices[2] + '</p>');

    $('#startBtn').hide()



}






let shuffledQuestions, currentQuestionIndex



nextBtn.addEventListener('click', function (entries) {
      
    entries =questionArray
   
shuffledQuestions = entries.sort(() => Math.random() - .5)
        currentQuestionIndex = 0
    entries = shuffledQuestions[currentQuestionIndex]
    

    
    entries=JSON.stringify(entries)
        $("#questionS").text(entries)
    $("#multiChoiceA").text(answerArrayA[0])
    $("#multiChoiceB").text(answerArray1[1])
     $("#multiChoiceC").text(answerArray1[2])
    


    });




var questionArray = ["What is a script refer to in JavaScript?",
    "What does 'concat' mean in JavaScript?", "What answer would you expect when using length method?","To generate a random number between 0 and 1 which MathObject would you use?", "Which of the following is considered a data type?","Document Object Model, DOM refers to what?","charAt() would refer to what information?", "==, !==, >=, < are called what in JavaScript?","In a for loop, what are the three condition statements the loop consists of?"];

var answerArray = [
    {
        A: "series of instructions",
        B: "words on the screen",
        C: "dialogue for the browser"
    

    },
    {
        A: "the distance between 2 points",
        B: "to subtract",
        C: "to put together"

    },
    {
        A: "the distance between 2 points",
        B: "to subtract",
        C: "to put together"
    }
];

    

 
console.log(answerArray[0].A);

// var output='';
// for(var i=0; i < people.length; i++){

  
// output += '<li>'+people[i].age+ '</li>'
//   // console.log(people[i].name);

// // }
// document.getElementById('people').innerHTML=output;