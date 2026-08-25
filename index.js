let count  = 0;
let value = document.getElementById("count");


function increase(){
    count++;
    value . innerText = count
}
function decrease(){
    count--;
    value . innerText = count
}

function reset (){
    count = 0;
    value. innerText = count
}