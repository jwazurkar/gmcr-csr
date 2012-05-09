$(document).ready(function() {

	if ($('.three-column').length > 0) {
		$('#main-content > nav, #csr-main, #main-content > aside').matchDimensions({ minHeight: 600 });
	}

	if ($('.two-column').length > 0) {
		$('#main-content > nav, #csr-main').matchDimensions({ minHeight: 600 });
	}

});
