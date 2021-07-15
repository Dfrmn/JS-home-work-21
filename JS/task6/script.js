// 6. Заполните массив следующим образом: в первый элемент запишите ‘1’, во второй ’22’, в третий ‘333’ и так далее.
let count = +prompt(`Enter elements number`);
let arr = [];
for(let i = 1 ; i <= count ; i++){
    let value = '';
    for(let j = 0; j < i ; j++){
        value += i;
    }
    arr.push(value);
}

console.log(arr);