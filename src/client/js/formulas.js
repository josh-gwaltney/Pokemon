function randomInt(min, max){
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function generateIndividualValue(){
    return randomInt(0, 31);
}

function calculateStatistic(baseValue, individualValue, effortValue, level, natureModifier){
    // used by all stats
    let statistic = ((( 2 * baseValue + individualValue + (effortValue / 4)) * level) / 100);

    // hp
    // statistic = statistic + level + 10;

    // other
    // statistic = (statistic + 5) * natureModifier;

    return statistic;
}