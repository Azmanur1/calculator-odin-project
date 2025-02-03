const screenText = document.querySelector(".screen");

// Todo: Make M+ M- and MC functional
let string = "";
let bracketClick = 0;
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = string.replace(/x/g, "*").replace(/÷/g, "/"); // Convert symbols
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == '( )'){
      bracketClick ++;
      if(bracketClick % 2 == 1){
        string = string + '(';
      }
      else{
        string = string + ')';
      }
      bracketClick %= 2;
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    // console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})