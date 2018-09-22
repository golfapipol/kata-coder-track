const swapIfLengthGreaterThan = require('./swap')
const add = (x,y) => {
    let [stand, adder] = swapIfLengthGreaterThan(
        x.split("").reverse(), 
        y.split("").reverse()
    )
    let output = []
    let tod = 0
    while (stand.length != 0) {
        let start = stand.splice(0, 5).reverse().join("")
        let add = adder.splice(0, 5).reverse().join("")
        if (add == "") {
            add = 0
        }
        let sum = parseInt(start,10) + parseInt(add, 10) + tod
        tod = 0
        tod = Math.floor(sum / 100000)
        let printOutput = `${sum % 100000}`
        output.unshift("0".repeat(stand.length != 0 && 5 - printOutput.length) + printOutput)
    }
    if (tod != 0) {
        output.unshift(tod)
    }
    return output.join("")
}

module.exports = add
