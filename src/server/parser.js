let fs = require('fs');
let file = require('../../data/data.json');

let res = {};
let res2 = [];

function parse(data){
    let result = [];

    for(let name in data){
        if(data[name] > 0){
            result.push({
                name: name,
                value: data[name]
            });
        }
    }

    return result;
}

for(let name in file.data){
    if(name === 'Porygon2') {
        let data = file.data[name];

        let mon = {
            name: name,
            abilities: parse(data.Abilities),
            items: parse(data.Items),
            spreads: parse(data.Spreads),
            teammates: parse(data.Teammates)
        };


        res2.push(mon);
    }
}

//fs.writeFile('data2.json', JSON.stringify(res), (err) => {
fs.writeFile('data2.json', JSON.stringify(res2), (err) => {
    if(err){
        return console.log(err);
    }
    console.log('file created');
});