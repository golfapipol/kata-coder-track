const expense = (list) => {
    const days = {
        mon: 0,
        tue: 0,
        wed: 0,
        thu: 0,
        fri: 0,
        sat: 0,
        sun: 0,
    }
    const sequelOfDay = ["thu", "fri", "sat", "sun", "mon", "tue", "wed"]
    
    const listInDays = list.split("\n")
    const priceInDays = listInDays.map((listInDay) => {
        const [day, ...products] = listInDay.split(" ")
        const prices = products.map(([type, ...price]) => parseInt(price.join(""), 10))
        const sum = prices.reduce((total, current) => total + current, 0)
        return sum
    })
    const sum = priceInDays.reduce((days, current, index) => {
        days[sequelOfDay[index%7]] += current
        return days
    }, days)
    return `Mon ${days.mon}
Tue ${days.tue}
Wed ${days.wed}
Thu ${days.thu}
Fri ${days.fri}
Sat ${days.sat}
Sun ${days.sun}`
}
module.exports = expense