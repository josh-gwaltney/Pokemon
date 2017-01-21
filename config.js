let dist = './dist';
let src = './src';
let client = src + '/client';
let test = './test';

export default {
    dist: dist,
    assets: {
        src: src + '/assets/**/*.*',
        dest: dist + '/assets'
    },
    css: {
        src: src + '/css/site.scss',
        dest: dist + '/site.css'
    },
    js: {
        src: src + '/js/**/*.js',
        dest: dist + '/site.js'
    },
    html: {
        src: src + '/index.html',
        dest: dist + '/index.html'
    },
    vendorjs: {
        src: [],
        dest: ''
    }
}