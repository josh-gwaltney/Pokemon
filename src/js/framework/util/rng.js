class RNG {
    constructor(s){
        this._seed = 0;
        this._s0 = 0;
        this._s1 = 0;
        this._s2 = 0;
        this._c = 0;
        this._frac = 2.3283064365386963e-10

        this.setSeed(s);
    }

    getSeed(){

    }

    setSeed(seed){
        seed = (seed < 1 ? 1 / seed : seed);

        this._seed = seed;
        this._s0 = (seed >>> 0) * this._frac;

        seed = (seed * 69069 + 1) >>> 0;
        this._s1 = seed * this._frac;

        seed = (seed * 69069 + 1) >>> 0;
        this._s2 = seed * this._frac;

        this._c = 1;
    }

    getUniform(){
        let t = 2091639 * this._s0 + this._c * this._frac;
        this._s0 = this._s1;
        this._s1 = this._s2;
        this._c = t | 0;
        this._s2 = t - this._c;
        return this._s2;
    }

    getUniformInt(lower, upper){
        let min = Math.min(lower, upper);
        let max = Math.max(lower, upper);
        return Math.floor(this.getUniform() * (max - min + 1)) + min;
    }
}
