'use strict';
let i=0;


function correct(){
// console.log('correct answer :D');
  alert('correct answer :D');
  i=i+1;
}
function inCorrect(){
  // console.log('Incorrect answer :(');
  alert('Incorrect answer :(');
}






let name1=prompt('what is your name?  ');
alert('Welcome '+name1+' :D');
alert('let\'s see if you know me :P');
let q1=prompt('Am I a person who loves soccer games ?');
if(q1.toLowerCase() === 'yes'){
  correct();

}else{
  inCorrect();
}


let q2=prompt('Am I a person who wears glasses?');
if(q2.toLowerCase() === 'no'){
  correct();
}else{
  console.log('incorrect answer :(');
  inCorrect();
}


let q3=prompt('Am I a smoker person? ');
if(q3.toLowerCase() === 'yes'){
  correct();
}else{
  inCorrect();
}
let q4=prompt('Am I social person ? ');
if(q4.toLowerCase() === 'yes'){
  correct();
}else{
  inCorrect();
}

let q5=prompt('Am I a nervous person? ');
if(q5.toLowerCase() === 'yes'){
  correct();
}else{
  inCorrect();
}


alert('you have '+i+' correct answers :P ');
