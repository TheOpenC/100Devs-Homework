//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?
const savageSays = document.querySelector('img');
savageSays.addEventListener('click', sirSavage)


function sirSavage(){
    for(n=1; n <= 21; n++){
        console.log(`21`);
        document.querySelector('#savageSays').innerText += '21 '
    }

}