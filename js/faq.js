(function(){

// Selecting elements

const question = document.querySelectorAll(".faq .question")
const questionParagraphs = document.querySelectorAll(".faq .question p")
const btnQuestion = document.querySelectorAll(".faq .question button")

// Getting default height text
let globalPHeight = []
questionParagraphs.forEach(p =>{
  globalPHeight.push(p.clientHeight)
})

// Closing all questions
question.forEach(q =>{
  q.classList.toggle("close")
})

// Adding click event
question.forEach((q, i) => {
  q.addEventListener("click", function openOrClose(){

  // Verifying if have class close
  const haveClass = q.classList.value.includes("close")

  if(haveClass){
      question[i].classList.remove("close")
      question[i].classList.add("open")
      questionParagraphs[i].style.height = globalPHeight[i] + "px"
  }else{
      questionParagraphs[i].style.height = 0
      question[i].classList.remove("open")
      question[i].classList.add("close")
  }
  })
})

})()