"use strict";
var validator = (function(){
	function returnReg(typeInsurance) {
		var reg;
		 switch(typeInsurance){
				case "КАСКО":  {
					reg = /^[0][0-4][0-9][aA][tT][-][0-2][0-9]\/[0-9]{5}$/;
					break;
				}
				case "ОСАГО":  {
					reg = /^[aAbBcCeExX][aAbBcCeExX][aAbBcCeExX][0-9]{10}$/;
					break;
				}
				case "ДАГО":  {
					reg = /^[0][0-4][0-9][gG][oO][-][0-2][0-9]\/[0-9]{5}$/
					break;
				} 
		   }	
		  return reg;
	}
	function checkReg(typeInsurance, policyNumber) {
		if(typeInsurance == null || policyNumber == null){
			return false;
		}
		var reg = returnReg(typeInsurance);
		if(reg.test(policyNumber)){
			return true;	
		}
		return false;
	}
	return {
		checkPolicy: checkReg
	};
})();