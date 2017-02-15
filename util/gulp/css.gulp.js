export default function(config, gulp, plugins){
    plugins.util.log('Building CSS files from SCSS source');

    return gulp.src(config.css)
        .pipe(plugins.sass())
        .pipe(gulp.dest(config.dist));
};