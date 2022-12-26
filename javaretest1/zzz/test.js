let names = ['Boss', 'Chain', 'Non', 'Mai', 'Boss','Non', 'Tiger']

let countBoss = 0 
let countChain = 0 
let countNon = 0 
let countMai = 0 

for(const name of names) { 
    if(name === 'Boss') {
        countBoss++
    }else if (name === 'Chain') {
        countChain++
    } else if (name === 'Non') {
        countNon++
    } else if (name === 'Mai') {
        countMai++
    }
}

console.log(`Boss: ${countBoss}, Chain: ${countChain}, Non: ${countNon}, Mai ${countMai}`);