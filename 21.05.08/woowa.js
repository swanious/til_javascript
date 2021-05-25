
function Solution(weights, scores) {
  var l = scores.length;
  var result = [];

  for (let i = 0; i < l; i++) {
    var condition = [0, 0, 0, 0]; // [이긴횟수, 몸무게높은사람이긴횟수, 자기몸무게, 자기번호]
    for (let j = 0; j < l; j++) {
      if (i === j) continue
      if (scores[i][j] === 'W') {
        condition[0]++
        if (weights[i] < weights[j]) condition[1]++
      }
    }
    condition[2] = weights[i]
    condition[3] = i
    result.push(condition)
  }

  // 정렬
  result.sort((a, b) => a[0] > b[0] ? -1 : 1)
  console.log(result)
  for (let i = 0; i < l; i++) {
    var temp;
    for (let j = i; j < l; j++) {
      if (i === j) continue
      if (result[i][0] === result[j][0]) {
        // 상대가 자신보다 무거운 사람을 이긴횟수가 더 많으면 자리 교체
        if (result[i][1] < result[j][1]) {
          temp = result[i];
          result[i] = result[j];
          result[j] = temp;
        }
        if (result[i][1] === result[j][1]) {

          // 상대가 더 무거우면 자리 교체
          if (result[i][2] < result[j][2]) {
            temp = result[i];
            result[i] = result[j];
            result[j] = temp;
          }
          if (result[i][2] === result[j][2]) {
            // 상대 번호가 작으면 자리교체
            if (result[i][3] > result[j][3]) {
              temp = result[i];
              result[i] = result[j];
              result[j] = temp;
            }
          }
        }
      }
    }
  }
  return result
}