package sort

import "github.com/TheAlgorithms/Go/constraints"

func Bucket[T constraints.Number](arr []T) []T {
	if len(arr) <= 1 {
		return arr
	}

	max := arr[0]
	min := arr[0]
	for _, v := range arr {
		if v > max {
			max = v
		}
		if v < min {
			min = v
		}
	}

	bucket := make([][]T, len(arr))

	for _, v := range arr {
		bucketIndex := int((v - min) / (max - min) * T(len(arr)-1))
		bucket[bucketIndex] = append(bucket[bucketIndex], v)
	}

	for i := range bucket {
		bucket[i] = Insertion(bucket[i])
	}

	sorted := make([]T, 0, len(arr))
	for _, v := range bucket {
		sorted = append(sorted, v...)
	}

	return sorted
}
