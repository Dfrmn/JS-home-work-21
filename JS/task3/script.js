// 3. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let result = arr.splice(1 , 1).pop().shift();
console.log(result);