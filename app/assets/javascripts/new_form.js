window.onload = function(){
	var isValidForm= function(){
		if(document.getElementById("quote_content").value.trim()==="" || document.getElementById("quote_author").value.trim() === ""){
			return false;
		}
		return true;
	}
	document.getElementsByTagName("form")[0].onsubmit = isValidForm;
}