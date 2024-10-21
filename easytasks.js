//Task 1
function findSum (a,b) {
    console.log(a+b);
}
findSum(2,3);

//Task 2
function square (two) {
    console.log(two*two)
}
square(2);

//Task 3
function massiv (c,d,e,f,g) {
    console.log(c+d+e+f+g)
}
massiv(1,2,3,4,5);

//Task 4
function findLength (string) {
    return string.length;
}
console.log(findLength("Aruzhan"));

//Task 5
function absolute(num) {
    if(num>=0) {
        return num;
    } else {
        return -num;
    }
}
console.log(absolute(3))
console.log(absolute(-7))

//Task 6
function arrayLength (numbers) {
    return numbers.length;
} 
console.log(arrayLength([1,5,7,8,9]));

//Task 7
function twoNumbers (j,k) {
    if(j>k) {
        return j;
    } else {
        return k;
    }
}
console.log(twoNumbers(7,8));

//Task 8
function repeat (str, number) {
    for(irep=0; irep<number; irep++) {
        console.log(str);
    }
}
repeat("Aruzhan", 5);

//Task 9
function doubleArray(nums) {
    return nums.map(num => num * 2);
}

console.log(doubleArray([1, 2, 3, 4]));

//Task 10
function checknumber(numb) {
    if(numb%2===0) {
        console.log(numb, " - четное число");
    } else {
        console.log(numb, " - нечетное число");
    }
}
checknumber(6);
checknumber(7);



