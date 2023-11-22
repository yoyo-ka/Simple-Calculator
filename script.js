function appendOperation(operation) {
    document.getElementById('resultArea').innerHTML += operation;
}

function calculateResult() {
    let resultArea = document.getElementById('resultArea');
    let result = eval(resultArea.innerHTML);
    resultArea.innerHTML = result;
}

function deleteLast() {
    let resultArea = document.getElementById('resultArea');
    if (resultArea.innerHTML.endsWith(' ')) {
        resultArea.innerHTML = resultArea.innerHTML.slice(0,-3);
    } else {
        resultArea.innerHTML = resultArea.innerHTML.slice(0,-1);
    }
}