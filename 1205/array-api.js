// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join()
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',')
  console.log(result)
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = new Array()
  console.log(result)
  for (i = array.length-1; i>=0; i --) {
    result.push(array[i])
  }
  console.log(result)
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2)
  console.log(array)
  console.log(result)
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
	const result = students.find((student)  => student.score === 90);
 console.log(result)
}

// Q6. make an array of enrolled students
{
	const result = students.find ((student) => student.enrolled === true);
  console.log(result)
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
	const result = students.map((student) => student.score);
  console.log(result)
}

// Q8. check if there is a student with the score lower than 50
{
	// 배열의 요소 중에 true가 하나라도 있을 때,
	const result = students.some((student) => student.score < 50);
  console.log(result);
  
  // 배열의 요소가 모두 true일 때
  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2)
}

// Q9. compute students' average score
{
	const result = students.reduce((prev, curr) => {
  return prev + curr.score;
  }, 0)
  console.log(result / students.length)
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
	// 함수형 프로그래밍의 특징을 잘 살려서
  // 함수를 이어 붙이는 형식으로 활용할 수 있다.
	const result = students
  .map(student => student.score)
  .filter((score) => score >= 50)
  .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
	// sort Api의 설명을 보면 'a-b가 negative가 되면 a값이 b보다 작다는 의미이므로 정렬을 해주는 방식'이라고 적혀있음
	const result = students.map(student => student.score).sort((a, b) => a - b)
  .join();
  console.log(result)
}
