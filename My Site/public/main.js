var app = document.getElementById('description');

console.log(app);

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