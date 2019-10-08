
var members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]



Button1.onclick=function(){
  if (members.includes(inptFirstName.value)){
      NSB.MsgBox("That name already exists") 
    } else {
      members.push(inptFirstName.value)
      NSB.MsgBox("That name has been added")
      console.log(members)
}
}
