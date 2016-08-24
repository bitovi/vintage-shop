module.exports = function(grunt) {
  grunt.loadNpmTasks('documentjs');
  grunt.loadNpmTasks('grunt-contrib-less');
  
  grunt.initConfig({
    less: {
      development: {
        options: {
          paths: ['assets/css']
        },
        files: {
          'styleguide/styles.css': 'src/styles.less'
        }
      }
    }
  });
  
  grunt.renameTask('documentjs', 'documentjs-orig');
  grunt.registerTask('default', ['documentjs-orig', 'less:development']);
};
