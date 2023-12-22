// Given an object representing expenses, use a for...in loop to calculate the total amount spent. Each 
// property represents an expense category, and the values are amounts.

const expenses = {
    groceries: 50,
    clothing: 30,
    electronics: 80
   };
   function expensiveitems(array){
    let total = 0;
    for(const overallexpense in array){
        total += array[overallexpense];
    }
    return total
   }
const final=expensiveitems(expenses)
console.log(final)