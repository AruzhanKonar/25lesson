//Task 1
function positivNumbers (array) {
    return array.filter(num=>num>0)
}
console.log(positivNumbers([-1,2,-3,-4,5]));

//Task 2
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello"));

//Task 3
function averageArray(numbers) {
    if (numbers.length === 0) return 0; 
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
console.log(averageArray([1, 2, 3, 4, 5]));

//Task 4
function sortArrayDescending(numb) {
    return numb.slice().sort((a, b) => b - a);
}
console.log(sortArrayDescending([4, 2, 7, 1, 5]));

//Task 5
function factorial(n) {
    if (n < 0) return undefined; 
    if (n === 0 || n === 1) return 1; 
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));

//Task 6
function getStudentsWithHighScores(students) {
    return students
        .filter(student => student.averageScore > 70) 
        .map(student => student.name); 
}
const students = [
    { name: "Aruzhan", age: 20, averageScore: 85 },
    { name: "Asel", age: 22, averageScore: 65 },
    { name: "Dias", age: 19, averageScore: 75 },
    { name: "Yarassyl", age: 21, averageScore: 60 },
];
console.log(getStudentsWithHighScores(students));