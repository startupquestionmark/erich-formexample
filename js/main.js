$(document).ready(function() {

	$('#erich-form').submit(function(e) {

		e.preventDefault();

		$('#successMessageBox').hide();
		$('#errorMessageBox').hide();

		var hasError = false;

		var $forminputs = $("form#erich-form input");

		for (i = 0; i < $forminputs.length; i++){

			var forminput = $forminputs.eq(i).val();
			if (forminput.length <= 0 || forminput == null) {
				hasError = true;
				$forminputs.eq(i).addClass("hasError");
			} else {
				$forminputs.eq(i).removeClass("hasError");
			}

			if ($forminputs.eq(i).attr('id') == "age" && forminput < 21) {
				hasError = true
				$forminputs.eq(i).addClass("hasError");
			} else {
				$forminputs.eq(i).removeClass("hasError");				
			}
		}

		if(hasError) {
			$('#successMessageBox').hide();
			$('#errorMessageBox').fadeIn();
			return false;
		} else {
			$('#errorMessageBox').hide();
			$('#successMessageBox').fadeIn();
			return true;
		}
	});

});