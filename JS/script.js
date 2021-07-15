// 1. Создайте массив arr = [‘a’, ‘b’, ‘c’, ‘d’] и с его помощью выведите на экран строку ‘a+b, c+d’.
let arr1 = ['a', 'b', 'c', 'd'];
let result = `${arr1.splice(0, 2).join("+")} , ${arr1.join("+")}`;
console.log(result)

// 2. Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной
let arr1 = [2 , 5 , 3 , 9];
let arr2 = arr1.splice(0 , 1) * arr1.splice(0 , 1);
// console.log(arr1);
let arr3 = arr1.splice(0 , 1) * arr1.splice(0 , 1);
let result = arr2 + arr3;
console.log(result);

// 3. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let result = arr.splice(1 , 1).pop().shift();
console.log(result);

// Дан объект {js:[‘jQuery’, ‘Angular’], php: ‘hello’, css: ‘world’}. Выведите с его помощью слово ‘jQuery’
let obj = {js:[`jQuery`, `Angular`], php: `hello`, css: `world`};
console.log(obj.js.shift());