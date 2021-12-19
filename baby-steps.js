
function add () {

    let sum = 0;

    for (let i = 2; i < process.argv.length; i++){

        
        sum = sum + Number(process.argv[i])
    } 

return sum

}



console.log( add() )
