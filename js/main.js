$(document).ready(function() {

	$('#erich-form').submit(function(e) {

		e.preventDefault();

		var hasError = false;

		var $forminputs = $("form#erich-form input");

		for (i = 0; i < $forminputs.length; i++){

			var forminput = $forminputs.eq(i).val();
			if (forminput.length <= 0) {
				hasError = true;
			}
		}

		if(hasError) {
			return false;
		} else {
			return true;
		}
	});

});