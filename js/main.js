// Функция, возвращающая случайное целое число из переданного диапазона включительно
function random(x, y) {
  const z = x - 0.5 + Math.random() * (y - x + 1);
  return Math.round(z);
}

console.log ( 'Рандомное число',random(10, 10) );
//

//Функция для проверки максимальной длины строки
function MaxLine(str,maxlong) {
  if (str.length<=maxlong) {console.log('true');}
  else {console.log('false');}
}
MaxLine('this is foo bar',14);

//
