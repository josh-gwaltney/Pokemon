import gulp from 'gulp';
import plug from 'gulp-load-plugins';
import config from './config';
import tasks from './util/gulp';

let plugins = plug();

gulp.task('default', () => {
    console.log('foo');
});

gulp.task('help', plugins.taskListing);

gulp.task('build', ['js', 'css', 'inject'], () => {
    tasks.build(config, gulp, plugins);
});

gulp.task('clean', () => {
    tasks.clean(config, gulp, plugins);
});

gulp.task('css', () => {
   tasks.css(config, gulp, plugins);
});

gulp.task('inject', () => {
    tasks.inject(config, gulp, plugins);
});

gulp.task('js', () => {
   tasks.js(config, gulp, plugins);
});

gulp.task('watch', () => {
   tasks.watch(config, gulp, plugins);
});

gulp.task('serve', () => {
    tasks.serve(config, gulp, plugins);
});