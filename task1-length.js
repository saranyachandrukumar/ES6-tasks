//create a new array containing the lengths of each string in the original array

const strings = ['apple', 'banana', 'orange', 'kiwi'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const people = [
 { name: 'Alice', age: 30 },
 { name: 'Bob', age: 25 },
 { name: 'Charlie', age: 35 }
];
const strings1= strings.map(str=>str.length);
console.log(strings1)
const numbers1=numbers.map(num=>num.toString().length);
console.log(numbers1)
const names=people.map(people=>people.name.length);
console.log(names)
const ages=people.map(people=>people.age.toString().length);
console.log(ages)