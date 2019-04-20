window.onload = main;

function on(element, type, event) {
    element.addEventListener(type, event);
}

class Button {

    constructor(el, parent, w, h, x, y, idt, evnt, style) {
	this.el = el;
	this.parent = parent;
	this.w = w;
	this.h = h;
	this.x = x;
	this.y = y;
	this.id = idt;
	this.evnt = evnt;
	this.style = style;
	
	this.element = this.nouveau(this.el, this.parent, this.w, this.h, this.x, this.y, this.id, this.evnt, this.style);
	on(this.element, "click", evnt);
    }

    nouveau(el, parent, w, h, x, y, idt, evnt, style) {
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
	    //console.log(valeur + " = " + style[valeur] + " , " + el.style[valeur]);
	}
	parent.appendChild(el);
	return el;
    }
}

class HoverButton extends Button{

    constructor(el, parent, w, h, x, y, idt, evnt, style){
	super(el, parent, w, h, x, y, idt, evnt, style);
	on(this.element, "mouseover", function() { this.style.boxShadow = "7px 10px 7px rgb(180, 180, 180)";} );
	on(this.element, "mouseout", function() { this.style.boxShadow = "";} );
    }

}

class PushButton extends Button{

    constructor(el, parent, w, h, x, y, idt, evnt, style){
	super(el, parent, w, h, x, y, idt, evnt, style);
	on(this.element, "mousedown", function() { this.style.boxShadow = "inset 10px 10px rgba(180, 0, 0, 0.8)"} );
	on(this.element, "mouseup", function() { this.style.boxShadow = "";} );
	on(this.element, "mouseout", function() { this.style.boxShadow = "";} );
    }
}

class HoverPushButton extends HoverButton{

    constructor(el, parent, w, h, x, y, idt, evnt, style){
	super(el, parent, w, h, x, y, idt, evnt, style);
	on(this.element, "mousedown", function() { this.style.boxShadow = "inset 10px 10px rgba(180, 0, 0, 0.8)"} );
	on(this.element, "mouseup", function() { this.style.boxShadow = "";} );
	on(this.element, "mouseout", function() { this.style.boxShadow = "";} );
    }
}

function main() {
    var btn = new Button("div", document.body, 200, 100, 10, 10, "truc", function cliquer() {alert("Vous avez cliqué !");}, {"color":"#000000", "background":"#A5DF00", "borderStyle":"solid", "borderColor":"#404040", "borderRadius":"10px"});

   var btn1 = new HoverButton("div", document.body, 200, 100, 220, 10, "truc", function cliquer() {alert("Vous avez cliqué !");}, {"color":"#000000", "background":"#A5DF00", "borderStyle":"solid", "borderColor":"#404040", "borderRadius":"10px"});

    var btn2 = new PushButton("div", document.body, 200, 100, 430, 10, "truc", function() {this.style.top = "100px"; this.style.transform = "rotate(45deg)";}, {"color":"#000000", "background":"#A5DF00", "borderStyle":"solid", "borderColor":"#404040", "borderRadius":"10px"});

    var btn3 = new HoverPushButton("div", document.body, 200, 100, 640, 10, "truc", function() {this.style.top = "100px"; this.style.transform = "rotate(-45deg)";}, {"color":"#000000", "background":"#A5DF00", "borderStyle":"solid", "borderColor":"#404040", "borderRadius":"10px"});
}
