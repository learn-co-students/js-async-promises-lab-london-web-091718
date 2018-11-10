const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(question) {
    let questionsAppend = document.querySelector(".question-container")
    questionsAppend.innerHTML = question.questionText
  }


function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)
  return new Promise(function (resolve) {
    setTimeout(function() {
      resolve(question)
    }, time)
  })
}

 function removeQuestion() {
   let container = document.querySelector(".question-container")
   container.innerHTML = ""
 }

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons() {
  let buttons = document.querySelectorAll(".btn")
  buttons[0].innerHTML = "TRUE"
  buttons[1].innerHTML = "FALSE"
  return [buttons[0], buttons[1]]
}

const toggleTrueAndFalseButtons = () => 
  trueAndFalseButtons().forEach((button) =>  button.classList.toggle("hide"))


function displayQuestionOnClick() {
}
