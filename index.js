const questionContainer = document.querySelector('.question-container');
const btns = document.querySelectorAll('.true-false-list .btn');
const btn = document.querySelector('a');

const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion() {
  questionContainer.innerHTML = questions[0].questionText;
}

function askQuestionThen(time) {
  question = questions[0];
   return new Promise((resolve, reject) => {
     setTimeout(function(){
       resolve(questionContainer)
     }, time);
   });
}

function removeQuestion() {
  return new Promise((resolve, reject) => {
    resolve(questionContainer.innerHTML = '');
  });
}

function askQuestionThenRemoveQuestion(time) {
  appendQuestion();
  return new Promise((resolve, reject) => {

  });
}

function trueAndFalseButtons() {
  for(let i = 0; i < btns.length; i++) {
    btns[i].innerHTML = btns[i].innerHTML.toUpperCase().replace(' ', '');
  }
  return btns
}

function toggleTrueAndFalseButtons() {
  for(const btn of btns) {
    btn.classList.toggle('hide');
  };
  return btns;
}

function displayQuestionOnClick() {
  return btn.addEventListener('click', () => {
    toggleTrueAndFalseButtons();
    askQuestionThenRemoveQuestion(5000);
  });
}
