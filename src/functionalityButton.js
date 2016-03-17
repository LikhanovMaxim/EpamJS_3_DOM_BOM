"use strict";
var FunctionalityButton = (function(){
	var storage = new UtilityStorage();
	function set(){
		var name = document.getElementById("name").value;
        var typeInsurance = document.getElementById("typeInsurance").value;
    	var date = document.getElementById("date").value;
    	var number = document.getElementById("policyNumber").value;
    	var premium = parseInt(document.getElementById("premium").value);
    	var discount = parseInt(document.getElementById("discount").value);
        var policy = new Policy(name, typeInsurance, date, number, premium, discount);
    	if(Validator.checkPolicy(typeInsurance, number)){
			storage.setItem(policy);
			GeneratorMarkup.createTr(storage, policy._number);
    	}
	}
    function showTable (){
    	var row = 0;
    	this._keys.forEach(function(element){
    		createTr(element);
    	});
    }
    function deleteTable(){
    	var parent = document.getElementById("tablePolicy");
    	while(parent.lastChild){
    		parent.removeChild(parent.lastChild);
    	}
    }
    function deleteTable(){
		storage.clear();
    	GeneratorMarkup.deleteTable();
    }
    function deleteRow(){
    	var row = document.getElementById("deletePolicy").value;
    	storage.removeItem(row);
    	GeneratorMarkup.deleteTr(row);
    }
    return{
    	set: set,
    	deleteTable: deleteTable,
    	deleteRow: deleteRow
    };
})();