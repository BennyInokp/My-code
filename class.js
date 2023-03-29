//write a function that will sort an array in a descending order

//let arr = [5,2,1,-10,8]
//console.log (arr.reverse())

//write a function sumSalaries(salaries) that return the sum of all salaries
//using object.value and the for...of loop.
//if salaries is empty, then the result must be 0.

let salaries = {
  john: 100,
  pete: 300,
  mary: 250,
};

function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  } 
  return sum;
}
console.log(sumSalaries(salaries))