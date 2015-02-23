define(['jquery', 'rngModule', 'reelModule', 'uiModule', 'audioModule'], function($, rngModule, reelModule, uiModule, audioModule) {
	var initialize = function() {
		// Initialize modules
		rngModule.rngmoduleinitialize();
		reelModule.reelmoduleinitialize();
		uiModule.uimoduleinitialize();
		audioModule.audiomoduleinitialize();
		// audioModule.audiomoduleplayaudio('themeSong');
		// audioModule.audiomoduleplayaudio('casinoAmbience');
	};

	return {
		initialize: initialize
	};
});