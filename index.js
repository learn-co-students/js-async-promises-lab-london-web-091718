const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
];

function sample(array) {
  return array[Math.floor ( Math.random() * array.length )]
}

let questionContainer = document.querySelector(".question-container");


let question;

const appendQuestion = (question) => {
  questionContainer.innerHTML = question.questionText;
};

const askQuestionThen = () => {
  question = sample(questions);
  return new Promise ((resolve, reject) => {
    setTimeout(function (){
      quest = appendQuestion(question);
      resolve(quest);
    }, 200);
  });
};

const removeQuestion = () => {
  questionContainer.innerHTML = "";
};

const askQuestionThenRemoveQuestion = (time) => {
  // question = sample(questions);
  appendQuestion(question);
  return new Promise ((resolve, reject) => {
    setTimeout(function (){
      removeQuestion();
      resolve();
    }, time + 9000);
  });
};

function displayQuestionOnClick(){
  let btn = document.querySelector('a')
  return btn.addEventListener('click', () => {
    toggleTrueAndFalseButtons();
    askQuestionThenRemoveQuestion(5000)
  })
}

function trueAndFalseButtons(){
  return btns = document.querySelector('.true-false-list').querySelectorAll('.btn')
}

function toggleTrueAndFalseButtons(){
  trueAndFalseButtons().forEach(function(btn){
    btn.classList.toggle("hide")
  })
}
