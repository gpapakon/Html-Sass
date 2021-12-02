var btn = document.getElementById("mobile-button");
var menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () =>{
    menu.classList.toggle("hidden");
})


for(var i=0; i <menu.childElementCount;i++){
    menu.children[i].addEventListener("click", () =>{
        menu.classList.toggle("hidden");
    })
}







var app = document.getElementById('description');

var typewriter = new Typewriter(app, {
    loop: true,
    delay: 70,
    
});

typewriter.typeString('Hello World!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('a Software Engineer!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('a Tech Expert!')
    .pauseFor(2500)
    .deleteAll()
    .start();

    