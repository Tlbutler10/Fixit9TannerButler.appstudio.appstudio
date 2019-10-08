let nounArray = ['dog','man','woman','alligator','cat']
let nounsArray = ['dogs','men','women','alligators','cats']
let verbingArray = ['walking','running','screaming','jumping','flying']
let verbArray = ['walk','run','scream','jump','fly']
let adjArray = ['slimy','bearded','massive','medicated','angry']



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
  NSB.MsgBox(`A ${sltNoun1.text} in Nebraska was arrested this morning after 
${sltVerb1.text} in front of a ${sltAdj1.text} ${sltNoun2.text}. The perpetrator 
had a history of ${sltVerb2.text}, but no one - not even her ${sltNoun3.text} -
ever imaginged she'd ${sltVerb3.text} with a ${sltNoun4.text}.

Even her ${sltNoun5.text} was surprised. "I always thought she was 
${sltAdj2.text}, but I never thought she'd do something like this."

Either way, we imagine that after witnessing her ${sltVerb4.text}
with a ${sltAdj3.text} ${sltNoun6.text}, there are probably a whole lot of 
  ${sltNoun7.text} that are going to need therapy.
`);
}

Button2.onclick=function(){
  sltNoun1.clear()
  sltNoun2.clear()
  sltNoun3.clear()
  sltNoun4.clear()
  sltNoun5.clear()
  sltNoun6.clear()
  sltNoun7.clear()
  sltVerb1.clear()
  sltVerb2.clear()
  sltVerb3.clear()
  sltVerb4.clear()
  sltAdj1.clear()
  sltAdj2.clear()
  sltAdj3.clear()
  for (i=0;i<nounArray.length;i++){
  sltNoun1.addItem(nounArray[i])
  sltNoun2.addItem(nounArray[i])
  sltNoun3.addItem(nounArray[i])
  sltNoun4.addItem(nounArray[i])
  sltNoun5.addItem(nounArray[i])
  sltNoun6.addItem(nounArray[i])
  sltNoun7.addItem(nounsArray[i])
  sltVerb1.addItem(verbingArray[i])
  sltVerb2.addItem(verbingArray[i])
  sltVerb3.addItem(verbArray[i])
  sltVerb4.addItem(verbingArray[i])
  sltAdj1.addItem(adjArray[i])
  sltAdj2.addItem(adjArray[i])
  sltAdj3.addItem(adjArray[i])
  }
}
