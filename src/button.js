"use strict";
function init() {
   var storage = new LocalStorage();
   document.getElementById("login").onclick = function () {
       var name = document.getElementById("name").value;
       var typeInsurance = document.getElementById("typeInsurance").value;
	   var date = document.getElementById("date").value;
	   var number = document.getElementById("policyNumber").value;
	   var premium = parseInt(document.getElementById("premium").value);
	   var discount = parseInt(document.getElementById("discount").value);
       var policy = new Policy(name, typeInsurance, date, number, premium, discount);
	   if(Validator.checkPolicy(typeInsurance, number)){
	   		storage.set(policy);
	   		storage.createTr(number);
	   }
   };
   document.getElementById("deleteTable").onclick = function () {
	   storage.delete();
   }
   document.getElementById("deleteRow").onclick = function () {
		storage.deleteRow();
   }
}