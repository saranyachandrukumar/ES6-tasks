// Implement a function that uses the reduce method to concatenate all strings in an array into a single string

const words = ['Hello', ' ', 'World', '!'];
function single(mergedata){
return mergedata.reduce((one,two) => {
    return one + two;
},'');
}
const strings= single(words)
console.log(strings)

