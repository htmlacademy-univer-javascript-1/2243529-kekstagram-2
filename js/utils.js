// Функция, возвращающая случайное целое число из переданного диапазона включительно
function random(x, y) {
  const z = x - 0.5 + Math.random() * (y - x + 1);
  return Math.round(z);
}
//

//Функция для проверки максимальной длины строки
function MaxLine(str,maxlong) {
  return str.length<=maxlong;
}
//

//Функция для создания оригинального Id
const OriginalCommentIds=new Set;
const MadeCommentId=()=> {
  const commentId=random(1,2 ** 20);
  OriginalCommentIds.add(commentId);
  return commentId;
};
//
export{random};
export{MaxLine};
export{MadeCommentId};

