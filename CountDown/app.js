const enddate =  "25 Jan 2023 10:00 Pm";

document.getElementById("end-date").innerText = enddate;
const inputs = document.querySelectorAll("Input")
function clock(){
    const end = new Date(enddate);
    const now = new Date;
    const diff = (end-now)/1000;

    if(diff<0) return;
    
    inputs[0].value = Math.floor(diff/3600/24);
    inputs[1].value = Math.floor(diff/3600)%24;
    inputs[2].value = Math.floor(diff/60)%60;
    inputs[3].value = Math.floor(diff%60);
}

clock(); //function calling

setInterval(clock,1000);