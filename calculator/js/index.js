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
    result.value = result.value.slice(0, result.length-1);
    console.log(result.value);
}
