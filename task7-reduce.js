 // Write a function that uses the reduce method to calculate the sum of all elements in an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers.reduce(function (result, item) {
    return (result+item)
 }, 0);
 console.log(sum);