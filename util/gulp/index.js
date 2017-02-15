import build from './build.gulp';
import clean from './clean.gulp';
import css from './css.gulp';
import inject from './inject.gulp';
import js from './js.gulp';
import serve from './serve.gulp';
import watch from './watch.gulp';

module.exports = {
    build: build,
    clean: clean,
    css: css,
    inject: inject,
    js: js,
    serve: serve,
    watch: watch
};