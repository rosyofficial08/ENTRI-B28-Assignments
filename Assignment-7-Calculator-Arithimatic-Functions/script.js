const display = document.getElementById("output-screen");

function appendToDisplay(num) {
   display.value += num;

}

function calculateResult(){
    try{
    display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}

function clearDisplay(){
    display.value = display.value.slice(0,-1);
}

function clearLastElement(){
    display.value = "";
}