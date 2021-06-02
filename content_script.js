var timer1;

window.onhashchange = applyBackground();

function applyBackground() {
    timer1 = setInterval(findElement1, 1000);    
}
//Feed, Network, Notifications, Profile, Jobs, Messaging
function findElement1(){
    var element = document.getElementsByTagName("body")[0];
    if (element!=null){
        element.style.backgroundImage="linear-gradient(90deg, rgb(255, 0, 0,0.55),rgb(255, 165, 0,0.55), rgb(255, 255, 0,0.55), rgb(0, 128, 0,0.55), rgb(0, 0, 255,0.55), rgb(75, 0, 130,0.55), rgb(238, 130, 238,0.55))";
        clearInterval(timer1);
    }
}

applyBackground();
