// 1. Создайте массив arr = [‘a’, ‘b’, ‘c’, ‘d’] и с его помощью выведите на экран строку ‘a+b, c+d’.
let arr1 = ['a', 'b', 'c', 'd'];
let result = `${arr1.splice(0, 2).join("+")} , ${arr1.join("+")}`;
console.log(result)