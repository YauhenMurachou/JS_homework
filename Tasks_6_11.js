//6 - реализовать функцию, которая принимает строку и возвращает новую строку без дубликатов символов ( “aabb11cd” -> “ab1cd”

function newString(str) {
	const startStr = new Set(str);
	const arrStr = Array.from(startStr);
	
	return arrStr.join('');
};

const result = 'aabb11cd';
alert(newString(result));


// 11 - написать функцию, которая сделает из массива объект
// 	const arr = [ { name: ‘width’, value: 10 }, { name: ‘height’, value: 20 }] -> { width: 10, height: 20}


const arr = [ { name: 'width', value: 10 }, { name: 'height', value: 20 }];
function arrToObj(arr) {
const [first, second] = arr;
const {name, value} = first;
const {name: naming, value: valuing} = second;

let obj = {};
obj[name] = value;
obj[naming] = valuing;

return obj;
}

console.log (arrToObj(arr));