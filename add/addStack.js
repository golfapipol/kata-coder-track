const swapIfLengthGreaterThan = require('./swap')
const add = (x,y) => {
    let [stand, adder] = swapIfLengthGreaterThan(x.split(""), y.split(""))
    let output = []
    let tod = 0
    while (stand.length != 0) {
        const number = stand.pop()
        const add = adder.pop() || 0
        const sum = parseInt(number,10) + parseInt(add,10) + tod
        tod = 0
        tod = Math.floor(sum / 10)
        output.unshift(sum % 10)
    }
    if (tod != 0) {
        output.unshift(tod)
    }
    return output.join("")
    
}

module.exports = add
