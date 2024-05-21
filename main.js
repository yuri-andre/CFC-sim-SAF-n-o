let time = "";
let elemento = document.querySelector("#time");

while(time == "") {time = prompt("Para que time você torce?");}


if(time == null) {elemento.textContent = "Tanto faz";}else{elemento.textContent=time}

elemento.textContent = time;
