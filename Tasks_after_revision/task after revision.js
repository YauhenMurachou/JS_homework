let beginRange = 1;
let endRange = 10;
// эту переменную лучше использовать локально в функции getRange
// помнишь, мы стараемся не модифицировать окружение
let numbers = [];

//переменная с шагом 2, которая выводит все значения диапазона
// а что будет, если step = 0 ?
let getRange = function(beginRange, endRange, step = 2) {
  //условие для цикла по возрастанию
  if (beginRange <= endRange) {
    // (let i = beginRange; i <= endRange; i += step)
    for (let i = beginRange; i <= endRange; i +=step) {
      numbers.push(i);
    }
  }
// else не переносится https://learn.javascript.ru/coding-style
  else if (beginRange >= endRange) {
    // for (let i = beginRange; i >= endRange; i -= step)
    for (let i = beginRange; i >= endRange; i -=step) {
      numbers.push(i);
    }
  }
  // не хватает пробела
  return numbers;
}

// console.log(getRange(beginRange, endRange));
console.log (getRange(beginRange, endRange));

// тебе не нужны эти переменные, у тебя есть уже набор значений, полученный в результате getRange
// сохрани этот рузельтат в перменную
let first = numbers[0];
let last = numbers[numbers.length - 1];

// неплохо, но можно взять идею с нашего последнего урока
// 1 - анонимная стрелочная функция ( лямбда ) внутри reduce
// 2 - if (first == last){ не имеет смысл, ведь в reduce ты бежишь по значениям массива
const reducer = (accumulator, currentValue) => {
  // === вместо ==
  if (first == last){
    return 1 // точка с запятой
  }
  else { // else не переносится https://learn.javascript.ru/coding-style
    return accumulator + currentValue;
  }
}
// за reduce молодец, отличный вариант использования
// но ты забыл важный момент, который я упоминал, не забывай про начальное значение
console.log(numbers.reduce(reducer));