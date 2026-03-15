const display = document.getElementById("output-screen");

function appendToDisplay(num) {
   display.value += num;

}

function clearDisplay(){
    display.value = display.value.slice(0,-1);
}

function calculateResult(){
    try{
    display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}

function clearLastElement(){
    display.value = "";
}