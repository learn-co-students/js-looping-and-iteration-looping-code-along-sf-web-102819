// Code your solutions in this file

function writeCards(people, adjective) {
    let array = []
    for (let i = 0; i < people.length; i++){
        array.push(`Thank you, ${people[i]}, for the wonderful ${adjective} gift!`)
    }
    return array;
}

function countDown(number){
    for (let i = number; i >= 0; i--){
        console.log(i)
    }
}    