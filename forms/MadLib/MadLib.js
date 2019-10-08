let nounArray = ['dog','man','woman','alligator','cat']
let verbingArray = ['walking','running','screaming','jumping','flying']

sltNoun1.onchange=function(){
  lblStory.value = `the ${sltNoun1.text} is selected`
}
