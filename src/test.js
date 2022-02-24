const matrix = [
    ];



function towelSort (matrix) {
    if( matrix.length == 0){return []}
    console.log(matrix)
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
    return console.log(str.split(',').map(el => Number(el)));
}
towelSort(matrix);