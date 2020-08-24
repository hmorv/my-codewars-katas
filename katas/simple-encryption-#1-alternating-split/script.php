<?php

function invalid($text, $number) {
    return ($number <= 0 || !isset($text) || trim($text) === '');
}

function mix($string) {
    $part1 = $part2 = '';
    $index = 0;

    for (; $index < strlen($string); $index++) {
        if ($index % 2 != 0) {
            $part1 .= substr($string, $index,1);
        } else {
            $part2 .= substr($string, $index, 1);
        }
    }

    return $part1.$part2;
}

function unmix($string) {
    $result = '';
    $index = 0;
    $part1 =  substr($string, 0, strlen($string) / 2);
    $part2 = substr($string, strlen($string) / 2);

    for (; $index < strlen($part2); $index++) {
        $result .= $part2[$index] . $part1[$index];
    }

    return $result;
}

function encrypt($text, $n) {
    if (invalid($text, $n)) {
        return $text;
    }

    for ($i = 0; $i < $n; $i++) {
        $text = mix($text);
    }

    return $text;
}

function decrypt($text, $n) {
    if (invalid($text, $n)) {
        return $text;
    }

    for ($i = 0; $i < $n; $i++) {
    $text = unmix($text);
    }
    return $text;
}
