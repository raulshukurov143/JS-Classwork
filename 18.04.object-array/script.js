// 1.Create a function called 'secretName()' that takes in an array of names and returns the first letter of name.//////////////

let names1 = ["Adam", "Sarah", "Malcolm"];
let names2 = ["Harry", "Newt", "Luna", "Cho"];
let names3 = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"];
function secretName(arr) {
  let firstLetterNames = arr.map((el) => el[0]).sort();
  let joinFirstLetterName = String(firstLetterNames.join(""));
  return joinFirstLetterName;
}
console.log(secretName(names1));
console.log(secretName(names2));
console.log(secretName(names3));
// function secretName(arr) {
//     return  arr.map((el) => el[0]).join("");
//   }

// 2.Manipulate array///////////////////////////////////////////////////////
const users = [
  { name: "Anar", surname: "Hesenli", age: "22", uni: "ADA", gender: "male" },
  {
    name: "Nezrin",
    surname: "Reshidova",
    age: "23",
    uni: "UNEC",
    gender: "female",
  },
  {
    name: "Hikmet",
    surname: "Hesenova",
    age: "22",
    uni: "UNEC",
    gender: "male",
  },
  { name: "Nicat", surname: "Sadiqov", age: "25", uni: "UNEC", gender: "male" },
  {
    name: "Murad",
    surname: "Salmanli",
    age: "23",
    uni: "ADNSU",
    gender: "male",
  },
  {
    name: "Aynure",
    surname: "Hesenzade",
    age: "23",
    uni: "BMU",
    gender: "female",
  },
];

// 2.1.Show users who is studying at 'UNEC' and surname starts 'r'.
let arr2 = users.filter((el) => {
  return el.surname[0].toLowerCase() == "r" && el.uni === "UNEC";
});
console.log(arr2);
// 2.2.Show users whose age is eqaul to 22 and name start 'a'.
let arr3 = users.filter((el) => {
  return el.age === "22" && el.name[0].toLocaleLowerCase() === "a";
});
console.log(arr3);

// 2.3.Return new array, if user is male add in front of name 'Mr', or Ms. (e.g. name:'Mr Anar', 'Ms Aynure').
let arry = users.map((el) =>
  el.gender === "male"
    ? { ...el, name: ` Mr ${el.name}` }
    : { ...el, name: `Ms ${el.name}` }
);
console.log(arry);
// 2.4.Sort users by age (ascending).

// 3.Shuffle array////////////////////////////////////////////////////////////////////
const letters = ["a", "b", "c", "d"];
const numbers = [1, 2, 3, 4, 5, 6, 7];

// 4.Divide 2 the price of arr4.
const arr4 = [
  {
    product: "Lenova",
    price: 1900,
  },
  {
    product: "HP",
    price: 1300,
  },
  {
    product: "Acer",
    price: 1600,
  },
];

// 5.Create a function called 'reverseNum()' which is to bind number with its reverse.

let num1 = 246;
let num2 = 102;
let num3 = 152;
function reverseNum(num) {
    num=num+""
    let joinNum=num.split("").reverse().join("")
    return num+joinNum

}
console.log(reverseNum(num1))
console.log(reverseNum(num2))
console.log(reverseNum(num3))
/////////////////////////////////////////////////////////////////////////////////
