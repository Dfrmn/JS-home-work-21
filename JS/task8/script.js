// 8. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

let arr = [1, 2, 1, 6, 1, 5, 7];
let num = 1;
let result = arr.reduce(function(sum, elem) {
	if (sum > 10) {
		alert(num);
	} else {
		num++;
		return sum + elem;
	}
}); 