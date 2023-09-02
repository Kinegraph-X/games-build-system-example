module.exports = function(grunt, options) {

	return {
		debug: {
			options: {
				root : 'plugins/<%=currentProject%>/js/'
			},
			files: {
				'<%=pathToProject%>js/<%=currentProject%>.debug.js.map': ['<%=pathToProject%>js/<%=currentProject%>.debug.js']
			}
		}
	}
};