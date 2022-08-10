function countDown(start){
    for(let i = start; i >= 0; i--){
        console.log(i)
    }

}

function writeCards(names, occasion){
    const messages = []
    for(let name of names){
        messages.push(`Thank you, ${name}, for the wonderful ${occasion} gift!`)
    }
    return messages
}