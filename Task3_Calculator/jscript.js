let outputScreen = document.getElementById("outputscr");

function display(num) {
    outputScreen.value += num;
}

function calculate() {
    try {
        outputScreen.value = eval(outputScreen.value);
    } catch (err) {
        alert("Invalid Calculation");
    }
}

function clearScr() {
    outputScreen.value = "";
}

function del() {
    outputScreen.value = outputScreen.value.slice(0,-1);
}