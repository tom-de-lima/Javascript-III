function addInput(){
    const ul = document.getElementById("inputs")
    const text = document.getElementById("text")

    const newLi = document.createElement("li")
    newLi.className = "list-item"
    newLi.innerText = text.value

    ul.appendChild(newLi)

    text.value = ""
      
}