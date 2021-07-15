// 5. Заполните массив следующим образом: в первый элемент запишите ‘x’, во второй ‘xx’, в третий ‘xxx’ и так далее.
let symb = `x`;
let count = +prompt(`Enter elements number`);
let arr = [];
for (let i = 0 ; i < count ; i++){
    arr.push(symb);
    symb += `x`;
}
console.log(arr);