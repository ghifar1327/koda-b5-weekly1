function genMultiplicationTable(n){
    for(let y = 1 ; y <= n ; y++){
        let table = y
        let sum = y
        for(let x= 1; x < n ; x++){
            sum +=y
            table += ` ${sum}`
        }
        console.log(table)
    }
}

genMultiplicationTable(10)