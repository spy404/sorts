<?php

function heapSort(array $arr): array
{
    $n = count($arr);

    if ($n <= 0) {
        throw new \UnexpectedValueException('Input array must have at least one element.');
    }

    for ($i = floor($n / 2) - 1; $i >= 0; $i--) {
        heapify($arr, $n, $i);
    }

    for ($i = $n - 1; $i >= 0; $i--) {
        [$arr[0], $arr[$i]] = [$arr[$i], $arr[0]];

        heapify($arr, $i, 0);
    }

    return $arr;
}

function heapify(array &$arr, int $n, int $i): void
{
    $largest = $i;
    $left = 2 * $i + 1;
    $right = 2 * $i + 2;
    if ($left < $n && $arr[$left] > $arr[$largest]) {
        $largest = $left;
    }

    if ($right < $n && $arr[$right] > $arr[$largest]) {
        $largest = $right;
    }

    if ($largest !== $i) {
        [$arr[$i], $arr[$largest]] = [$arr[$largest], $arr[$i]];
        heapify($arr, $n, $largest);
    }
}
