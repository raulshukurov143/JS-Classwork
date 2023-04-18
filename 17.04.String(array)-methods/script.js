// 1.Write a function called: 'getUpper(anyArr)' that returns the newArr with the uppercased first and last character.
const arr1 = ["guba", "mingecevir", "baku", "gazag", "gence", "shirvan"];
let anyArr = arr1.map(
  (el) => el[0].toUpperCase() + el.slice(1, -1) + el.at(-1).toUpperCase())
;
console.log(anyArr);

// 2.String and Array
let text = 'We are MERN-Stack developers'
// 1.Replace 'MERN Stack' with 'Front-end'.  // We are Front-end developers!
console.log(text.replace("MERN Stack","Front-end"));
// 2.Replace all 'e' with 'a'. // wa ara marn-stack davalopars!
console.log(text.toLocaleLowerCase().replaceAll("e","a"));
// 3."in Microsoft!" concat to 'text'. //We are MERN-Stack developers in Microsoft!
console.log(text.concat(" in Microsoft"));
// 4.Find index of each 'r' and collect them in a new Array called 'newArr'
const newArr=[]
text.split("").map((el,i)=>el.toLowerCase()==="r"? newArr.push(el):newArr)
console.log(newArr);
// 5.Find index of first 'r' (excepting 'are').
console.log(text.toLocaleLowerCase().indexOf("r",5));
// 6.Find out vowels in 'text' and add them to 'newArr' which contains unique values.
//  let vowels = ['a', 'i', 'o', 'u', 'e']
// 3.Write a function(arrow function) called 'calcArea()' which to calculate sum region's area,
//  if region's length is equal to 6 in 'arr2'.
const arr3 = [
    {
        region: 'Yasamal',
        area: 170,
    },

    {
        region: 'Nizami',
        area: 20,
    },

    {
        region: 'Nesimi',
        area: 10,
    },

    {
        region: 'Sebail',
        area: 30,
    },
    {
        region: 'Xetai',
        area: 30,
    },

]
let result=arr3.reduce((sum,curr)=>curr.region.length===6?sum+curr.area:sum,0)
console.log(result);
// 4.Sort 'arr3' ascending order.
const arr4 = [8, 44, 14, 2, 23, 1, 22, 34, 9, 0, 6]
console.log(arr4.sort((a,b)=>a-b));
// 5.Gather all nested array in one array.
const arr5 = [5, [8], [9, ['hi', ["don't touch me"], [0]], '9']]
console.log(arr5.flat(Infinity));
// 6.Sort array "colors" with color's length, if color's length is equal to each other sort them alphabetically.
const colors = ['green', 'blue', 'yellow', 'black', 'red', 'brown', 'white', 'gray', 'violet', 'pink']
console.log(colors.sort((a,b)=>a.length-b.length));
