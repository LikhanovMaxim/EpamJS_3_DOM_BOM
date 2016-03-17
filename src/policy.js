"use strict";
function Policy(name, typeInsurance, date, number, premium, discount){
  this._name = name;
  this._typeInsurance = typeInsurance;
  this._date = date;
  this._number = number;
  this._premium = premium;
  this._discount = discount;
}
Policy.prototype.toString = function () {
	return "Name: " + this._name + "\nType of insurance: "+ this._typeInsurance + "\nPolicy number: " + this._number + "\nPremium: " + this._premium + "\ndiscount :" + this._discount + "\n";
}
Policy.prototype.logName = function () {
  console.log(this.toString()); 
};
Object.defineProperty(Policy.prototype, "number", {
  get: function () {
    return this._number;
  },
  set: function (number) {
    this._number = number;
  }
});

