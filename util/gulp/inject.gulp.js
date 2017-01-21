export default function inject(config, gulp, plugins){
    plugins.util.log('Injecting CSS and JavaScript files in to index.html');

    return gulp.src(config.html.src)
        .pipe(plugins.inject(gulp.src(config.js.dest, {read: false}), {ignorePath: 'dist'}))
        .pipe(plugins.inject(gulp.src(config.css.dest, {read: false}), {ignorePath: 'dist'}))
        .pipe(gulp.dest(config.dist));
}