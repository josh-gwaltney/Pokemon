export default function assets(config, gulp, plugins){
    plugins.util.log('Building asset files from source');

    return gulp.src(config.assets.src)
        .pipe(gulp.dest(config.assets.dest));
}