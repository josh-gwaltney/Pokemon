export default function js(config, gulp, plugins){
    plugins.util.log('Building JavaScript files from ES6 source');

    return gulp.src('./src/client/site/js')
        .pipe(plugins.webpack(config.js))
        .pipe(gulp.dest('./dist'));
}