export default function js(config, gulp, plugins){
    plugins.util.log('Building JavaScript files from ES6 source');

    return gulp.src([config.js.src])
        .pipe(plugins.babel({ presets: ['es2015']}))
        .pipe(plugins.concat('site.js'))
        .pipe(gulp.dest(config.dist));
}