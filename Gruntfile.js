module.exports = function(grunt) {

    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

			/**
			 * Sass
			 */
			sass: {
				dev: {
					options: {
						style: 'expanded',
						sourcemap: 'none',
					},
					files: {
						'dev/css/style.css': 'dev/scss/style.scss'
					}
				}
			},
			/**
			 * CSS Minification
			 */
			cssmin:{
				target:{
					src:'dev/css/style.css',
					dest:'dist/css/style.min.css'
				}
			},
			/**
			 * JS Minification
			 */
			uglify: {
				dev:{
					files:{
						'dist/js/main.min.js':['dev/js/main.js']
					}
				}
			},

			/**
			 * Watch
			 */
			watch: {
				css: {
					files: 'dev/**/*.scss',
					tasks: ['sass', 'cssmin']
				},
				uglify: {
					files: 'dev/js/main.js',
					tasks:['uglify']
				}
			}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('js',['uglify']);
	grunt.registerTask('default',['watch']);
}