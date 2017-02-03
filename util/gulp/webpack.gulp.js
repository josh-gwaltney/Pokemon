export default function webpack(config, gulp, plugins){
    return plugins.nodemon({
        ignore: ['dist/**/*.*']
    })
        .on('restart', ['build'], function(){})
        .on('start', ['build'], function(){});
}