let myName = "SOLER Lilian";
let myAge = 20, mySize = 1.75, myWeight = 60;
let mySelf = {"name" : myName, "age" : myAge, "size" : mySize, "weight" : myWeight};

// Declaring different variables of different data types
console.log("My self is " + typeof mySelf);
console.log("Name is " + typeof myName);
console.log("Age, size and weight are " + typeof myAge + "s");

console.log("My name is" + mySelf["name"] + ", I'm " + mySelf["age"] + ", " +
  mySelf["size"] + "m in lenght, " + mySelf["weight"] + "kg in weight.");