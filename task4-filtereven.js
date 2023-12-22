//Given an array of numbers, use the filter method to create a new array containing only the even numbers

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evennumbers=numbers.filter(function(even)
{
    return even % 2 ===0;
});
console.log(evennumbers)

