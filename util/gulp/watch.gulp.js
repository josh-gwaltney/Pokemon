export default function(config, gulp, plugins) {
    gulp.watch(config.css + '/**/*.scss', ['css']);
};