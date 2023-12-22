// Implement a function that uses the findIndex method to find the index of the first person in an array 
//of objects who is older than 30 years. If there is no such person, return -1. Each object has an age 
//property.
const people = [
 { name: 'Alice', age: 25 },
 { name: 'Bob', age: 35 },
 { name: 'Charlie', age: 28 }
];
function aboveage(array){
    const result =array.findIndex(person=>person.age>30)

    if (result !== -1){
       const final = array[result];
       console.log(`Index: ${result}, Name: ${final.name}` )
}
     else{       
          console.log("-1")
             }
}
aboveage(people);