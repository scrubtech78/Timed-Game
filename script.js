
// set up timer


var start = document.getElementById("start");
var secondsLeft = 60;
var setTime = document.getElementById("Timer"); 
var Timer = document.getElementById("Timer");
var timeInterval; 

var codeQuiz= document.getElementById("codeQuizsection");

var section = document.getElementsByClassName("infobox");

var questionContainer = document.querySelector('.questions-container');
var choicesContainer = document.querySelector('.choices-container');
var questionTitle = document.querySelector('.title');

var currentQuestion = 0;  // use to keep track of our question at INDEX

function startTimer() {
    section[0].style.display="block";   
        
    timeInterval = setInterval(function () {
        secondsLeft--;
            
        if (secondsLeft > 1) {
            Timer.textContent = secondsLeft + "seconds remaining";

        }
        else if (secondsLeft === 1) {
            Timer.textContent = secondsLeft + "second remaining";
        }
        else {
             section[0].style.display="block";
             codeQuiz.style.display = "none"; 
            
            clearInterval(timeInterval);
            Timer.textContent = "Times up!";
        }
    }, 1000);

    codeQuiz.style.display = "none"; 
    showQuestion()
    
};

start.addEventListener("click", startTimer, false);

section[0].style.display="none";


function showQuestion() {

    // here we UPDATE an exisiting HTML element Content
    questionTitle.textContent = questions[currentQuestion].question;

    // clerar question choice container before adding NEW ELEMENTS 
    
    // how many choices do we have(?)
    for(let i = 0; i < questions[currentQuestion].choices.length; i++) {
        // create a button/element
        var ansBtn = document.createElement('button');
        // we have to ADD data, classes, content to the EMPTY ELEMENT (that was just created)
        ansBtn.textContent = questions[currentQuestion].choices[i];
        console.log("Button: ", ansBtn)
        // WE HAVE to REMEMBER to ADD it to the DOM (by appending it to an already exisiting HTML ELEMENT)
        choicesContainer.append(ansBtn)
        choicesContainer.clear(i);
          
        }
    }
 





choicesContainer.addEventListener('click', checkAnswer);


function checkAnswer(event) {
    //event.stopPropigation()

    console.log("Target: ", event.target);
    console.log("Target: ", event.target.textContent);
    console.log("Target: ", event.target.value);
    var userChoice = event.target.textContent;

    // compare ---> Was the User choice the saem as questions[currentQuestion].answer (?)
    // IF yes --> do one thing
    // IF no --> do another


    // increment your question
    currentQuestion++;
    showQuestion();

}
    
// function questionBox(question,answer){
//     question= questionAnswer.answers1
//     answer= questionAnswer.answers1
//     var el =document.getElementById("Question1");
//    el.textContent = questionBox

// }

// questionBox(question + answer );





// function quiz(questions, quizBox, resultsBox, submitButton){
//     function showQuestions(questions, quizBox){
//         var output = [];
//         var answers;
//         for(var i=0; i<questions.length; i++){
//             answers = [];
//             for(letter in question[i].answers){
//                 answers.push(
//                     '<label>'
//                     + '<input type = "radio" name = " question '+i+'"value="' +letter+'">'
//                     + letter + ':'
//                     + question[i] .answers[letter]
//                     + '</label>'
//                 );
//             }
//         }
//     }


// output.push(
//     '<div class="question">' + questions[i].question + '</div>'
//     + '<div class= answer">' + answers.join('') + '</div>');
// }
// quizBox .innerHTML = output.join('');
// showQuestions(question, quizBox);


// create our dataset 
const questions = [
    {
        question: "What does html stand for?",
        choices: ["hypertext markup language", "hypertext markdown language", "hypertext marksideway language"],
        answer: "hypertext markup language"
    },
    {
        question: "What does css stand for?",
        choices: ["hypertext markup language", "cascading style sheets", "common clown style"],
        answer: "cascading style sheets"
    },
];