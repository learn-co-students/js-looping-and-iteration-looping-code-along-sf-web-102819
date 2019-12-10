
function writeCards(names, occassion){
    let thankyouCards = [ ]
    for(let i = 0; i < names.length; i++){
    thankyouCards.push(`Thank you, ${names[i]}, for the wonderful ${occassion} gift!`)
    }
    return thankyouCards
}

function countDown(number) {
    while (number > 0) {
        console.log(number)
        number -= 1;
    }
    console.log(number);
}




