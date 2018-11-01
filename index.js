const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let questionContainer = document.querySelector('.question-container');
// let btns = document.querySelector('.true-false-list').children
let btns = document.querySelectorAll('.true-false-list .btn')
let displayBtn = document.querySelector('a.btn')
let question;

function appendQuestion() {
  questionContainer.innerText = questions[0].questionText
  // questionContainer.appendChild(document.createTextNode(questions[0].questionText))
}

function askQuestionThen(time) {
  question = questions[0]
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      appendQuestion()
      resolve(question)
    }, time )
  })
}

function removeQuestion() {
  
  return new Promise((resolve, reject) => {
    resolve(questionContainer.innerHTML = '')
    // toggleTrueAndFalseButtons()
  })
}

function askQuestionThenRemoveQuestion(time) {
  appendQuestion()
  return askQuestionThen(time).then(removeQuestion)
  // askQuestionThen(time).then(removeQuestion())
  return new Promise((resolve, reject) => {
    
  })
}

function trueAndFalseButtons(){
  for (let i = 0; i < btns.length; i++) {
    btns[i].innerHTML = btns[i].innerHTML.toUpperCase().replace(" ", "")
  }
  return btns
}

function toggleTrueAndFalseButtons() {
  for (const li of btns) {
    li.classList.toggle('hide');
  }
  return btns
}

function displayQuestionOnClick() {
  
  return displayBtn.addEventListener('click', () => {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
  })

}