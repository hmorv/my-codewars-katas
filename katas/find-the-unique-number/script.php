<?php

function find_uniq($a) {
    $map = [];
    for ($i = 0; $i < sizeof($a); $i++) {
        if (array_key_exists(strval($a[$i]), $map)) {
            $map[strval($a[$i])]++;
        } else {
            $map[strval($a[$i])] = 1;
        }
    }
var_dump($map); echo "\n";
    return array_search(1, $map);
}

$test = [1,5,1, 1, 1, 1];
echo find_uniq($test);