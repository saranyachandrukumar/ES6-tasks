// Write a function that uses the findIndex method to find the index of the first negative number in an array of numbers. If there are no negative numbers, return -1

const numbers = [1, 2, 3, -4, 5, -6, 7];
function negativenumber(array) {

    var negatives = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negatives.push(array[i]);
            return negatives;
        }
    
    }
            return -1;
}
      
    



console.log(negativenumber(numbers));