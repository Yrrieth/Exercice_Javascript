window.onload = main;

faker.locale = "fr";

var tabNom = Array();
var tabPrenom = Array();
var tabVille = Array();
var tabMetier = Array();

var table;
var nbDonnee = 500;

function cree() {
    table = document.createElement("table");
    table.id = "table";
    table.style.border = "2px solid black";
    table.style.borderCollapse = "collapse";
    document.body.appendChild(table);
}

function mettre(tab, type) {
    var i;
    for (i = 0; i < nbDonnee; i++) {
	if (type == 0)
	    tab.push(faker.fake("{{name.lastName}}"));
	if (type == 1)
	    tab.push(faker.fake("{{name.firstName}}"));
	if (type == 2)
	    tab.push(faker.fake("{{address.city}}"));
	if (type == 3)
	    tab.push(faker.fake("{{name.jobType}}"));
    }
}

function tri (colonne) {
	if(colonne == 0)
		tabNom.sort();
	if(colonne == 1)
		tabPrenom.sort();
	if(colonne == 2)
		tabVille.sort();
	if(colonne == 3)
		tabMetier.sort();

	for(var i = 0; i < 500; i++) {
		console.log(tabNom[i] + i);
	}
}

function creeTable() {
    var nbLigne = 0;
    var nbCellule = 4;
    var i = 0; // Rang/colonne de la cellule
    var ligne;
    var cellule;
    var bouton;
    var texte;
    
    while(nbLigne <= nbDonnee) {
    	ligne = document.createElement("tr");
		ligne = table.insertRow(-1);
		i = 0;

		while (i < nbCellule) {
			cellule = document.createElement("td");
		    cellule = ligne.insertCell(i);
		    cellule.style.width = 150 + "px"; // Taille des cellules

		    
		    if (nbLigne == 0) {
		    	bouton = document.createElement("button");
		    	bouton.id = i;
			    if (i == 0) {
					texte = document.createTextNode("Nom");
					bouton.addEventListener("click", tri(i) /*function() {tabNom.sort();}*/);
			    }
			    if (i == 1) {
					texte = document.createTextNode("Prénom");
					//bouton.addEventListener("click", tri(tabPrenom, i));
			    }
			    if (i == 2) {
					texte = document.createTextNode("Ville");
					//bouton.addEventListener("click", tri(tabVille, i));
			    }
			    if (i == 3) {
					texte = document.createTextNode("Métier");
					//bouton.addEventListener("click", tri(tabMetier, i));
			    }
			    bouton.appendChild(texte);
		    	cellule.appendChild(bouton);

			} else {

				if (i == 0) {
					texte = document.createTextNode(tabNom[nbLigne - 1]);
			    }
			    if (i == 1) {
					texte = document.createTextNode(tabPrenom[nbLigne - 1]);

			    }
			    if (i == 2) {
					texte = document.createTextNode(tabVille[nbLigne - 1]);

			    }
			    if (i == 3) {
					texte = document.createTextNode(tabMetier[nbLigne - 1]);

			    }
			    cellule.appendChild(texte);

			}
		    i++;
		}
	nbLigne++;
    }
}


function main() {
    cree();
    mettre(tabNom, 0);
    mettre(tabPrenom, 1);
    mettre(tabVille, 2);
    mettre(tabMetier, 3);
    //tabNom.sort();

    //creeTable();
   /*for(var i = 0; i < 500; i++) {
	console.log(tabNom[i] + i);
	}*/
	/*
	for(var i = 0; i < 500; i++) {
	console.log(tabPrenom[i] + i);
	}
	for(var i = 0; i < 500; i++) {
	console.log(tabVille[i] + i);
	}
	for(var i = 0; i < 500; i++) {
	console.log(tabMetier[i] + i);
	}*/
    creeTable();
}
