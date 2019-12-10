// Code your solutions in this file
let names = [ 'Lisa', 'Kaitlin', 'Jan' ]

function writeCards(arr) {
    let result = []
    for (let i = 0; i < names.length; i++) {
        let name = names[i]
        result.push(`Thank you, ${name}, for the wonderful surprise gift!`)
    }
    return result
}

// console.log(writeCards(names))

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

countDown(10)
