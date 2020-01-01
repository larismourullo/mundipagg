/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.   
    uglify: {
      options: {
        mangle: true
      },
      dist: {
        files: {
          'dist/script/app.module.min.js': 'app/app.module.js',
          'dist/script/app.config.min.js': 'app/app.config.js',
          'dist/script/app.config.router.min.js': 'app/app.config.router.js',
          'dist/script/controller/repositoryController.min.js': 'app/controller/repositoryController.js',
          'dist/script/services/apiCommits.min.js': 'app/services/apiCommits.js',
          'dist/script/services/apiRepositories.min.js': 'app/services/apiRepositories.js',
          'dist/script/services/apiContributors.min.js': 'app/services/apiContributors.js',
        }        
      }
    },
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'src/css/main.css': 'src/sass/main.scss',
          'src/css/simple-grid.css': 'src/sass/simple-grid.scss'
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/css/main.min.css': 'src/css/main.css',
          'dist/css/simple-grid.min.css': 'src/css/simple-grid.css'
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-sass');

  // Default task.
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['sass', 'uglify', 'cssmin']);

};
