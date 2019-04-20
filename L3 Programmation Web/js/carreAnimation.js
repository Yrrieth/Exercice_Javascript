window.onload = main;

var carre;
var carre2;
var frame = 0; // Ici, frame et frame2 représentent le numéro de la frame ainsi que la position des carrés
var frame2 = 0;
var widthScreen = screen.width; // Longueur de l'écran
var longueur = 100;
var couleur = "#A5DF00";
var vitesse = 3; // Vitesse de déplacement en pixel
var px = "px";

var carre3;
var frame3 = 0;

var droite = 1;

function draw() {
    var frame2 = - longueur; // Pour que le 2ème carré commence depuis la gauche
    carre = document.createElement("div"); // 1er carré
    carre.style.position = "absolute";
    carre.style.width = longueur + px;
    carre.style.height = 100 + px;
    carre.style.background = couleur;
    carre.style.left = 0 + px;
    document.body.appendChild(carre);

    carre2 = document.createElement("div"); // 2ème carré
    carre2.style.position = "absolute";
    carre2.style.width = longueur + px;
    carre2.style.height = 100 + px;
    carre2.style.background = couleur;
    carre2.style.left = - longueur + px;
    document.body.appendChild(carre2);

    carre3 = document.createElement("div"); // 1er carré
    carre3.style.position = "absolute";
    carre3.style.width = longueur + px;
    carre3.style.height = 100 + px;
    carre3.style.background = couleur;
    carre3.style.left = 0 + px;
    carre3.style.top = 100 + px;
    document.body.appendChild(carre3);
}

function move() {
    var posActuelle = carre.style.left.slice(0, -2); // Enlève "px" à la fin de carre.style.left

    carre.style.left = (frame++ * vitesse) + px; // Déplacement
    
    if (posActuelle > widthScreen - longueur) { // Si le 1er carré se trouve à droite de l'écran sans le dépasser 
	carre2.style.left = (frame2++ * vitesse - longueur) + px; // Le 2ème carré se déplace
    }
    
    if (posActuelle > widthScreen) {  // Si le 1er carré dépasse l'écran
	frame = 0; // Les carrés reviennent à leur position initiale
	frame2 = 0;
    }
}

function move3() {
    var posActuelle = carre3.style.left.slice(0, -2); // Enlève "px" à la fin de carre.style.left

    if (droite == 1) {
	carre3.style.left = (frame3++ * vitesse) + px; // Déplacement
	
	if (posActuelle > widthScreen - longueur)  // Si le 1er carré se trouve à droite de l'écran sans le dépasser 
	    droite = 0;
	
    } else if (droite == 0) {
	
	carre3.style.left = (frame3-- * vitesse) + px;

	if (posActuelle == 0)
	    droite = 1;
    }

}

function frameloop() {
    move();
    move3();
    window.requestAnimationFrame(frameloop);
}

function main() {
    draw();
    frameloop();
}
