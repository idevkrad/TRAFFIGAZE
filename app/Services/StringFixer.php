<?php

namespace App\Services;

class StringFixer {

    public static function uppercaseExcept($value) {

        $delimiters = array(" ", "-", ".", "'", "O'", "Mc");
        $exceptions = array("and", "to", "of",  "I", "II", "III", "IV", "V", "VI", "VII", "VIII","IX", "X", "XI", "XII");
        $string = mb_convert_case($value, MB_CASE_TITLE, "UTF-8");
        foreach ($delimiters as $dlnr => $delimiter) {
            $words = explode($delimiter, $string);
            $newwords = array();
            foreach ($words as $wordnr => $word) {
                if (in_array(mb_strtoupper($word, "UTF-8"), $exceptions)) {
                    // check exceptions list for any words that should be in upper case
                    $word = mb_strtoupper($word, "UTF-8");
                } elseif (in_array(mb_strtolower($word, "UTF-8"), $exceptions)) {
                    // check exceptions list for any words that should be in upper case
                    $word = mb_strtolower($word, "UTF-8");
                } elseif (!in_array($word, $exceptions)) {
                    // convert to uppercase (non-utf8 only)
                    $word = ucfirst($word);
                }
                array_push($newwords, $word);
            }
            $string = join($delimiter, $newwords);
        }

        return $string;
    }
    
}