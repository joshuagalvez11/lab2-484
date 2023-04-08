window.onload

let form = document.getElementById("form")
let names = document.getElementById("name")
let date = document.getElementById("date")
let calc = document.getElementById("calc")
let calcText = document.getElementById("calc_text")
let saveBtn = document.getElementById("saveHours")
let hours = document.getElementById("hours")
let hoursErr = document.getElementById("hours-err")



// calcButtons = ['c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9']
// for(i=0; i < calcButtons.length; i++){
//     calcButtons[i] = document.getElementById(calcButtons[i])
// }
// calc_d = document.getElementById("c/")
// calc_m = document.getElementById("c*")
// calc_s = document.getElementById("c-")
// calc_a = document.getElementById("c+")
// calc_e = document.getElementById("c=")
// calc_c = document.getElementById("cc")

calcButtons = document.getElementsByClassName("calc_num")
calcOpButtons = document.getElementsByClassName("operator")

let calcN1, calcN2, calcOp;



console.log(calcButtons[4])
form.addEventListener("submit", submitForm);


function submitForm(event) {
    console.log("\nSUBMIT CHECK")
    event.preventDefault();

    console.log(names.value)
    console.log(isCapitalized(names.value)); 
    
    console.log(date.value)
    console.log(isDate(date.value))

    console.log(calcText.value)
}

function isCapitalized(str) {
    const words = str.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (word.length > 0 && word[0] !== word[0].toUpperCase()) {
        return false;
      }
    }

    return true;
  }
  

  function isDate(str) {
    const regexPatterns = [
        /^(1[0-2]|0[1-9])\/(3[01]|[12][0-9]|0[1-9])\/[0-9]{4}$/,
        /^(1[0-2]|0[1-9])\\(3[01]|[12][0-9]|0[1-9])\\[0-9]{4}$/,
        /^(1[0-2]|0[1-9])-(3[01]|[12][0-9]|0[1-9])-[0-9]{4}$/,
        /^(Jan(uary)?|Feb(ruary)?|Mar(ch)?|Apr(il)?|May|Jun(e)?|Jul(y)?|Aug(ust)?|Sep(tember)?|Oct(ober)?|Nov(ember)?|Dec(ember)?)\s+\d{1,2},\s+\d{4}/

    ];
  
    for (let i = 0; i < regexPatterns.length; i++) {
      if (regexPatterns[i].test(str)) {
        return true;
      }
    }
  
    return false;
  }




function calcButtonPress(event) {
    event.preventDefault();
    console.log("siuu")

    if (calcText.value == '0') {
        calcText.value = event.target.innerHTML
    } else {
        calcText.value += event.target.innerHTML
    }
}

function calcOpButtonPress(event) {
    event.preventDefault();

    console.log(isNaN(calcText.value))
    if (isNaN(calcText.value)) {
        calcText.value = "ERROR: press C"
        calcN1 = null, calcN2 = null, calcOp = null;
    } else {

        if (calcN1 && calcN2 & calcOp) {
            if (calcOp == '/') {
                equal = calcN1 / calcN2
                console.log(equal.toString())
                calcText.value = equal.toString()
                calcN1 = equal
            } else if (calcOp == '*') {
                equal = calcN1 * calcN2
                console.log(equal.toString())
                calcText.value = equal.toString()
                calcN1 = equal
            } else if (calcOp == '+') {
                equal = calcN1 + calcN2
                console.log(equal.toString())
                calcText.value = equal.toString()
                calcN1 = equal
            } else if (calcOp == '-') {
                equal = calcN1 - calcN2
                console.log(equal.toString())
                calcText.value = equal.toString()
                calcN1 = equal
            }
        }


        if (event.target.innerHTML == '/') {
            calcN1 = parseFloat(calcText.value)
            calcText.value = "0";
            calcOp = '/'
        } else if (event.target.innerHTML == '*') {
            console.log(calcN1)
            calcN1 = parseFloat(calcText.value)
            console.log(calcN1)
            calcText.value = "0";
            calcOp = '*'

        } else if (event.target.innerHTML == '+') {
            calcN1 = parseFloat(calcText.value)
            calcText.value = "0";
            calcOp = '+'
        } else if (event.target.innerHTML == '-') {
            calcN1 = parseFloat(calcText.value)
            calcText.value = "0";
            calcOp = '-'
        } else if (event.target.innerHTML == '=') {
            console.log('ee')
            calcN2 = parseFloat(calcText.value)
            if (calcOp == '/') {
                equal = calcN1 / calcN2
                console.log(equal.toString())
                calcText.value = equal.toString()
            } else if (calcOp == '*') {
                equal = calcN1 * calcN2
                console.log(equal.toString())
                calcText.value = equal.toString()
            } else if (calcOp == '+') {
                equal = calcN1 + calcN2
                console.log(equal.toString())
                calcText.value = equal.toString()
            } else if (calcOp == '-') {
                equal = calcN1 - calcN2
                console.log(equal.toString())
                calcText.value = equal.toString()
            }
            calcN1 = null, calcN2 = null, calcOp = null;

        } 
        // else if (event.target.innerHTML == 'c') {
        //     calcN1 = null, calcN2 = null, calcOp = null;
        //     calcText.value = '0'
        // }
    }
    if (event.target.innerHTML == 'c') {
        calcN1 = null, calcN2 = null, calcOp = null;
        calcText.value = '0'
    }
}

function saveHoursBtn(event) {
    event.preventDefault();
    if(calcText.value.length > 0 && isNaN(calcText.value) == false){
        hours.value = calcText.value
        hoursErr.classList.remove("err-true")
        hoursErr.classList.add("err-false")
    } else {
        hours.value = ""
        hoursErr.classList.remove("err-false")
        hoursErr.classList.add("err-true")
    }
}

for (i = 0; i < calcButtons.length; i++) {
    calcButtons[i].addEventListener("click", calcButtonPress);
}

for (i = 0; i < calcOpButtons.length; i++) {
    calcOpButtons[i].addEventListener("click", calcOpButtonPress);
}

saveBtn.addEventListener("click", saveHoursBtn);