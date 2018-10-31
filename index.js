const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(question){
  return document.querySelector('.question-container').innerHTML=question.questionText
}

function askQuestionThen(time){
  question = questions[0]
  appendQuestion(question)
  return new Promise(function(resolve,reject) {
    setTimeout(() => {
      resolve(question)
      }, time)
    })
}
// ASK LATER WTF IS GOING ON WITH THE PROMISE THING

function removeQuestion(){
  return new Promise( () => {
  document.querySelector('.question-container').innerHTML=''})
}

function askQuestionThenRemoveQuestion(time){
  return  askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons(){
  return document.querySelectorAll('.lighten-2')
}


// MY ORIGINAL SOLUTION: WORKS BUT DOES NOT PASS TEST
// function toggleTrueAndFalseButtons(){
//   const buttons=trueAndFalseButtons()
//   buttons.forEach( button => {
//     if (button.style.visibility === "hidden"){
//       button.style.visibility = "" }
//       else {
//         button.style.visibility = "hidden"
//       }
//   })
// }

function toggleTrueAndFalseButtons(){
  const buttons=trueAndFalseButtons()
  buttons.forEach( button => {
    button.classList.toggle('hide')
  })


}

function displayQuestionOnClick(){
  let button = document.querySelector('.lighten-2')
  button.addEventListener('click', ()=>{
    askQuestionThenRemoveQuestion(5000)
    toggleTrueAndFalseButtons()
  })
}