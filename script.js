const dino = document.getElementById("dino");

const cactus = document.getElementById("cactus");

let points = 0;

let rec = 0;
document.addEventListener("keydown",function(event)
{
    jump();
    document.getElementById('point').innerHTML = `${points}`;
})



function jump () {
    if (dino.classList != "jump") {dino.classList.add("jump");}
    setTimeout (function() 
    {
        dino.classList.remove("jump");
    }, 300);
    points++;
}

let isAlive = setInterval(function(){

    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) 
        {
            if (points > rec ) rec = points;
            document.getElementById('rec').innerHTML = `${rec}`;
            points = 0;
            document.getElementById('point').innerHTML = `${points}`;
            alert ("YEAH");
        } 

})
