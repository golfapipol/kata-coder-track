const sum = (numbers) => {
    if (numbers.length == 1) return numbers[0];
    if (numbers.length == 2) return numbers[0] + numbers[1];
    const middleIndex = Math.floor(numbers.length/2)
    return sum(numbers.slice(0, middleIndex)) + sum(numbers.slice(middleIndex, numbers.length))
}
module.exports = sum