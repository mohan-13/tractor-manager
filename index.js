
window.addEventListener("load", function(){
	document.getElementById('udetails').innerHTML="Welcome "+this.localStorage.getItem('oname');
	// Add a keyup event listener to our input element
	document.getElementById('cname').addEventListener("keyup", function(event){hinter(event)});
	// create one global XHR object 
	// so we can abort old requests when a new one is make
	window.hinterXHR = new XMLHttpRequest();
});

// Autocomplete for form
function hinter(event) {
	var input = event.target;
	input.value=input.value.toUpperCase();
	var huge_list = document.getElementById('customer_list');
	// minimum number of characters before we start to generate suggestions
	var min_characters = 0;

	if (!isNaN(input.value) || input.value.length < min_characters ) { 
		return;
	} else 
	{ 
		var response = ["Demo","Coursera","Test","Test1"]; 
				huge_list.innerHTML = "";

				response.forEach(function(item) {
                    // Create a new <option> element.
                    var option = document.createElement('option');
                    option.value = item;
                    huge_list.appendChild(option);
	});
	}
}


function getCustAjaxcall() {
	// GET DATA
	var input = document.getElementById('cname');
	  $cust_amt=0;
	  document.getElementById("cust_label").innerHTML=input.value;
	  document.getElementById("amt_label").innerHTML="Rs.5000";
	// AJAX CALL
	
	return false;
  }

  function getCustTransAjaxCall() {
	// GET DATA
	var input = document.getElementById('cname');

	// AJAX CALL
	if(input.value!="")
	{
		$("#transdiv").show();
	}
	else
	{
		input.focus();
	}
  }

  function adddataAjaxCall() {
	// GET DATA
	$("#addspinner").hide();
				$("#success_message").html("Successfully Saved");
				$("#success_message").show();
				document.getElementById("addform").reset();
				setTimeout(function(){
					$("#success_message").hide();
				},1000);
	
	return false;
  }
  function logout()
  {
	localStorage.removeItem("oid");
	localStorage.removeItem("oname");
	window.location.href="./index.html";
  }

  
	
	