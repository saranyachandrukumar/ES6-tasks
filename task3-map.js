// Given an array of objects, use the map method to create a new array containing only the names of each object
const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
   ];
const All=people.map(individual=>individual.name)
console.log(All)