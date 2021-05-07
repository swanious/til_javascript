const getPermutation = (arr, selectedNum) => {
  let result = [];

  if (selectedNum === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, array) => {

    const rest = [...array.slice(0, index), ...arr.slice(index+1)];
    const permutation = getPermutation(rest, selectedNum - 1);
    const attached = permutation.map(v => fixed + v);

    result.push(...attached)
  });
  return result;
}


const getPowerSet = (k, arr) => {
  if(k === ex1.length) {

    powerSet.push(arr)
    return
  }

  getPowerSet(k + 1, arr + [ex1[k]])
  getPowerSet(k + 1, arr)

}



let ex1 = ['1','7']
let powerSet = []
getPowerSet(0, [])
console.log(powerSet)


const ex2 = [1,2,3,4,5]
console.log(getPermutation(ex2, 3));