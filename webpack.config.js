var path = require('path');

module.exports = {
    entry: {
        index: "./app/index.js",
        front: "./app/front.js",
        essay: "./app/essay/teste/index.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "components/[name]/[name]-[hash]-bundle.js"
    },
    module : {
        loaders: [ { 
                test   : /.js$/,
                loader : 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};