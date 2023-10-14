package sort

import "github.com/TheAlgorithms/Go/constraints"

func Cocktail[T constraints.Ordered](arr []T) []T {
	if len(arr) == 0 {
		return arr
	}

	swapped := true
	start := 0
	end := len(arr) - 1

	for swapped {
		swapped = false
		var new_start int
		var new_end int

		for i := start; i < end; i++ {
			if arr[i] > arr[i+1] {
				arr[i], arr[i+1] = arr[i+1], arr[i]
				new_end = i
				swapped = true
			}
		}

		end = new_end

		if !swapped {
			break
		}

		swapped = false

		for i := end; i > start; i-- {
			if arr[i] < arr[i-1] {
				arr[i], arr[i-1] = arr[i-1], arr[i]
				new_start = i
				swapped = true
			}
		}

		start = new_start
	}

	return arr
}
