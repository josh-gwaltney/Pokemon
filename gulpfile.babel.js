import config from './config';
import gulp from 'gulp';
import plug from 'gulp-load-plugins';
import glob from 'glob';
import clean from './util/gulp/clean.gulp';
import js from './util/gulp/js.gulp';
import css from './util/gulp/css.gulp';
import assets from './util/gulp/assets.gulp';
import inject from './util/gulp/inject.gulp';
import build from './util/gulp/build.gulp';
import serve from './util/gulp/serve.gulp';

let plugins = plug();

gulp.task('help', () => {
    return plugins.taskListing;
});

gulp.task('clean', () => {
    clean(config, gulp, plugins);
});

gulp.task('assets', () => {
    assets(config, gulp, plugins);
});

gulp.task('js', () => {
    js(config, gulp, plugins);
});

gulp.task('css', () => {
    css(config, gulp, plugins);
});

gulp.task('inject', () => {
    inject(config, gulp, plugins);
});

gulp.task('build', ['assets', 'js', 'css', 'inject'], () => {
    build(config, gulp, plugins);
});

gulp.task('serve', () => {
    serve(config, gulp, plugins);
});