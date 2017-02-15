const dist = './dist';
const src = './src';
const client = src + '/client';
const server = src + '/client';
const test = './test';

module.exports = {
    dist: dist,
    css: client + '/css/site.scss',
    js: {
        entry: {
            app: client + '/js/app.js'
        },
        output: {
            filename: 'site.js'
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: [
                            'es2015',
                            'react'
                        ]
                    }
                }
            ]
        }
    },
    html: client + '/index.html'
};