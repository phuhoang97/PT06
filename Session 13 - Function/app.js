// 1. Function (Hàm)
// => Hàm dùng để thực hiện 1 khối mã code để làm 1 việc cụ thể

// 2. Các loại hàm: Hàm có sẵn và Hàm tự xây dựng
// Hàm có sẵn: push(), pop(), shift(), map(), find(), ...
// Hàm tự xây dựng

// 3. Cú pháp
// function <Tên hàm> () {
// statement
// }

// ví dụ:
// function sum() {
//     // statement
// }
// => Lưu ý: phạm vị biến trong function là localscope

// 4. Tính chất của function
// + Không thực thi khi định nghĩa
// + Sẽ thực thi khi được gọi
// + Có thể nhận tham số

// ví dụ

// Định nghĩa function
// 1. function sum(a, b) {
//   // a là tham số (parament)
//   console.log("Hello world");
//   console.log(a);
//   console.log(b);
// }

// sum("10", 20); // Gọi function || "10" => được gọi là đối số (argument)

// 2. Express function
// let sum = function () {
//   console.log(10);
// };
// sum();
// console.log(sum);

// 3. Arrow function (ES06)
// const sum = () => {
//   console.log(10);
// };
// sum();

// 4. IIFE
// (function sum(a, b) {
//   console.log(a);
//   console.log(b);
// })(10, 20);

// let sum = function () {
//   console.log(10);
// };

// function f() {
//   sum();
// }
// f();

// Kiểu dữ liệu tham chiếu
// let arr = [1, 2, 3]; // arr = a1b1
// let b = arr; // b = a1b1
// console.log(b); // 1, 2, 3

// 5. Closures
// function parentFunc() {
//   function chilFunc() {
//     console.log(20);
//   }
//   chilFunc();
// }

// parentFunc();

// Từ khóa return trong function => trả về giá trị gì đấy và dừng chương trình

// function f(a) {
//   console.log(1);
//   return console.log(a);

//   console.log(2);
//   console.log(3);
// }

// f(1202);

// Bài tập 1: Viết 1 hàm tính tổng cho người dùng
// function sum(a, b) {
//   return console.log(a + b);
// }

// sum(10, 20);
// sum(30, 30);

// Bài tập 2: Tạo và gọi hàm
// function message(e) {
//   let result = "";
//   if (e) {
//     result = "Có giá trị";
//   } else {
//     result = "Không có gì";
//   }

//   return console.log(result);
// }

// message();

// function processConfirm(answer) {
//   let result = "";
//   console.log(answer);
//   if (answer) {
//     result = "Excellent. We'll play a nice game of chess.";
//   } else {
//     result = "Maybe later then.";
//   }
//   return result;
// }

// let confirmAnswer = confirm("Shall we play a game?"); // ok
// let theAnswer = processConfirm(confirmAnswer); // true
// alert(theAnswer);

// let arr1 = [];

// function minValue(arr) {
//   if (arr.length === 0) {
//     return "mảng rỗng";
//   }

//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min;
// }

// console.log(minValue(arr1));

// let number = 12;
// function isPrime(n) {
//   if (n === 1) {
//     return false;
//   } else if (n === 2) {
//     return true;
//   } else {
//     for (let i = 3; i < n; i++) {
//       if (n % i === 0) {
//         return false;
//       }

//       return true;
//     }
//   }
// }

// console.log(isPrime(number));

// function countOccurrences(inputArray) {
//   const counts = {};
//   for (const element of inputArray) {
//     counts[element] = (counts[element] || 0) + 1;
//   }
//   for (const key in counts) {
//     console.log(`${key}: ${counts[key]}`);
//   }
// }

// const inputArray = [1, 1, 2, 2, 2, 3, 3, 3, 3, 4];
// countOccurrences(inputArray);

// function maxSubarraySum(arr) {
//   let maxSum = arr[0];
//   let currentSum = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     currentSum = Math.max(arr[i], currentSum + arr[i]);
//     maxSum = Math.max(maxSum, currentSum);
//   }

//   return maxSum;
// }

// const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(maxSubarraySum(array)); // Output: 6 (from [4, -1, 2, 1])

// let arr = [1, 1, 2, 2, 2, 3, 3, 3, 4, 4];

// let newArr = arr.reduce((initial, element) => {
//   initial[element] = (initial[element] || 0) + 1;
//   return initial;
// }, {});

// console.log(newArr);
