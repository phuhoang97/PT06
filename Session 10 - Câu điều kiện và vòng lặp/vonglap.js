// 2. Vòng lặp
// => Vòng lặp được sinh ra để giúp thực hiện các logic code nhiều lần
// 2.1. Vòng lặp for
// => Thường được sử dụng để lặp với số lần lặp biết trước
// Cú pháp:
// for(Giá trị ban đầu; Điều kiện; Bước nhảy) {
//     // Logic code
// }

// ví dụ
// for (let i = 0; i < 5; i++) {
//   console.log(i); // 0 => 4
// }

// 0 < 5: true => in ra i => 0
// 1 < 5: true => in ra i => 1
// 2 < 5: true => in ra i => 2
// 3 < 5: true => in ra i => 3
// 4 < 5: true => in ra i => 4
// 5 < 5: false => không in ra giá trị và dừng lặp

// 2.2. Vòng lặp while
// => Thường được sử dụng để lặp với số lần lặp không xác định
// Cú pháp:
// while(điều kiện) {
//     // Logic code
// }

// debugger;

// let n = 0;
// while (n < 3) {
//   // 0 < 3 || 1 < 3 || 2 < 3 || 3 < 3
//   n++; // 0 + 1 || 1 + 1 || 2 + 1 ||
//   console.log(n); // 0 || 1 || 2
// }

// console.log(n);
// Expected output: 3

// 2.3. do while
// => biểu thức trong do sẽ được thực thi ít nhất 1 lần
// Cú pháp:
// do {
//     // Logic code
// }
// while(Điều kiện)

// Ví dụ:
// let n = 3;
// do {
//   n++;
//   console.log(n);
//   break;
// } while (n < 4); // 3 < 2

// 3. Từ khóa break và continue
// 3.1. Từ khóa break => Dừng lại vòng lặp gần nhất

// for (let i = 0; i < 5; i++) { // Chạy từ 0 => 4
//   if (i === 3) {
//     break;
//   }
//   console.log(i);
// }

// 3.2. Từ khóa continue
// => dừng vòng lặp tại đó và nhảy sang vòng lặp tiếp theo

// for (let i = 0; i < 10; i++) {
//   if (i % 2 == 0) {
//     continue;
//   }
//   console.log(i); // 1 3 5 7 9
// }

// 4. Tổng kết
// + câu điều kiện: if else, switch case
// + vòng lặp: for, while, do while
// + Từ khóa break, continue
