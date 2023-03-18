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

const INname=[
  'Кирилл',
  'Матвей',
  'Михаил',
  'Вера',
  'Данила',
  'Богдан',
  'Марат',
  'Марк',
  'Анфиса',
  'Денис'
];

const INmessage=['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const result = [...Array(7).keys()].map((i) => (
  { id:i + 1,
    url:`photos/${i + 1}.jpg`,
    description:[],
    likes:random(15,200),
    comments:{
      id:random(1,25),
      avatar: `img/avatar-${random(1,6)}.svg`,
      message:INmessage[random(1,6)],
      name:INname[random(1,10)]
    }
  }

));
