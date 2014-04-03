var port = process.env.PORT || 3000;

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		cssmin: {
			dist: {
				files: {
					'public/styles/main.min.css': [
						'bower_components/bootstrap/dist/css/bootstrap.min.css',
						'bower_components/onepage-scroll/onepage-scroll.css',
						'bower_components/animate.css/animate.min.css',
						'assets/css/main.css',
					],
				}
			}
		},

		uglify: {
			dist: {
				files: {
					'public/scripts/main.min.js': [
						'bower_components/jquery/dist/jquery.min.js',
						'bower_components/onepage-scroll/jquery.onepage-scroll.js',
						'assets/js/main.js',
					]
				}
			}
		},

		watch: {
			src: {
				files: ['assets/**/*.js', 'assets/**/*.css', 'Gruntfile.js'],
				tasks: ['cssmin', 'uglify']
			}
		}		
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['cssmin', 'uglify']);
};