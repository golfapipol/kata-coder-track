const expense = (list) => {
    const listInDays = list.split("\n")
    const priceInDays = listInDays.map((listInDay) => {
        const [day, ...products] = listInDay.split(" ")
        const prices = products.map(([type, ...price]) => parseInt(price.join(""), 10))
        const sum = prices.reduce((total, current) => total + current, 0)
        return sum
    })
    const sum = priceInDays.reduce((total, current) => total + current, 0)
    return Math.round((sum / listInDays.length) * 100) / 100
}
module.exports = expense