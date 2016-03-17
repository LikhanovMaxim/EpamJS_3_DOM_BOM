"use strict";
function LocalStorage(){
  this._keys = new Array();
}
LocalStorage.prototype.set = function(policy){
	this._keys.push(policy._number);
	localStorage.setItem(policy._number, JSON.stringify(policy));
}
LocalStorage.prototype.createTr = function(policyNumber){
	var row = this._keys.length - 1;
	var key = this._keys[row];
    var storagePerson = JSON.parse(localStorage.getItem(policyNumber));
    if(storagePerson == null){
    	  return ;
    }
	var para = document.createElement("tr");
    var element = document.getElementById("tablePolicy");
    element.appendChild(para);
    createTh(storagePerson._name, row);
    createTh(storagePerson._typeInsurance, row);
    createTh(storagePerson._date, row);
    createTh(storagePerson._number, row);
    createTh(storagePerson._premium, row);
    createTh(storagePerson._discount, row);
}
LocalStorage.prototype.showTable = function(){
	var row = 0;
	this._keys.forEach(function(element){
		createTr(element);
	});
}
LocalStorage.prototype.deleteTable = function(){
	var parent = document.getElementById("tablePolicy");
	while(parent.lastChild){
		parent.removeChild(parent.lastChild);
	}
}
LocalStorage.prototype.delete = function(){
	this._keys = [];
	localStorage.clear();
	this.deleteTable();
}
LocalStorage.prototype.deleteKey = function(row){
	for(var i = 0; i<this._keys.length; i++){
		if(row === this._keys[i]){
			console.log("i " + i + " " + (i+1));
			this._keys.splice(i, 1);
			break;
		}
	}
}
LocalStorage.prototype.deleteTr = function(row){
	var elements = document.getElementsByTagName("tr");
	for(var i=0; i<elements.length ; i++){
		var th = elements[i].childNodes;
		if(th[3].innerText == row){
			var table = document.getElementById("tablePolicy");
			table.removeChild(elements[i]);
			break;
		}
	}
}
LocalStorage.prototype.deleteRow = function(){
	var row = document.getElementById("deletePolicy").value;
	localStorage.removeItem(row);
	this.deleteKey(row);
	this.deleteTr(row);
}
function createTh(value, row){
	var para = document.createElement("th");
	var node = document.createTextNode(value);
	para.appendChild(node);
	var element = document.getElementsByTagName("tr")[row];
	element.appendChild(para);
}

//LocalStorage.prototype.xxxxx = function(value, row){
//	var para = document.createElement("th");
//	var node = document.createTextNode(value);
//	para.appendChild(node);
//	var element = document.getElementsByTagName("tr")[row];
//	element.appendChild(para);
//}