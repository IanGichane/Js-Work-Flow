/*strings */
//Strings are texts under single,double and backtick quotes

//1.1 STRING CONCATNATION
const firstName ='John'
const lNAme ='Doe'


//1.2string interpollation/TEMPLATE LITERALS
const fullName = `${firstName} ${lNAme}, of age ${100 +76}` 
console.log(fullName)


//1.3 Concat
const newFullNAme = firstName +''+ lNAme +''+(100-77)+''+new Date()
console.log(newFullNAme)

//Long literal strings
//A string could be a single character or a paragraph
//if too big and does not fit in one line use ¬!"£$%^&*()_{}~;'<>?///.,`1234567890-[]#;',./?>><<@:LL}{++_)(*&^%$£"!¬~~###¬¬``

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."
console.log(paragraph)

//Escape sequence in strings
/**
 \n: new line
\t: Tab, means 8 spaces
\\: Back slash
\': Single quote (')
\": Double quote (")
 * 
 * 
 */


///Type Coercion refers to the process
// of automatic or implicit conversion of values
//  from one data type to another. This includes conversion from 
 // Number to String, String to Number, Boolean to Number etc. when different types of operators are applied to the values
 var x = 10 + '20';
var y = '20' + 10;
  
// The Boolean value true is converted
// to string 'true' and then '+'
// concatenates both the strings
var z = true + '10';
  
console.log(x);
console.log(y);
console.log(z);


// The string '5' is converted
// to number 5 in all cases
// implicitly
var w = 10 - '5';
var x = 10 * '5';
var y = 10 / '5';
var z = 10 % '5';
  
console.log(w);
console.log(x);
console.log(y);
console.log(z);


// The Boolean value true is
// converted to number 1 and
// then operation is performed
var x = true + 2;
  
// The Boolean value false is
// converted to number 0 and
// then operation is performed
var y = false + 2;
  
console.log(x);
console.log(y);


// Should output 'true' as string '10'
// is coerced to number 10
var x = (10 == '10');
  
// Should output 'true', as boolean true
// is coerced to number 1
var y = (true == 1);
  
// Should output 'false' as string 'true'
// is coerced to NaN which is not equal to
// 1 of Boolean true
var z = (true == 'true');
  
console.log(x);
console.log(y);
console.log(z);