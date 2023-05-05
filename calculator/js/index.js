let result = document.getElementById("result");

let value;

function addToResult(value) {
    result.value += value;
}

function calculate() {
    result.value = eval(result.value);
}

function clearResult() {
    result.value = '';
}

// remove buttom not work properly
function remove () {
    let substring = result.value;
    substring = substring.slice(0 , substring.length -1);
    result.value = substring;
    console.log(substring.length);
    console.log(substring);
}
