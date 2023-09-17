//A collection of data consisting of key value pairs

const cars = {
    color:'white',
    model:'Audi',
    owner:'Ian',
    previousOwners:['IAn','GIchane',{fullName:'ironman',Address:'Nairobi'}],
    yearOfManufature:2015
}


//1.1Accessing values

//dot notation
console.log(cars.model)

//square bracket notation
console.log(cars['model'])


//Adding properties
cars.numberPlate='KCZ'
console.log(cars)


//Updating
cars.model='Toyota'
console.log(cars)


console.log(cars.previousOwners[1].fullName)



///Object methods
//1.1 object.keys()

console.log(Object.keys(cars))
console.log(Object.values(cars))


///MAke a copy
const carCopy = {...cars}








///Object iteration
//Loopng vs iteration
//iterate vs enumerate


/**Looping is the process of executing a set of statements repeatedly until a condition is met. */
/** Iteration is the process of executing a set of statements once for each element in a collection. */