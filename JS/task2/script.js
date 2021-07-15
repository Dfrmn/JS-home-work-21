// 2. Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной
let arr1 = [2 , 5 , 3 , 9];
let arr2 = arr1.splice(0 , 1) * arr1.splice(0 , 1);
// console.log(arr1);
let arr3 = arr1.splice(0 , 1) * arr1.splice(0 , 1);
let result = arr2 + arr3;
console.log(result);