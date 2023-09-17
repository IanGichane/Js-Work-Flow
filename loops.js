// loop structure
/**
 * 
 * for(initialization, condition, increment/decrement){
  // code goes here
}
 */
for(let i = 0; i <= 5; i++){
    let j = 5-i 
        console.log(`${i} * ${j} = ${i * j}`)
    
}


//
/**
 * const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i=0;i<countries.length;i++){
    newArr.push(countries[i].toUpperCase())
    
}
console.log(newArr)


//while loop
//A deconstructed foo loop

/**
initialization
while(condition){
loop loop body 
increment/decrement
} */


//we iterate through an array if we are not interested in the index of each element in the array.
/**
 * for(const of element of arr){
    code goes here
}
 */

//const nums = [1,2,3,4,5,6,7,8,9,10]
//let sum =0
/**for (const num of nums){
  
    sum = sum + num 
    
} */
/**console.log(sum)
//break is used to interrupt a loop
for (const num of nums){
  
    sum = sum + num 
    break
    
}
console.log(sum) */

for(let i = 1; i <= 5; i++){

    let row = '';
    for(let j = 1; j <= i; j++){
    row+='#'
    }

    console.log(row)
}
let sum =0
for(let i = 1; i <= 100; i++){
    
    sum+=i
}
console.log(sum)

