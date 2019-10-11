
btnNext.onclick=function(){
  inputAnswer = inptQuestion.value
  lblOutput.value = `Your answer to question 1 is ${inputAnswer}, now click on the hamburger in the left corner to finish the progess bar`
  pgb1.value=50
  
}

hmbg1.onclick=function(){
  pgb1.value=100
}
