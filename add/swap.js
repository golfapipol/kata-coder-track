const swapIfLengthGreaterThan = (x, y) => {
    if (x.length < y.length) {
        return [y,x]
    }
    return [x,y]
}
module.exports = swapIfLengthGreaterThan