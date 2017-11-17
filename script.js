"use strict";

var hor = document.querySelector('#hor'),
	vert = document.querySelector('#vert'),
	val = document.querySelector('#val'),
	div = document.createElement("div"),
	result = document.querySelector(".result");

	div.className = "menu";

function resetToDefault() {
	var a = document.querySelectorAll('.radio');

	for (var i = 0; i < a.length; i++) {
		a[i].nextSibling.nextSibling.classList = 'fa fa-toggle-off';
	}
}

function changeIcon(element) {
	resetToDefault();
    element.nextSibling.nextSibling.classList = "fa fa-toggle-on";
}

hor.onchange = function () {
	div.classList.add("horizontal");
	div.classList.remove("vertical");
	result.appendChild(div);
}

vert.onchange = function () {
	div.classList.add("vertical");
	div.classList.remove("horizontal");

}