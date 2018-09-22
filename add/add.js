const swapIfLengthGreaterThan = require('./swap')
const add = (x,y) => {
    const reverseX = x.split("").reverse()
    const reverseY = y.split("").reverse()
    let [stand, adder] = swapIfLengthGreaterThan(reverseX, reverseY)    
    let output = []
    let tod = 0
    while (stand.length != 0) {
        const number = stand.shift()
        const add = adder.shift() || 0
        const sum = parseInt(number,10) + parseInt(add,10) + tod
        tod = 0
        tod = Math.floor(sum / 10)
        output.push(sum % 10)
    }
    if (tod != 0) {
        output.push(tod)
    }
    return output.reverse().join("")
    
}


module.exports = add
