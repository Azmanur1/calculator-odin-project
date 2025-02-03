const screenText = document.querySelector(".screen");

// Todo: Make M+ M- and MC functional
let string = "";
let bracketClick = 0;
// let test = '' //delete later after testing;
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
  //  console.log(e.target.innerHTML);

    if(e.target.innerHTML == '='){
      string = string.replace(/x/g, "*").replace(/÷/g, "/"); // Convert symbols
      string = eval(string);
      console.log(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == '←'){
      console.log(e.target.innerHTML);
      let len = string.length;
      let result = string.slice(0,len-1);
       string = result;
       document.querySelector('input').value = string;
       console.log(string);

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