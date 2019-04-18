
//Setting button functionality and adding click events to the buttons for log in logic 
const input = document.querySelector("input");
const submit = document.querySelector("button");
const card = document.querySelector(".card");
const errorText = document.querySelector(".errorText");


function setBorderColorToRed() {
    document.getElementsByClassName("email").style.borderColor = "red";
  }

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    if(input.value === "" || input.value.length < 6) {
        input.classList.add("apply-shake");
        input.classList.remove("validate")
        card.classList.remove("validateCard")
        errorText.classList.remove("errorValid")
        errorText.classList.add("errorText")
        errorText.innerHTML = "must be 6 charachters or more";
        
    }
    else{
        input.classList.add("validate");
        card.classList.add("validateCard")
        errorText.classList.add("errorValid")
        window.location.href="../HomeScreen/index.html";

    }
});

input.addEventListener("animationend", (e) => {
    input.classList.remove("apply-shake");
    errorText.innerHTML = "";
    
    
});