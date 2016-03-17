"use strict";
var GeneratorMarkup = (function(){
    function createTh(value, row){
        var para = document.createElement("th");
        var node = document.createTextNode(value);
        para.appendChild(node);
       	var element = document.getElementsByTagName("tr")[row];
       	element.appendChild(para);
    }
    function createTr(storage, policyNumber){
        var storagePerson = storage.getItem(policyNumber);
        if(storagePerson == null){
         	  return ;
        }
        var para = document.createElement("tr");
        var element = document.getElementById("tablePolicy");
        element.appendChild(para);
        createTh(storagePerson._name, storage.row);
        createTh(storagePerson._typeInsurance, storage.row);
        createTh(storagePerson._date, storage.row);
        createTh(storagePerson._number, storage.row);
        createTh(storagePerson._premium, storage.row);
        createTh(storagePerson._discount, storage.row);
    }
    function deleteTr(row){
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
    function deleteTable(){
        var parent = document.getElementById("tablePolicy");
        while(parent.lastChild){
             parent.removeChild(parent.lastChild);
        }
    }
	return {
		createTr: createTr,
		deleteTr: deleteTr,
		deleteTable: deleteTable
	};
})();