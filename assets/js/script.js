// Get the button elements and add event listeners to them
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('questions-area').innerText = 'Welcome to the Afro Geo Game';
});

//set variables
const letsGo = document.getElementById('start-btn');
const nextBut = document.getElementById('next-btn');
const restartBut = document.getElementById('restart-btn');
const timershow = document.getElementById('timer-btn');
const scoresshow = document.getElementById('scores-btn');
const scoresinshow = document.getElementById('scoresin-btn');
const clicksshow = document.getElementById('clicks-btn');
const quizRules = document.getElementById('quiz-rules');
const rulesDiv = document.getElementById('rules-guide');
const infoFront = document.getElementById('info');
const questionCont = document.getElementById('questions-cont');
const questionArea = document.getElementById('questions-area');
const answersArea = document.getElementsByClassName('answer-choice')[0];
const closeBtn = document.getElementById('close-btn');
let submit = document.getElementById('submit');
let myLabel = document.getElementById('myLabel');
let myName = document.getElementById('myName');
const form = document.getElementById('form');
let finishText = document.getElementById('finish-text-score');
let ruleText = document.getElementById('rule-text-score');
let shuffledQuestions; //hold the questions to be shuffled
let currentQuestionIndex; //index for the current question
let questionAnswered = false;
let score = 0;
var sec = 18000; //this gives time to start the quiz
var clicks = 0;
var time = setInterval(myTimer, 1000);

//event listeners for Start, Rules, Next and submit buttons
submit.addEventListener('click', subname);
letsGo.addEventListener('click', runGame);
quizRules.addEventListener('click', showrules);
nextBut.addEventListener('click', nextquestcurrquest);

//showrules code
function showrules() {
    quizRules.classList.add('hide');
    infoFront.classList.add('hide');
    form.classList.add('hide');
    rulesDiv.classList.remove('hide');
    submit.classList.remove('hide');
    myName.classList.remove('hide');
    closeBtn.addEventListener('click', reset);
}

//set a time for each question.

function myTimer() {
    document.getElementById('timer').innerHTML = sec;
    sec--;
    if (sec < -1) {   
        clearInterval(time);
        timeoutendGame();
    }
}

// reset function code to show and hide the rules after the close button is pressed in function showrules.

function reset() {
    quizRules.classList.remove('hide');
    finishText.classList.add('hide');
    rulesDiv.classList.add('hide');
    form.classList.remove('hide');
    submit.classList.remove('hide');
    myLabel.classList.remove('hide');
    infoFront.classList.remove('hide');
}

// subname code to enter the user name and then display at the end of the quiz.
function subname() {
    const enteredName = document.getElementById('myName').value.trim(); // Remove leading and trailing spaces

    myName = document.getElementById('myName').value;
    if (enteredName) {
        myName = enteredName;
        letsGo.classList.remove('hide');
        submit.classList.add('hide'); // code added to remove submit button once name has been entered.
        ruleText.classList.add('hide'); // code added to remove OOPS message when submit is entered.
        closeBtn.addEventListener('click', reset);

    } else {
        ruleText.classList.remove('hide');
        document.getElementById('rule-text-score').innerHTML = `OOPS, you didn't enter your name. Please enter a name and then press submit.`; 
    }
}


function runGame() { 
    
}

function getNextQuestion() { 
    
}

function displayQuestion(question) { 
    
}

function defaultState() {  
    
}

function checkAnswer(event) {
    
}

function setStatusClass(element, correct) {
  
}

function clearStatusClass(element) {
   
}

function incrementCorrectScore() {
    
}

function incrementWrongAnswer() {
 
}



