window.onload

let form = document.getElementById("form")
let names = document.getElementById("name")
let date = document.getElementById("date")
let calc = document.getElementById("calc_text")

form.addEventListener("submit", submitForm);


function submitForm(event){
    event.preventDefault();

    console.log(names.value)
    console.log(date.value)
    console.log(calc.value)
 }


