/**
 * In Js Everything is an object
 * A class is a blueprint for creating js objects
 * 
 * 
 */
/**
 * / syntax
class ClassName {
    //  code goes here
}

class person{
     // code goes here
}

 */
//1.1 Class Instantiation

/**class person{
    // code goes here
}
const person1 = new person */


//1.2 Class Constructor

/**
 * class Person {
    constructor(firstName='John', lastName='Doe',age,country,city) {
   // console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    }
  }
  
  const person1 = new Person('Ian');
  const person2 = new Person('George','Ndirangu');
  const person3 = new Person('KAthy','Guzman');
  const person4 = new Person('PAblo','Scobar');
 */
  
  
 // console.log(person1)

///  1.3 CLASS METHODS
class Person {
    constructor(firstName='John', lastName='Doe',age,country,city) {
    //console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
    }
    getFullName(){
        const fullNAme = this.firstName + ' '+ this.lastName
        return fullNAme;
    }
  }
  
  const person1 = new Person('Ian');
  const person2 = new Person('George','Ndirangu');
  const person3 = new Person('KAthy','Guzman');
  const person4 = new Person('PAblo','Scobar');
  
  
  console.log(person1.getFullName())

  //1.4 PROPERTIES WITH INTIAL VALUE?

