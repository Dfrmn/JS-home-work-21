// 7. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве. Пример: arrayFill(‘x’, 5) сделает массив [‘x’, ‘x’, ‘x’, ‘x’, ‘x’].

function arrayFill(value, count){
    let arr = [];
        for(let i = 0 ; i < count ; i++){
            arr.push(value);
        }
    return arr;
}
console.log(arrayFill("*" , 5));