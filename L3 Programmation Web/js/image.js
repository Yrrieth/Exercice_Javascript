window.onload = main;

/*
https://developer.mozilla.org/fr/docs/Web/API/File
https://developer.mozilla.org/en-US/docs/Web/API/FileReader/onload
https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
*/

var inpt;
var cvs; // Canvas (Le support du contexte ctx de la fonction make())
var ctx; // Contexte du convas (L'interieur du canvas)
var fileList;
var img; // Contient la balise <img>

var newH;
var px = "px";


var brightnessSlider;
var contrasteSlider;
var saturateSlider;

function on(element, type, event) {
    element.addEventListener(type, event);
}


function nouveau(el, parent, w, h, x, y, idt, evnt, style) {
    var el = document.createElement(el);
    parent.appendChild(el);
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
    return el;
}

function nouveauSlider(el, parent, w, h, x, y, idt, evnt, style) {
    var slider = nouveau(el, parent, w, h, x, y, idt, evnt, style);
    slider.type = "range";
    slider.min = 0;
    slider.max = 200;
    slider.value = 100; // Valeur de base
    return slider;
}

function makeCanvas() {
    img = document.createElement("img");

    inpt = document.createElement("input");
    inpt.style.position = "absolute";
    inpt.style.left = "0" + px;
    inpt.style.top = "0" + px;
    inpt.type = "file";
    inpt.id = "image";
    inpt.name = "imageTest";
    inpt.accept = ".png, .jpg, .jpeg, .gif";

    inpt.addEventListener("change", function() {
    	fileList = inpt.files;

    	for(var i = 0; i < fileList.length; i++) {
    	    img.title = fileList.name;
    	    img.src = window.URL.createObjectURL(fileList[i]);
            
    	    img.addEventListener("load", function() {
                newH = img.height;
                if (img.width > cvs.width || img.height > cvs.height) {
                    newH = img.height * (cvs.width / img.width);
                }
                ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, cvs.width, newH);
    	    });
    	}
    });
    
    document.body.appendChild(inpt);

    cvs = document.createElement("canvas");
    cvs.style.position = "absolute";
    //cvs.style.width = "800" + px;
    //cvs.style.height = "600" + px;
    cvs.width = 800;
    cvs.height = 600;
    cvs.style.top = "30" + px;
    //cvs.style.background = "#BBBBBB";
    document.body.appendChild(cvs);
    
    ctx = cvs.getContext('2d');
}

function updateFilters() {
    ctx.filter = "brightness("+ brightnessSlider.value + "%)" +
                 "contrast(" + contrasteSlider.value + "%)" +
                 "saturate(" + saturateSlider.value + "%)";
}

function makeFieldset() {
    var fd = nouveau("fieldset", document.body, 300, 350, 810, 30, "", "", "");

    var brightnessLabel = nouveau("label", document.body, "", "", 20, 40, "", "", "");
    brightnessLabel.appendChild(document.createTextNode("Luminosité"));
    fd.appendChild(brightnessLabel);

    brightnessSlider = nouveauSlider("input", document.body, "", "", 100, 40, "", "", "");
    on(brightnessSlider, "input", function() {
        updateFilters();
    });
    fd.appendChild(brightnessSlider);

    var contrasteLabel = nouveau("label", document.body, "", "", 20, 140, "", "", "");
    contrasteLabel.appendChild(document.createTextNode("Contraste"));
    fd.appendChild(contrasteLabel);

    contrasteSlider = nouveauSlider("input", document.body, "", "", 100, 140, "", "", "");
    on(contrasteSlider, "input", function() {
        updateFilters();
    })
    fd.appendChild(contrasteSlider);

    var saturateLabel = nouveau("label", document.body, "", "", 20, 240, "", "", "");
    saturateLabel.appendChild(document.createTextNode("Saturation"));
    fd.appendChild(saturateLabel);

    saturateSlider = nouveauSlider("input", document.body, "", "", 100, 240, "", "", "");
    on(saturateSlider, "input", function() {
        updateFilters();
    })
    fd.appendChild(saturateSlider);

    var resetButton = nouveau("input", document.body, 100, 20, 20, 300, "", "", "");
    resetButton.type = "button";
    resetButton.value = "Reset";
    on(resetButton, "click", function() {
        brightnessSlider.value = 100;
        contrasteSlider.value = 100;
        saturateSlider.value = 100;
        updateFilters();
    })
    fd.appendChild(resetButton);
    
    document.body.appendChild(fd);
}

function loop() {
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, cvs.width, newH);

    window.requestAnimationFrame(loop);
}

function main() {
	makeCanvas();
    makeFieldset();
    loop();
}