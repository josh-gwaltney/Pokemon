import del from 'del';

export default function clean(config, gulp, plugins){
    plugins.util.log(plugins.util.colors.blue('Cleaning: ' + config.dist));
    let delPaths = [].concat(config.dist + '/**/**');
    return del(delPaths);
}