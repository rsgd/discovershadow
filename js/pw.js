/* password script 
 */ 
 
 
var count = 2;
 
$(document).ready(function(){
		
	// submit
	$('#pwSubmit').on('click', function() {
		validate();
		return false;		    
	});
	
});


function validate() {

	var pw = $('#pwI').val();
	var valid = false;
	
	var pwArray = [" ", "shadow", "shadow2", "weareshadow"];  // the corresponding passwords;
	
	for (var i=0; i <pwArray.length; i++) {
		if (pw == pwArray[i]) {
			valid = true;
			break;
		}
	}
	
	if (valid) {
		$("body").addClass("loggedIn");
		$("body").removeClass("protected");
		$("#pwWrap").fadeOut(300);
		window.setTimeout(function(){
			$("#pwWrap").remove();			
		}, 400);
		return false;
	}
	
	var t = " tries";
		
	if (count == 1) {t = " try"}
	
	if (count >= 1) {
	  alert ("Invalid password. You have " + count + t + " left.");
	  count --;
	}
	
	else {
	  alert ("Still incorrect! You have no more tries left!");
	  $("#pwInput").fadeOut(300);
	  return false;
	}

}