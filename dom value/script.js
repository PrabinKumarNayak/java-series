const myText = document.getElementById("myText")
const result = document.getElementById("result")
const fixed = document.getElementById("fixed")

let count = 0

myText.addEventListener("input",()=>{   
  fixed.textContent = "/10"
  result.textContent = myText.value.length

  count = myText.value.length

  if(count >= 6 && count<10){
    result.style.color = "green"
  }else if(count == 10){
    result.style.color = "red"
  }else{
    result.style.color = "black"
  }
})
