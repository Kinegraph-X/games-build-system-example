
module.exports = function(grunt, options) {
//	console.log(options);
	return {
		debug: {
			files: {
				'<%=pathToProject%>js/<%=currentProject%>.debug.js': ['<%=pathToProject%>src/index.js']
			},
			options: {
				browserifyOptions: {
					debug: true,
					paths : options.browserifyPath
				},
				configure : function(browserifyInstance) {
					browserifyInstance.require(grunt.config.data.UIPackageList);
					browserifyInstance.require(grunt.config.data.UIvalidatorsList);
				},
				transform: [
					['browserify-replace', {
							replace: [
								{from: /%%UIpackage%%/, to: options.UIpackage}
							]
						}
					]
				],
				plugin: [
					'dep-case-verify', 'browserify-derequire'
				]
			}
		}
	};
};