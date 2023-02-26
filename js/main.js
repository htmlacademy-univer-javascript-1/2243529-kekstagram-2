// Функция, возвращающая случайное целое число из переданного диапазона включительно
let x=prompt("Введите первое число ");
let y=prompt("Введите второе число ");
let Random=function(x,y) {
if (x<y){ return Math.floor((Math.random()*(y-x+1))+x)}
if (x>y){ return Math.floor((Math.random()*(x-y+1))+y)}
}
{ console.log('Рандомное число '+ Random(x,y)) }
//


//Функция для проверки максимальной длины строки
let str = prompt("Введите строку ");
let maxlong = 140;
function MaxLine(str,maxlong) {
  str=str.length
 if (str<=maxlong) {console.log(true)} 
 else {console.log(false)}
  }
MaxLine(str,maxlong);
//