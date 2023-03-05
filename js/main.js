// Функция, возвращающая случайное целое число из переданного диапазона включительно
function random(x, y) {
  const z = x - 0.5 + Math.random() * (y - x + 1);
  return Math.round(z);
}
random(10, 110);
//

//Функция для проверки максимальной длины строки
function MaxLine(str,maxlong) {
  return str.length<=maxlong;
}
MaxLine('Пример коментария',140);
//
