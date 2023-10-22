function modifyText(){
  document.querySelector(".navbar-brand").nodeValue = "q"
}

const n = document.querySelector(".navbar-brand")
n.addEventListener("click", modifyText)