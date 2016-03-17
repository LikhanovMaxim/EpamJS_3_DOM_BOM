"use strict";
function init() {
   var storage = new LocalStorage();
   document.getElementById("login").onclick = function () {
       var name = document.getElementById("name").value;
       var typeInsurance = document.getElementById("typeInsurance").value;
	   var date = document.getElementById("date").value;
	   var policyNumber = document.getElementById("policyNumber").value;
	   var premium = parseInt(document.getElementById("premium").value);
	   var discount = parseInt(document.getElementById("discount").value);
       var form = new Form(name, typeInsurance, date, policyNumber, premium, discount);
	   form.logName();
	   if(Validator.checkPolicy(typeInsurance, policyNumber)){
	   		storage.set(form);
	   }
   };
   document.getElementById("showTable").onclick = function () {
	   storage.deleteTable();
	   storage.showTable();
   };
   document.getElementById("deleteTable").onclick = function () {
	   storage.delete();
   }
   document.getElementById("deleteRow").onclick = function () {
		storage.deleteRow();
   }
}