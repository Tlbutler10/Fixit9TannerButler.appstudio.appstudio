let nounArray = ['dog','man','woman','alligator','cat']
let nounsArray = ['dogs','men','women','alligators','cats']
let verbingArray = ['walking','running','screaming','jumping','flying']
let verbArray = ['walk','run','scream','jump','fly']




/*
A [noun] in Nebraska was arrested this morning after 
[verb+ing] in front of a [adjective][noun]. The perpetrator 
had a history of [verb+ing], but no one - not even her [noun] -
ever imaginged she'd [verb] with a [noun].

Even her [noun] was surprised. "I always thought she was 
[adjective], but I never thought she'd do something like this."

Either way, we imagine that after witnessing her [verb+ing]
with a [adjective] [noun], there are probably a whole lot of 
  [noun + s] that are going to need therapy.
*/

btnSubmit2.onclick=function(){
  NSB.MsgBox(`There is a ${sltNoun1.text} in the warehouse`);
}

Button2.onclick=function(){
  sltNoun1.clear()
  for (i=0;i<nounArray.length;i++){
  sltNoun1.addItem(nounArray[i])
  sltNoun2.addItem(nounArray[i])
  sltNoun3.addItem(nounArray[i])
  sltNoun4.addItem(nounArray[i])
  sltNoun5.addItem(nounArray[i])
  sltNoun6.addItem(nounArray[i])
  sltNoun7.addItem(nounsArray[i])
  sltVerb1.addItem(verbingArray[i]
  sltNoun7.addItem(nounsArray[i]
  sltNoun7.addItem(nounsArray[i]
  }
}
