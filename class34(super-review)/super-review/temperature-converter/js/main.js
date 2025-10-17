//Write your pseduo code first! 
// c to f
// (C x 9/5) + 32 = F
// need the value in c


let c = Number(prompt('Pick a temp in Celcius'))

function cToF (c){
    console.log(`${c} Celcius =`,(c * 9/5) + 32, `Fahrenheit.`)
}

cToF(c);
