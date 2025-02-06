const text = document.getElementById("text")
const header = document.getElementById("header")
const add = document.getElementById("add")

let  value = ""
text.addEventListener("input",()=>{
    value = text.value;
})

add.addEventListener("click", () => {
    const list = document.createElement("h2")    
    list.textContent = value
    header.appendChild(list)
})
