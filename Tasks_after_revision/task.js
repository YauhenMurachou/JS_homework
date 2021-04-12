/*
  Написать функцию getRange, которая принимает 2 агрумента ( начало и конец диапазона )
  1 - вывести через console.log все цифры в диапазоне
  2 - добавить 3, опциональный аргумент, который означает шаг, вывести все значения в диапозоне через шаг
  3 - расширить функцию, чтобы она возвращала сумму всех цифр в диапозоне
  ( если начало > конца, то меняем их местами, если начало = концу, то выводим и возвращаем 1 число )
*/

let beginRange = 1;
let endRange = 10;
let numbers = [];



//переменная с шагом 2, которая выводит все значения диапазона
let getRange = function(beginRange, endRange, step = 2) {
	//условие для цикла по возрастанию
if (beginRange <= endRange) {
  for (let i = beginRange; i <= endRange; i +=step) {
  numbers.push(i);
  }
}
//условие для цикла по убыванию
else if (beginRange >= endRange) { 
  for (let i = beginRange; i >= endRange; i -=step) {    
  numbers.push(i);         
}  
}
  return numbers;  
}

console.log (getRange(beginRange, endRange));

//определяю первое и последнее значение в цикле
//поменять их местами, если первое больше второго, у меня не получилось
let first = numbers[0];
let last = numbers[numbers.length - 1];

//переменная для подсчёта суммы всех значений в диапазоне
const reducer = (accumulator, currentValue) => {
  if (first == last){
    return 1
  }    
  else {
 return accumulator + currentValue;
    }
}

console.log(numbers.reduce(reducer));
