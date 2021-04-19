// Primitive Types / String , Number , Boolean , Bigint , Undefinde , Null , 
const myName = 'GeneralKazuoka'; // const คือ ค่าคงที่เปลี่ยนแปลงไม่ได้
let height = 175; // let เปลี่ยนแปลงค่าได้
let isMale = false;
let city; // ไม่ได้ใส่ค่าให้จะเป็น undefined ถ้าไม่มีค่าจริง ๆ ให้ใส่ null ตอนนั้น / แตกต่างกันยังไง undefined ไม่เคยใส่ค่าให้เลย ส่วน null เคยมีค่ามาแล้วและตอนนี้คือค่าปัจจุบันคือ null
let bigNumber = 10n;

// console.log(myName);
// console.log(height);

// height = 180;
// console.log(height);

console.log(myName, height, isMale, city, bigNumber);

// Reference Types / Object , Array , Function
const person = {
    name: 'Kazuoka',
    height: 175,
    city:'Bangkok'
};
// console.log(person); // ให้แสดง Object ทั้งหมด
console.log(person.name); // ให้แสดงเฉพาะค่าที่เราต้องการ
person.height = 180; // เปลี่ยนแปลงค่า
console.log(person);
person.weigth = 70; // เพิ่มค่าใหม่เข้าไป
console.log(person); 

// Array
const numbers = [5, 10, 15, 20];
// console.log(numbers);
console.log(numbers[1]);
numbers.push(25); // เพิ่มค่าเข้าไปด้านหลัง 
console.log(numbers);
numbers.pop() // ลบค่าด้านหลังออก
console.log(numbers);
numbers.unshift(1); // เพิ่มค่าเข้าไปด้านหน้า
console.log(numbers);
numbers.shift(); // ลบค่าด้านหน้าออก
console.log(numbers);

// Addition + 
// Subtraction - 
// Multiplication * 
// Division / 
// Modulus % หารเอาเศษ
// Exponentiation ** ยกกำลัง
// let result = 10 + 2;
// let result = 10 - 2;
// let result = 10 * 2;
// let result = 10 / 2;
// let result = 10 % 2;
// let result = 10 ** 2;
// let result = 10 + 5 * 2 - 1; // เรื่องลำดับความสำคัญของเครื่องหมาย คูณก่อน ซ้ายไปขวา
let result = 10 + 5 * 2 / 2; // เมื่อความสำคัญเท่ากัน ก็จะทำซ้ายไปขวา คูณ หาร ส่วนมากเขาจะใส่วงเล็บเพื่อให้ดูง่ายเลย และสำคัญก่อน ทำงานก่อน
console.log(result);

// Equal  ===
// Not equal  !==
// Greater than  >
// Less than  <
// Greater than or equal  >=
// Less than or equal  <= 
// And  &&
// Or  ||
// Not  !
let password = '';
if (password === '') {
    console.log('Password is required');
} else if (password.length >= 8 && password.length <= 12) {
    console.log('Password is valid');
} else {
    console.log('Password is invalid');
}

// Function
function calculateVat(money, vat) {
    return money * vat / 100;
}

const totalVat = calculateVat(100, 7);
console.log(totalVat);
const totalVat33 = calculateVat(100, 33);
console.log(totalVat33);

// for Loop
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// รูปแบบเหมือนกันกับด้านบน ^^^
// for (let i = 0; i < 10; i++) {
//     if (i % 2 !== 0) {
//         continue;
//     }
//     console.log(i);
// }

// break
for (let i = 0; i < 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
}

// การใช้ DOM Manipulation
document.querySelector('input');
document.getElementById('email');
document.createElement('div');
document.appendChild(element);


// Events
const btnElem = document.querySelector('button');
btnElem.addEventListener('click', onClick);
function onClick(event) {
    console.log(event.targer);
}

What is javascript?
Variables
Data Types
Arithmetic Operators
Conditions
Functions
Flow Controls 
DOM Manipulation 
Events 

