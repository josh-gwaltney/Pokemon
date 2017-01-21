function timestamp(){
    return window.performance && performance.now ? performance.now() : new Date().getTime();
}