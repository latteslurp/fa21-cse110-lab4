let d = new Date();
let time = d.toLocaleDateString()
let interval = setInterval(myCallback, 1000, time);

function myCallback(time){
     console.log(time);
}