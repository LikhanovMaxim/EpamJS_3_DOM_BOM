"use strict";
function Form(name, typeInsurance, date, policyNumber, premium, discount){
  this._name = name;
  this._typeInsurance = typeInsurance;
  this._date = date;
  this._policyNumber = policyNumber;
  this._premium = premium;
  this._discount = discount;
}
Form.prototype.toString = function () {
	return "Name: " + this._name + "\nType of insurance: "+ this._typeInsurance + "\nPolicy number: " + this._policyNumber + "\nPremium: " + this._premium + "\ndiscount :" + this._discount + "\n";
}
Form.prototype.logName = function () {
  console.log(this.toString()); 
};
Object.defineProperty(Form.prototype, "policyNumber", {
  get: function () {
    return this._policyNumber;
  },
  set: function (policyNumber) {
    this._policyNumber = policyNumber;
  }
});

