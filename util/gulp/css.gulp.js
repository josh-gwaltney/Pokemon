export default function css(config, gulp, plugins){
    plugins.util.log('Building CSS files from source');

    return gulp.src(config.css.src)
        .pipe(plugins.sass())
        .pipe(gulp.dest(config.dist));
}