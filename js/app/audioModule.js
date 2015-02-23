define(['jquery'], function($) {

	var audioModuleInitialize = function() {
		// themeSong = new Audio('./audio/themeSong.mp3');
		// themeSong.volume = 0.15;
		// themeSong.loop = true;
		// casinoAmbience = new Audio('./audio/casinoAmbience.mp3');
		// casinoAmbience.volume = 0.3;
		// casinoAmbience.loop = true;
		reelStop = new Audio('./audio/reelStop.mp3');
		reelStop.volume = 0.75;
		reelStop.loop = false;
	};

	var audioModulePlayAudio = function(playAudio) {
		switch(playAudio) {
			// case 'themeSong':
				// themeSong.play();
			// break;
			// case 'casinoAmbience':
			// 	casinoAmbience.play();
			// break;
			case 'reelStop':
				reelStop.play();
			break;
		}
	};

	return {
		audiomoduleinitialize: audioModuleInitialize,
		audiomoduleplayaudio: audioModulePlayAudio,
	};
});