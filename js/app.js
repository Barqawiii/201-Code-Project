'use strict';
let finalScore = 0;
function correct() {
  alert('correct answer :D');
  finalScore++;
}
function inCorrect() {
  alert('Incorrect answer :(');
}
function theFinalScore() {
  alert('you final score is : ' + finalScore + ' :D ');
}

function getUser() {
  let yourName = prompt('Hello , what is your name?  ');
  alert('Welcome ' + yourName + ' :D');
  alert('let\'s see if you know me :P');
  alert('you must enter yes or no ');
}
getUser();



let q1 = prompt('Am I a person who loves soccer games ?');
if (q1.toLowerCase() === 'yes' || q1.toLowerCase() ==='y') {
  correct();
} else {
  inCorrect();

}

let q2 = prompt('Am I a person who wears glasses?');
if (q2.toLowerCase() === 'no' || q2.toLowerCase() ==='n') {
  correct();
} else {
  inCorrect();
}

let q3 = prompt('Am I a smoker person?');
if (q3.toLowerCase() === 'yes' || q3.toLowerCase() === 'y') {
  correct();
} else {
  inCorrect();
}

let q4 = prompt('Am I social person ?');
if (q4.toLowerCase() === 'yes' || q4.toLowerCase() === 'y') {
  correct();
} else {
  inCorrect();
}

let q5 = prompt('Am I nervous person ?');
if (q5.toLowerCase() === 'no' || q5.toLowerCase() === 'n') {
  correct();
} else {
  inCorrect();
}

function q6() {
  let attempts = 4;
  let correctAnswer = '27';
  while (attempts > 0) {
    let age = prompt('how old am I ?');
    if (age === correctAnswer) {
      alert('correct answer ! :D');
      finalScore++;
      break;
    } else if (age > correctAnswer) {
      alert('too high');
    } else {
      alert('too low');
    }
    attempts--;
    alert('you still have ' + attempts + ' left');
  }
  alert('the correct answer is 27 :)');
}
q6();

function q7() {
  let myFood = ['shawarma', 'zinger', 'burger','pizza','suchi'];
  let cor=false;
  let attempts=myFood.length+1;
  for (let i=1;i<=5;i++ ) {
    let food = prompt('you should guess one of the junk food that I prefer?');

    for(let i=0;i<myFood.length;i++){
      if (food ===myFood[i]){
        cor =true;
        break;
      }

    }
    if(cor){
      alert('correct answer ! :D');
      finalScore++;
      alert('The junk food that I prefer : ' + myFood);
      break;
    }else if(cor===false){
      attempts--;
      alert('you still have ' + attempts + ' left');
    }
  }
}

q7();

theFinalScore();
