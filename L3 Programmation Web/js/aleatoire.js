window.onload = main;

function nouveau(el, parent, w, h, x, y, idt, evnt, style) {
    var el = document.createElement(el);
    el.style.position = "absolute";
    el.style.width = w + "px";
    el.style.height = h + "px";
    el.style.left = x + "px";
    el.style.top = y + "px";
    el.id = idt;
    el.evnt = evnt;
    for(var valeur in style){
        el.style[valeur] = style[valeur];
    }
    parent.appendChild(el);
    return el;
}

// On renvoie un nombre aléatoire entre une valeur min (incluse) 
// et une valeur max (exclue)
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// Faire un tableau pour stocker les rectangles déjà existants
// Mettre un while pour comparer le rectangle que l'on veut créer avec les autres
// rectangles déjà existants

function make() {
    for (var i = 0; i <= 15; i++) {
    	var randomWidth = getRandomArbitrary(50, 200);
    	var randomHeight = getRandomArbitrary(50, 200);
    	var x = getRandomArbitrary(0, document.body.clientWidth);
    	var y = getRandomArbitrary(0, document.body.clientHeight)
    	var randomColor = "rgb(" + getRandomArbitrary(0, 255) + "," + getRandomArbitrary(0, 255) + "," + getRandomArbitrary(0, 255) + ")"
    	var element = nouveau("div", document.body, randomWidth, randomHeight, x, y, "", "", {"background":randomColor})
    }
}


function main() {
    console.log(document.body.clientWidth)
    make()
}
