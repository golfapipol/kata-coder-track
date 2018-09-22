package sum

func Sum(numbers []int) int {
	var sum int
	for _, value := range numbers {
		sum += value
	}
	return sum
}

func SumDivideConquer(numbers []int) int {
	if len(numbers) == 1 {
		return numbers[0]
	}
	if len(numbers) == 2 {
		return numbers[0] + numbers[1]
	}
	middleIndex := len(numbers) / 2
	return SumDivideConquer(numbers[0:middleIndex]) + SumDivideConquer(numbers[middleIndex:len(numbers)])
}
