// 9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

let arr = [6 , 5 , 3 , 2 , 1 , 4 ,];

arr.sort(function(a, b) { return a - b; });
console.log(arr);