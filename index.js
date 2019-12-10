// Code your solutions in this file
let names = [ 'Lisa', 'Kaitlin', 'Jan' ]

function writeCards(arr, event) {
    let thankYouCards = []
    for (let i = 0; i < names.length; i++) {
        let name = names[i]
        thankYouCards.push(`Thank you, ${name}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
}

console.log(writeCards(names))

function countDown(num) {

    // while (num > 0) {
    //     console.log(num)
    //     num--
    // }
    // console.log(num)

    for (let i = num; i >= 0; i--) {
        console.log(i)
    }
}

// countDown(10)
