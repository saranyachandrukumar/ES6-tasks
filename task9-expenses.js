 // Given an array of objects representing expenses, use the reduce method to calculate the total amount spent. each object has a amount property

 const expenses = [
 { description: 'Groceries', amount: 50 },
 { description: 'Clothing', amount: 30 },
 { description: 'Electronics', amount: 80 }
];
const items=expenses.map(allitems=>allitems.amount)
const totalamount=items.reduce(function (result, item) {
    return (result+item)
 }, 0);
 console.log(totalamount)
