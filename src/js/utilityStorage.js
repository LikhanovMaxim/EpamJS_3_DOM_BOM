"use strict";
function UtilityStorage(){
  this._keys = new Array();
  this._row = null;
}
Object.defineProperty(UtilityStorage.prototype, "keys", {
  get: function () {
    return this._keys;
  },
  set: function (number) {
    this._keys = keys;
  }
});
Object.defineProperty(UtilityStorage.prototype, "row", {
  get: function () {
    return this._row;
  },
  set: function (row) {
    this._row = row;
  }
});
UtilityStorage.prototype.setItem = function(policy){
	this._keys.push(policy._number);
	localStorage.setItem(policy._number, JSON.stringify(policy));
}
UtilityStorage.prototype.getItem = function( policyNumber){
    this.row = this.keys.length - 1;
    var key = this._keys[this.row];
    var storagePerson = JSON.parse(localStorage.getItem(policyNumber));
	return storagePerson;
}
UtilityStorage.prototype.clear = function(){
    this._keys = [];
    this._row = null;
   	localStorage.clear();
}
UtilityStorage.prototype.removeItem = function(row){
    localStorage.removeItem(row);
    for(var i = 0; i<this._keys.length; i++){
        if(row === this._keys[i]){
        	this._keys.splice(i, 1);
        	break;
        }
    }
}