const [a] = [10];
console.log(a);

const vetor = [2,3,4,5,6,7];
const [num1, num2, , num4] = vetor;

console.log(num1, num2, num4);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

const [, [, nota]] = [[, 8, 8], [9, 6, 8]];

console.log(nota);

const array = [1,2,3,4,5];
const [m1,, m3, , m5 ] = array;
console.log(m1,m3,m5);