function calculateExperienceErratic(level){
    let experience;

    if(level < 50) {
        experience = Math.floor((Math.pow(level, 3) * (100 - level)) / 50);
    }
    else if(level >= 50 && level <= 68){
        experience = Math.floor((Math.pow(level, 3) * (150 - level)) / 100);
    }
    else if(level > 68 && level < 98){
        experience = Math.floor((Math.pow(level, 3) * ((1911 - (10 * level)) / 3)) / 500);
    }
    else if(level >= 98 && level <= 100){
        experience = Math.floor((Math.pow(level, 3) * (160 - level)) / 100);
    }
    return experience;
}

function calculateExperienceFast(level){
    let experience = Math.floor((4 * Math.pow(level, 3)) / 5);
    return experience;
}

function calculateExperienceMediumFast(level){
    let experience = Math.pow(level, 3);
    return experience;
}

function calculateExperienceMediumSlow(level){
    let experience = Math.floor(((6 / 5) * Math.pow(level, 3)) - (15 * Math.pow(level, 2)) + (100 * level));
    return experience;
}

function calculateExperienceSlow(level){
    let experience = Math.floor((5 * Math.pow(level, 3)) / 4);
    return experience;
}

function calculateExperienceFluctuating(level){
    let experience;

    if(level < 15){
        experience = (Math.pow(level, 3) * ((((level + 1) / 3) + 24) / 50));
    }
    else if(level >= 15 && level < 36){
        experience = (Math.pow(level, 3) * ((level + 24) / 50));
    }
    else if(level >= 36 && level <= 100){
        experience = (Math.pow(level, 3) * (((level / 2) + 32) / 50));
    }

    return experience;
}