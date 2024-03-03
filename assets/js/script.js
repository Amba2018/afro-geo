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
