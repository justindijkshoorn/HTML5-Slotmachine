define(['jquery', 'reelModule'], function($, reelModule) {

	var uiModuleInitialize = function() {
		$('#button-spin').click(function() {
			reelModule.reelmodulespin();
		});
		$('.button-hold').click(function() {
			reelModule.reelmodulehold($(this), $(this).attr("value"));
		});
	};

	return {
		uimoduleinitialize: uiModuleInitialize
	};
});