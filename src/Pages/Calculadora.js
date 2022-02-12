import React from 'react'

function Calculadora() {
  let display = document.getElementById('display-calc');

let buttons = Array.from(document.getElementsByClassName('button-calc'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerText === 'C'){
            display.innerText = '';
         }
         else if(e.target.innerText === '='){
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
        }else if(e.target.innerText === '←'){
            if (display.innerText){
                display.innerText = display.innerText.slice(0, -1);
             }
        }else{
            display.innerText += e.target.innerText;
        }
    });
});
  return (
    
    <div class="container--calc">
      <section>
  
        <div id="display-calc"></div>
        <div class="buttons-calc">
            <div id="clear-calc" class="button-calc">C</div>
            <div class="button-calc">/</div>
            <div class="button-calc">*</div>
            <div class="button-calc">&larr;</div>
            <div class="button-calc">7</div>
            <div class="button-calc">8</div>
            <div class="button-calc">9</div>
            <div class="button-calc">-</div>
            <div class="button-calc">4</div>
            <div class="button-calc">5</div>
            <div class="button-calc">6</div>
            <div class="button-calc">+</div>
            <div class="button-calc">1</div>
            <div class="button-calc">2</div>
            <div class="button-calc">3</div>
            <div class="button-calc">.</div>
            <div class="button-calc">(</div>
            <div class="button-calc">0</div>
            <div class="button-calc">)</div>
            <div id="equal-calc" class="button-calc">=</div>
        </div>
    </section>
  </div>
  
  )

  
}




export default Calculadora