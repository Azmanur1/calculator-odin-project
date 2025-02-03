const screen = document.querySelector(".screen");

function handleClick(value){
        screen.value += value;
}


function evaluation(){

    if(eval(screen.value) != "undefined")
    {
        screen.value = eval(screen.value);
    }
    
}

function clearScreen(){
    screen.value = "";
}
function bracket(){
    screen.value += "(";
}
function modulus(){
    screen.value += "%";
}

function div(){
    screen.value += "/";
}
function mul(){
    screen.value += "*";
}

function minus(){
    screen.value += "-";
}
function plus(){
    screen.value += "+";
}
function equal(){
    if(screen.value.length !== 0){
        screen.value = evaluation();
    }
}

function decimalValue(){
    screen.value += ".";
}
