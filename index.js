const questions = [{
    questionText: "Lightning never strikes in the same place twice",
    answer: false
  },
  {
    questionText: "Humans can distinguish between over one trillion different smells",
    answer: true
  },
  {
    questionText: "Goldfish only have a memory of about three seconds",
    answer: false
  }
]

let question;

function appendQuestion(question) {
  let questionContainer = document.querySelector('.question-container')
  questionContainer.innerHTML = question.questionText
}

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(question)
    }, time)

  })
}


function removeQuestion() {
  let questionContainer = document.querySelector('.question-container')
  questionContainer.innerHTML = ''

}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons() {
  let button = document.querySelectorAll('.btn')
  console.log(button[0], button[1])
  return [button[0], button[1]]
}

function toggleTrueAndFalseButtons() {
  let button = document.getElementsByClassName('btn')
  for (const element of button) {
    if (element.className.includes("hide")) {
      element.style.visibility = "hidden"
    } else {
      element.style.visibility = "visible"
    }
  }

}

function displayQuestionOnClick() {
  document.getElementById('ask-button').addEventListener('click', function () {
    return appendQuestion(question)
  })
}
