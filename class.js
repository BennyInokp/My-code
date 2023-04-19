//write a function that will sort an array in a descending order

//let arr = [5,2,1,-10,8]
//console.log (arr.reverse())

//write a function sumSalaries(salaries) that return the sum of all salaries
//using object.value and the for...of loop.
//if salaries is empty, then the result must be 0.

//let salaries = {
//john: 100,
//pete: 300,
//mary: 250,
//};

//function sumSalaries(salaries) {
//let sum = 0;
//for (let salary of Object.values(salaries)) {
//  sum += salary;
//}
// return sum;
//}
//console.log(sumSalaries(salaries))

//There is a salaries object:
/*let salaries = {
  "John":100,
  "Pete":300,
  "Mary":250
};

*/

//create the function topSalary(salaries) that returns the name of the top-paid person
//if there are multiple top-paid Persons , return any of them.
//P.S. use Object.enteries and destructuring to iterate over key/value pairs

//function topSalary(salaries){
//let sum = 0
// for (let [key, value ] of Object.enteries(salaries)){
// if (top-paid < 300);
//  return Name
// }
// elseif(top-paid >= 300);
// return Name
// {

// }
//}
//console.log(topSalary(salaries));

/*let user = {
  name: "john",
  years: 30,
  isAdmin: "false",
};
//name property into the variable name
//years property into the variable age.
//isAdmit property into the variable isAdmin(false,if no such property)

let name = user.name;
let age = user.years;
let isAdmin = user.isAdmin;

console.log(name);
console.log(age);
console.log(isAdmin);*/
//write a function sum that works like this: sum(a)(b)= a+b

function sum(a){ 
  return function(b){
  return a+b
  }
}
consoe.log(sum(3)(7));