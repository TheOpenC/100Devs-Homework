//Write your pseduo code first! 
// c to f
// (C x 9/5) + 32 = F
// need the value in c


let c = Number(prompt('Pick a temp in Celcius'))

function cToF (c){
    console.log(`${c} Celcius =`,(c * 9/5) + 32, `Fahrenheit.`)
}

cToF(c);


document.querySelector('h1').addEventListener('click', cToF)

function cToF(){
    // need the value in c
    let temp = Number(document.querySelector('input').value)

    // convert c to f
    temp = temp * 1.8 + 32

    // show the value

    document.querySelector('h2').innerText = temp
}