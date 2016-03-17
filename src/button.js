"use strict";
function init() {
   document.getElementById("login").onclick = function () {
       FunctionalityButton.set();
   };
   document.getElementById("deleteTable").onclick = function () {
       FunctionalityButton.deleteTable();
   }
   document.getElementById("deleteRow").onclick = function () {
	   FunctionalityButton.deleteRow();
   }
}