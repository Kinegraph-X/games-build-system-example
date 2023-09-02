var fs = require('fs');

module.exports = function(grunt) {

	var rootPath = 'codebase/', basePath, currentBundle;
	currentBundle = grunt.cli.options.bundle;
	basePath = rootPath + 'bundles/';
	var bundleConfig = grunt.file.readJSON(currentBundle + '.json');
	
	var path = require('path');
	var folderArray = bundleConfig.content;
	
	var configPath = [], browserifyPath = [];
	folderArray.forEach(function(val, key) {
		configPath.push(path.join(process.cwd(), rootPath + val));
		browserifyPath.push(rootPath + val);
	});
	
	var pkg = grunt.file.readJSON('package.json');
	pkg.main = path.join(process.cwd(), basePath + currentBundle + '/index.js');

  // Project configuration.
	require('load-grunt-config')(grunt, {
		// path to config.js & task.js files, defaults to grunt dir
		configPath: configPath,
		overridePath: path.join(process.cwd(), basePath + currentBundle + '/grunt-config-' + currentBundle),
		init : true,
		data : {
			rootPath : rootPath,
			basePath : basePath,
			currentProject : currentBundle,
			pathToProject : basePath + currentBundle + '/',
			browserifyPath : browserifyPath,
			UIpackage : bundleConfig.UIpackage || ['minimal'],
			ressourcePath : bundleConfig.ressourcePath,
			localDeployPath : bundleConfig.localDeployRoot
		},
		postProcess : function (config) {
			config.package = pkg;
			return config;
		}
	});
	
  // Default task(s).
  grunt.registerTask('default', ['execute:debug', 'browserify:debug', 'exorcise:debug']);

};



