//3 - дана функция, она принимает в качестве параметров строки “-”, “1”, “a” , реализовать ее так, чтобы она вернула строку “1-a”

function sum(x, n, y) {

	return n + x + y;
}

sum('-', 'a', '1');


//8 - написать функцию, которая определяет, является ли слово палиндромом

function checkPalindrom(str) {

	const palindrom = [].map.call(str, function (x) {
		return x;
	}).reverse().join('');

	if (str === palindrom) {
		return palindrom;
	} else {
		return 'ни фига не палиндром';
	}
}

checkPalindrom('кабак');




// 12 - написать функцию, которая находит число фибоначи по указанной позиции в списке

function sumFib(n) {

	let a = 1;
	let b = 1;

	for (let i = 3; i <= n; i++) {
		let c = a + b;
		a = b;
		b = c;
	}
	return b;
}

sumFib(7);




// 20 - написать функцию, которая выводит все простые число до указанного

function isPrime(num) {

	next:
	for (let i = 2; i < num; i++) {
		for (let n = 2; n < i; n++) {
			if (i % n === 0)
				continue next;
		}
		console.log(i)
	}
}

console.log(isPrime(12));