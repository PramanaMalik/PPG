const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
function jump(){
    if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function (){
        dino.classList.remove("jump");
    }, 300);
}
}
