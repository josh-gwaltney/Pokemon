export default function(config, gulp, plugins){
    plugins.util.log('Injecting CSS and JavaScript files in to index.html');

    return gulp.src(config.html)
        .pipe(plugins.inject(gulp.src(config.dist + '/site.js', {read: false}), {ignorePath: 'dist'}))
        .pipe(plugins.inject(gulp.src(config.dist + '/site.css', {read: false}), {ignorePath: 'dist'}))
        .pipe(gulp.dest(config.dist));
}