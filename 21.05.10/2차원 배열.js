// 함수로 만들어 사용
function makeArr(rows, columns) {
  let arr = new Array(rows);
  for (let i=0; i<arr.length; i++) {
    arr[i] = new Array(columns);
  }
  return arr
}

const arr1 = makeArr(5, 2);
console.log(arr1)


// Array객체에 함수를 생성
Array.matrix = function(rows, columns, initial) {
  var a, i, j, mat = [];
  for (i = 0; i < rows; i+=1) {
    a = [];
    for (j = 0; j < columns; j += 1) {
      a[j] = initial;
    }
    mat[i] = a;
  }

  return mat;
}
const arr2 = Array.matrix(5, 2, 0);
console.log(arr2)


// ES6문법 사용
function makeArrToES6(rows, columns, initial) {
  var arr = Array.from(Array(rows), () => Array(columns).fill(initial));
  return arr
}
const arr3 = makeArrToES6(5, 2, 0);
console.log(arr3);