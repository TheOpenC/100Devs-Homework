process.stdin.on('data', (chunk) => {

    const input = chunk.toString().trim();
    
    if (input === 'quit') {
        process.exit(0);
    }

    try {
        const value = eval(input);
        console.log(`${value}`);
    } catch (exception) {
        console.log("I don't know how to do that.");
    }


    process.stdout.write('Enter your sinple equation: '); // this command allows the user to write their equation on the same line as the printed statement. Console.log includes a standard return. 

});


process.stdout.write('Enter your simple equation: '); 