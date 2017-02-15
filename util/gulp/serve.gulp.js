export default function(config, gulp, plugins) {
    return plugins.nodemon({
        ignore: [config.dist + '/**/*.*']
    })
        .on('restart', ['build'], function(){})
        .on('start', ['build'], function(){});
};