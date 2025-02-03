const screenText = document.querySelector(".screen");

let string = "";
let bracketClick = 0;
let result = "";
let len = 0;
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    string = String(string);
    if(e.target.innerHTML == '='){
      string = string.replace(/x/g, "*").replace(/÷/g, "/"); // Convert symbols
      // for handlig erro that can occur in eval();
      try {
        string = eval(string);
      } catch (error) {
        string = string;
        console.log(error);
      }
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == '←'){
       len = string.length;
       if(len > 0)
       {
        result = string.slice(0,len-1);
        string = result;
        document.querySelector('input').value = string;
       }
       

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
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})