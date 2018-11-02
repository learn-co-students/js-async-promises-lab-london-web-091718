const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question

let questionContainer = document.querySelector('.question-container')


const appendQuestion = question => {
  questionContainer.innerHTML = questions[0].questionText
}

const askQuestionThen = time => {
  question = questions[0]
  appendQuestion(question)
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(question)
    }, time)
  })
}

const removeQuestion = () => {
  questionContainer.innerHTML = ""
}

const askQuestionThenRemoveQuestion = time => {
  appendQuestion(question)
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      removeQuestion()
      resolve()
    }, time )
  })
}

const trueAndFalseButtons = () => buttons = document.querySelector('.true-false-list').querySelectorAll('.btn')

const toggleTrueAndFalseButtons = () => trueAndFalseButtons().forEach(btn => btn.classList.toggle("hide"))

const displayQuestionOnClick = () => {
  let btn = document.querySelector('a')
  btn.addEventListener('click', () => {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
  })
}

