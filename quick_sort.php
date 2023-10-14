<?php

function quickSort(array $input)
{
    if (empty($input)) {
        return [];
    }

    $lt = [];
    $gt = [];
    if (sizeof($input) < 2) {
        return $input;
    }

    $key = key($input);
    $shift = array_shift($input);
    foreach ($input as $value) {
        $value <= $shift ? $lt[] = $value : $gt[] = $value;
    }

    return array_merge(quickSort($lt), [$key => $shift], quickSort($gt));
}
