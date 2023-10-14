<?php

function gnomeSort($array)
{
    $a = 1;
    $b = 2;

    while ($a < count($array)) {
        if ($array[$a - 1] <= $array[$a]) {
            $a = $b;
            $b++;
        } else {
            list($array[$a],$array[$a - 1]) = array($array[$a - 1],$array[$a]);
            $a--;
            if ($a == 0) {
                $a = $b;
                $b++;
            }
        }
    }

    return $array;
}
