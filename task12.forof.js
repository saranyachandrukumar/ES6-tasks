//Given an array of objects representing expenses, use a for...of loop to calculate the total amount 
//spent. Each object has an amount property.

const expenses = [
    { description: 'Groceries', amount: 50 },
    { description: 'Clothing', amount: 30 },
    { description: 'Electronics', amount: 80 }
   ];

   function expensiveitems(array){
    let total = 0;
    for(const overallexpense of array){
        total += overallexpense.amount;
    }
    return total
   }
const final=expensiveitems(expenses)
console.log(final)

