module.exports = function(grunt, options) {
	
	return {
		debug: {
			options: Object.assign(options, {
				module : true
			}),
			src: [
				options.rootPath + 'formant-core/src/_buildTools/_UIpackages.js',
				options.rootPath + 'formant-core/src/_buildTools/v8Launcher.js'
				],
			after : function(gr, opt){
				grunt.config.data.UIPackageList = opt.UIpackageList;
				grunt.config.data.UIvalidatorsList = opt.UIvalidatorsList;
			}
		},
		release: {
			options: Object.assign(options, {
				module : true
			}),
			src: [options.rootPath + 'formant-core/src/_buildTools/_UIpackages.js'],
			after : function(gr, opt){
				grunt.config.data.UIPackageList = opt.UIpackageList;
				grunt.config.data.UIvalidatorsList = opt.UIvalidatorsList;
			}
		}
	}
};