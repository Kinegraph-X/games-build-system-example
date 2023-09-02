module.exports = function(grunt, options) {

	return {
		debug: {
			files: [
				'codebase/**/*.js',
				'codebase/bundles/**/*.html',
				'codebase/bundles/*/cache/*.*'
			],
			filter : function(srcPath) {
				if (srcPath.match(/debug\.js|dist\.js|jsComponents_css|cache/))
					return false;
				return true;
			},
			options : {
				livereload : true
			},
			tasks: [
				'execute:debug',
			    'browserify:debug',
			    'exorcise:debug'
			]
		}
	}
}