define(['jquery'], function($) {
	rngInterval = null,
	rngIntervalMiliseconds = 100,
	rngArray = [];

	var rngModuleInitialize = function() {
		if(!rngInterval) {
			rngInterval = setInterval(function() {
				rngArray = rngModuleGenerator();
			}, rngIntervalMiliseconds);
			console.log('app: interval initialized');
		} else {
			console.warn('app: interval already initialized');
		}
	};

	var rngModuleGenerator = function() {
		var rngArray = [],
			rngCount = 3,
			rngMinim = 100000000,
			rngMaxim = 900000000;
		for(i = 0; i < rngCount; i++) {
			rngArray.push(Math.floor((rngMinim + Math.random() * rngMaxim)));
		}
		return rngArray;
	};

	var rngModuleGetNumbers = function() {
		if (rngArray.length > 0) {
			var rngNumbr = [],
				division = 64;

			var mapping = [{
				key: 0, value: 1
			},{
				key: 1, value: 1
			},{
				key: 2, value: 1
			},{
				key: 3, value: 1
			},{
				key: 4, value: 2
			},{
				key: 5, value: 2
			},{
				key: 6, value: 2
			},{
				key: 7, value: 2
			},{
				key: 8, value: 3
			},{
				key: 9, value: 3
			},{
				key: 10, value: 3
			},{
				key: 11, value: 3
			},{
				key: 12, value: 4
			},{
				key: 13, value: 4
			},{
				key: 14, value: 4
			},{
				key: 15, value: 4
			},{
				key: 16, value: 5
			},{
				key: 17, value: 5
			},{
				key: 18, value: 5
			},{
				key: 19, value: 5
			},{
				key: 20, value: 6
			},{
				key: 21, value: 6
			},{
				key: 22, value: 6
			},{
				key: 23, value: 6
			},{
				key: 24, value: 7
			},{
				key: 25, value: 7
			},{
				key: 26, value: 7
			},{
				key: 27, value: 7
			},{
				key: 28, value: 8
			},{
				key: 29, value: 8
			},{
				key: 30, value: 8
			},{
				key: 31, value: 8
			},{
				key: 32, value: 9
			},{
				key: 33, value: 9
			},{
				key: 34, value: 9
			},{
				key: 35, value: 9
			},{
				key: 36, value: 10
			},{
				key: 37, value: 10
			},{
				key: 38, value: 10
			},{
				key: 39, value: 10
			},{
				key: 40, value: 11
			},{
				key: 41, value: 11
			},{
				key: 42, value: 11
			},{
				key: 43, value: 11
			},{
				key: 44, value: 12
			},{
				key: 45, value: 12
			},{
				key: 46, value: 12
			},{
				key: 47, value: 12
			},{
				key: 48, value: 13
			},{
				key: 49, value: 13
			},{
				key: 50, value: 13
			},{
				key: 51, value: 13
			},{
				key: 52, value: 14
			},{
				key: 53, value: 14
			},{
				key: 54, value: 14
			},{
				key: 55, value: 14
			},{
				key: 56, value: 14
			},{
				key: 57, value: 14
			},{
				key: 58, value: 15
			},{
				key: 59, value: 15
			},{
				key: 60, value: 15
			},{
				key: 61, value: 15
			},{
				key: 62, value: 15
			},{
				key: 63, value: 15
			},{
				key: 64, value: 0
			}];

			for(i = 0; i < rngArray.length; i++) {
				rngNumbr.push(mapping[Math.floor(rngArray[i] % division)].value);
			}
			
			console.log('app: numbers returned');
			return rngNumbr;
		} else {
			console.warn('app: not initialized');
		}
	};

	var rngModuleClear = function() {
		clearInterval(rngInterval);
		rngInterval = null,
		rngArray = [];
		console.log('app: interval cleared');
	};

	return {
		rngmoduleinitialize: rngModuleInitialize,
		rngmodulegetnumbers: rngModuleGetNumbers,
		rngmoduleclear: rngModuleClear
	};
});