function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const choices = ["&#9994;","&#9995;","&#9996;"];


let changeItemIcon=(itemReceived)=>{
    //set user icon
    document.querySelector('.userH2').innerHTML = itemReceived
    //randomise
    let randomValue=randomIntFromInterval(0,2);
    //set computer icon
    document.querySelector(".computerH2").innerHTML= choices[randomValue];
}
