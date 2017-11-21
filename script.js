"use strict";

var div = document.createElement("div"),
	hor = document.querySelector('#hor'),
	val = document.querySelector('#val'),
	vert = document.querySelector('#vert'),
	items = document.querySelector("#items"),
	result = document.querySelector(".result"),
	subitems = document.querySelector("#subitems")

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
	result.appendChild(div);
}

function getItems (select) {
		var res = (select.options[select.selectedIndex].text)*1;
		generateMenu(res);
}

function constructMenu(argument) {
	var menu = document.querySelector(".menu"),
		ul = document.createElement("ul"),
		li = document.createElement("li"),
		a = document.createElement("a");

	a.href = "#";

	menu.appendChild(li).appendChild(a).textContent = "Пункт меню";
}

function generateMenu(getItems) {
	for (var i = 0; i < getItems; i++) {
		constructMenu();
	}
}


function multiplyAll(arr) {
  var product = 1;
  // Измените код только под комментарием
  for(var i=0; i < arr.length; i++) {
  	for(var k=0; k < arr[i].length; k++) {
  		product *= arr[i][k];
	  }

  }
  
  // Измените код только над этим комментарием
  return product;
}

// Измените значение аргумента для проверки
multiplyAll([[1,2],[3,4],[5,6,7]]);




(function () {

	
})();