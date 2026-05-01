// function getData() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(46)
//         }, 1)
//     })
// }

// async function start() {
//     const result = await getData()
//     console.log(result)
// }

// async function start2() {
//     getData()
//         .then(result => {
//             console.log(result)
//         })
// }
// start()



// Try Catch example 
function getData(){
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve('Here is your data!')
            //reject('Something went wrong!')
        }, 1)
    })
}

async function start() {
    try {
        const result = await getData()    
    }   catch(error) {
        console.log(`Error: ${error}`) // gets the error from the reject on line 29.
    }
    
}

// this is much better for error handling and organization as things are totally separate. Success handling is one operation, Failure handling is a completely different operation. Whats the poiint of writing asyc await if you're not going to take advantage of the asynchronous nature? 

function onSuccess() {

}

function onFailure() {
    console.log(`Error: ${error}`)
}

async function start2() {
    try {
        const result = await getData()
        onSuccess() // or SUCCESS CODE
    } catch (error) {
        onFailure() // or FAILURE CODE
    
    }
}


// bad way of handling errors, result still runs if there's an error

// async function start2() {
//     const result = await getData()
//         .catch(error => {
//             console.log(`Error: ${error}`);
//         })
//         console.log(result)
        
// }


start()
start2()