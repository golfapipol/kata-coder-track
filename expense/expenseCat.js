const categoryMap = {
    f: "food",
    g: "game",
    m: "movie",
    s: "stationery",
    t: "transportation"
}
const expense = (list) => {
    const listInDays = list.split("\n")
    const priceCategoriesInDays = listInDays.map((listInDay) => {
        const [day, ...products] = listInDay.split(" ")
        const prices = products.map(([type, ...price]) => ({ category: categoryMap[type], price: parseInt(price.join(""), 10)}))
        const sumCategories = prices.reduce((categories, current) => {
            categories[current.category] += current.price
            categories["sum"] += current.price
            return categories
        }, { sum: 0,
            food: 0,
            game: 0,
            movie: 0,
            stationery: 0,
            transportation: 0, 
        })
        return sumCategories
    })
    const expenseCategory = priceCategoriesInDays.reduce((expenseCategories, current) => {
        expenseCategories['food'] += current.food
        expenseCategories['game'] += current.game
        expenseCategories['movie'] += current.movie
        expenseCategories['stationery'] += current.stationery
        expenseCategories['transportation'] += current.transportation
        expenseCategories["sum"] += current.sum
        return expenseCategories
    }, {
        sum: 0,
        food: 0,
        game: 0,
        movie: 0,
        stationery: 0,
        transportation: 0,
    })
    return `food ${expenseCategory.food || 0}
game ${expenseCategory.game || 0}
movie ${expenseCategory.movie || 0}
stationery ${expenseCategory.stationery || 0}
transportation ${expenseCategory.transportation || 0}
TOTAL ${expenseCategory.sum}`
}
module.exports = expense