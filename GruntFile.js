const webpackConfig = require('./webpack.config');

module.exports = grunt => {

    grunt.initConfig({

        webpack: {
            dev: webpackConfig,
            prod: Object.assign({watch: true}, webpackConfig)
        }
    });

    grunt.loadNpmTasks('grunt-webpack');
    grunt.registerTask('default', ['webpack'])
}