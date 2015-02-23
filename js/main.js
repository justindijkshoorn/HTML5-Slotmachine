require.config({
	// baseUrl: '/js',
	paths: {
		'jquery': 'libs/jquery/jquery-1.8.3.min',
		'rngModule': 'app/rngModule',
		'reelModule' : 'app/reelModule',
		'uiModule' : 'app/uiModule',
		'audioModule' : 'app/audioModule'
	},
	waitSeconds: 15
});

require(['app'], function(App) {
	App.initialize();
});