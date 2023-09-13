//A function is a piece of coe that allows reusability
//Can accept one or more parameters

//syntax
/**
 * function functionName(parameters){
    //function logic/code
}

 */

//console.log('Good morning')


//THREE WAYS TO DECLARE/WRITE A FUNCTION
// 1.1 
/**
 * function FunctionName(a,b){

}
 *  */ 
//1.2 Anonymous function===Expression function(declared)
/* const functionName = function(a,b){

    
}
 */

//1.3
/**
 * functionName =(a,b)=>{   }
 * 
 * 
 * //let myFunc=(a,b)=>a*b
 * hello =()=>{return 'Hello,World'}
 * hello=()=>'Hello,World'
 * ///Arrow function with parameters
 * hello =(val)=>'Helle' + val
 * if you have only one parameter you can skip the parentheses 
 * 
 * 
 */
 */
function greetings(){
    console.log('Good morning')
}

//calling//invoking the function
greetings()

//Parameters
//A place holder/variables deined in the function parentheses
//Arguments are values passed into a function
//In a function we can pass different data types(number string,boolean,object,function) as a parameter
const time='day'  //global scope
function greetings(name,time){
    console.log(`Good morning ${name},have a good ${time}`)
}

//calling//invoking the function
greetings('Ian') //local scope
greetings('Gichane')


//SCOPE
console.log(time)


//return 
//if a function does not return values,the value of the function is undefined
function sum(a,b){
    console.log('yes')
   return a+b  ///return stops the execution of a function
}
//sum(22,44)
console.log(sum(15,15))
console.log(sum(15,16))


const sumOfTwoNumbers = sum(20,21)
console.log(sumOfTwoNumbers)



//function without a parameter and return
function square(){
    let num=2
    let sq=num*num
    console.log(sq)
}
square()

function addTwoNumbers(num1,num2){
    return num1+num2

}
console.log(addTwoNumbers(3,4))


//Function with multiple parameters
const myArray=[1,2,3,4]
function sumArr(arr){
    let sum=0;  
    for (let i = 0; i < arr.length; i++){
        sum=sum+arr[i]
    }
    return sum;


}
console.log(sumArr(myArray))

//Arrow function
const areaOfCircle =(radius)=>{
    let area = Math.PI*radius**2;
    return area;
}
console.log(areaOfCircle(10))


//
