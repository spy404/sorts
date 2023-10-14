package sort

import "github.com/TheAlgorithms/Go/constraints"

func Count[T constraints.Integer](data []T) []T {
	if len(data) == 0 {
		return data
	}
	var aMin, aMax = data[0], data[0]
	for _, x := range data {
		if x < aMin {
			aMin = x
		}
		if x > aMax {
			aMax = x
		}
	}
	count := make([]int, aMax-aMin+1)
	for _, x := range data {
		count[x-aMin]++
	}
	z := 0
	for i, c := range count {
		for c > 0 {
			data[z] = T(i) + aMin
			z++
			c--
		}
	}
	return data
}
