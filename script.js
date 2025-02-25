/*Add your JavaScript here*/
var rickrollScore = 0;
var upScore = 0;
var questionCount = 0;
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var result = document.getElementById("result");
var restart = document.getElementById("restart");

function addUpScore(){
  upScore += 1;
  questionCount+=1;
  console.log("questionCount = " + questionCount + " upScore = "+ upScore);
  if(questionCount==3){
    console.log("The quiz is done!");
    updateResult();
  }
}

function addRickrollScore(){
  rickrollScore += 1;
  questionCount+=1;
  console.log("questionCount = " + questionCount + " rickrollScore = " + rickrollScore);
  if(questionCount==3){
    console.log("The quiz is done!");
    updateResult();
  }
}

function restartQuiz(){
  rickrollScore = 0;
  upScore=0;
  questionCount = 0;
  result.innerHTML = "The song that fits your vibe is...";
  enableQuestions();
}


q1a1.addEventListener("click", addUpScore);
q1a2.addEventListener("click", addRickrollScore);
q2a1.addEventListener("click", addRickrollScore);
q2a2.addEventListener("click", addUpScore);
q3a1.addEventListener("click", addRickrollScore);
q3a2.addEventListener("click", addUpScore);
restart.addEventListener("click", restartQuiz);

function updateResult(){
  if (rickrollScore >= 2){
    console.log("The song that fits your vibe is Never Gonna Give You Up by Rick Astley!");
    result.innerHTML = "The song that fits your vibe is Never Gonna Give You Up by Rick Astley!  You're upbeat and always up for a good laugh.";
  } else {
    console.log("The song that fits your vibe is Married Life from the movie Up!");
    result.innerHTML = "The song that fits your vibe is Married Life from the movie Up! You're pragmatic and pretty chill. You work with the flow  of life and make the most of it.";
  }
}

q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);


function disableQ1() {
  q1a1.disabled = true; 
  q1a2.disabled = true; 
}

function disableQ2() {
  q2a1.disabled = true; 
  q2a2.disabled = true; 
}

function disableQ3() {
  q3a1.disabled = true; 
  q3a2.disabled = true; 
}

function enableQuestions(){
  q1a1.disabled = false; 
  q1a2.disabled = false; 
  q2a1.disabled = false; 
  q2a2.disabled = false;
  q3a1.disabled = false; 
  q3a2.disabled = false;
  q4a1.disabled = false; 
  q4a2.disabled = false;
  q5a1.disabled = false; 
  q5a2.disabled = false;
}

