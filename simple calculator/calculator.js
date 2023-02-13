let display=document.getElementById("display");


let displayValue='';
let buttons=document.querySelectorAll("button");


for(items of buttons){
    items.addEventListener('click', (e) =>{
        buttonText=e.target.innerText;
        console.log(buttonText)

        if(buttonText=='x'){
            buttonText="*";
            displayValue+=buttonText;
            display.value=displayValue;
        }
        else if(buttonText=='C'){
             displayValue='0';
             display.value=displayValue;
        }
        else if(buttonText=='='){
            display.value=eval(displayValue);
        }
        else{
             displayValue += buttonText;
             display.value=displayValue;
        }
     } );
}