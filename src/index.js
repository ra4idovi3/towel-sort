
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix && matrix.length > 0){ 
    let newArr = matrix;
    let arr = [];
    let str = '';
    for (let i = 0; i < newArr.length; i++){
        if(i%2 != 0){
            newArr[i] = newArr[i].reverse();
        }
    arr.push(newArr[i]);
    }
    str = arr.join(',');
    return str.split(',').map(el => Number(el));
  }
  return [];
}