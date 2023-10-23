let input = true

// Convert into String
let convertedString = String(input)
console.log(convertedString)
console.log(typeof convertedString)
/*
Expected Outputs:
0           => 0            (string)
true        => true         (string)
false       => false        (string)
undefined   => undefined    (string)
null        => null         (string)
*/


// Convert into Boolean
// let convertedBoolean = Boolean(input)
// console.log(convertedBoolean)
// console.log(typeof convertedBoolean)
/*
Expected Outputs:
0           => false    (boolean)
!= 0        => true     (boolean)
""          => false    (boolean)
"abc"       => true     (boolean)
undefined   => false    (boolean)
null        => false    (boolean)
*/

// Convert into Number
// let convertedNumber = Number(input)
// console.log(convertedNumber)
// console.log(typeof convertedNumber)
/*
Expected Outputs:
"33"        => 33  (number)
"33a"       => NaN (number)
true        => 1   (number)
false       => 0   (number)
undefined   => NaN (number)
null        => 0   (number)
*/