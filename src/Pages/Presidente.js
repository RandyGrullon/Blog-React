import React from 'react'

const Presidente = () => {
  function pressed(){
    let age;
    age = Number(document.getElementById("age").value);
    if(age <= 17)
    {
        
       alert("You are not an adult");
    }
    else
    {
       window.location.href = "https://www.presidente.com.do/";
    }
  }
  return (
    <div class="main--container--presidente">
    <h2 class="main--tittle_presidente">Escribe tu edad</h2>
    <input type="text" 
          class="main--input--presidente" 
          name="age" 
          placeholder="Edad" 
          id="age"/>

    <button class="main--text" 
            onclick="pressed()">
              Press me
    </button>
</div>

  )
  
}

export default Presidente