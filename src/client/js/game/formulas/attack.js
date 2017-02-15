function damage(attacker, defender, move){
    let damage = ((((2 * level / 5 + 2) * attackStat * attackPower / defenseStat) / 50) +2) * STAB * weakness/resistance * random(85 - 100) / 100;
}