/*

*DATA TYPES
//Data types describe the xtc of data
/**
 * divided into 2
 1.Primitive
 umber,strings,boolean,objects,null,undefined,symbol
 once a primitive is created,it cannot be modified-i.e immutable
 2.Non primitive-Object references
Objects,Arrays
Are modifiable/mutable
'

 */


node index.js
//USE OF TYPEOFF OPERATOR TO KNOW THE DATATYPE
*/

/**Number */
console.log(typeof 20)

/*strings */
//Strings are texts under single,double and backtick quotes
console.log(typeof'Hello')  //single quotes
console.log(typeof `Hello,world`) //backticks
console.log(typeof"Hello world"  )//Double quotes


/*Booleans */
//Either true or false
console.log(typeof true)

/*Objects */
// Collection of data consisting of key:value pairs
//Opened with curly brackets{{}}
const student ={
    firstName:'John',
    lastNAme:'Doe',
    cohort:'SDF-FT-06',
    class:'Bravo'

}

console.log(typeof student)
 
/*Arrays */
//List of values enclosed using square brackets
const nums=[1,2,3,4]
console.log(typeof nums)


/**Null */
console.log(typeof null)