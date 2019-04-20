window.onload=function(){ //ensures the DOM elements load before the JS is executed
//makes the box size increase when grow button is clicked
document.getElementById("button1").onclick=function(grow){
   
    document.getElementById("box").style.height = '500px';
    document.getElementById("box").style.width = '500px';
};

//changes the box color to blue when blue button is clicked
document.getElementById('button2').onclick=function(Blue){
    
    document.getElementById('box').style.backgroundColor = 'blue';

};

//reloads the page when the reset button is clicked
document.getElementById("button4").onclick=function(reset){

    location.reload();

};

//fades the box out

document.getElementById("button3").onclick=
function fadeOut(box) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
        }
        document.getElementById('box').style.opacity = op;
        op -= 0.1;
    }, 50)}
}
