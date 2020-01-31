<?php

function solution($str, $ending) {
	return $ending === substr($str, -strlen($ending), strlen($ending));
}