//your JS code here. If required.

let text = document.getElementById("text");
let delay = document.getElementById("delay");

let buttn = document.getElementById("btn");
let container = document.getElementById("output");

buttn.addEventListener("click",callme);

async function callme(e){
    e.preventDefault();
    let txtValue = text.value;
    let txtDelay = delay.value;
    text.value = "";
    delay.value = "";
    
    await delayCall(txtDelay);
    container.append(txtValue);
}

function  delayCall(txtDelay){
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve();
        },txtDelay)
    })
}