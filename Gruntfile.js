module.exports = function(grunt) {
	grunt.initConfig({
  	stamplay: {
    	options: {
      		appId: 'grunt-app',
      		apiKey: '1b091b5f218e8f00681b9936f546c8f20694d0d4fdf009f0d71cfaa85fc436a1',
      		public: './'
    	},
    	deploy: {
      		message: 'app deployed!',
      		ignore: [
        		'**/.*',
        		'**/node_modules/**'
      		]
    	}
  	},
	});
	grunt.loadNpmTasks('grunt-stamplay');
};