// Bài 1: Viết một chương trình JavaScript đơn giản để nối tất cả các phần tử của mảng
// sau thành một chuỗi.
// myColor = ["Red", "Green", "White", "Black"];
// Đầu ra mong đợi:
// "Red, Green, White, Black"
// "Red + Green + White + Black"
// => join()

// Chữa bài:
// Cách 1:
// let myColor = ["Red", "Green", "White", "Black"];
// let result1 = myColor.join(", ");
// let result2 = myColor.join(" + ");
// console.log(result1);
// console.log(result2);

// Cách 2: BTVN (Sử dụng vòng lặp for)

// Bài 2: Viết chương trình JavaScript chấp nhận một số làm đầu vào và chèn dấu gạch
// ngang (-) vào giữa hai số chẵn. Ví dụ: nếu bạn chấp nhận 025468, đầu ra phải là
// 0-254-6-8.

// input: prompt() => 025468
// output: 0-254-6-8

// Chữa bài:
// Cách 1:
// let number = prompt("Nhập số:"); // 025468
// let result = [number[0]];

// for (let i = 1; i < number.length; i++) {
//   if (number[i - 1] % 2 === 0 && number[i] % 2 === 0) {
//     result.push("-", number[i]);
//   } else {
//     result.push(number[i]);
//   }
// }

// console.log(result.join(""));

// Cách 2:
// let number = prompt("Nhập số:").split(""); // 025468

// for (let i = 0; i < number.length; i++) {
//   if (
//     number[i] % 2 === 0 &&
//     number[i + 1] % 2 === 0 &&
//     i !== number.length - 1
//   ) {
//     number[i] += "-";
//   }
// }

// console.log(number.join(""));

// Bài 3: Viết một chương trình JavaScript chấp nhận một chuỗi làm đầu vào và hoán
// đổi trường hợp của mỗi ký tự. Ví dụ: nếu bạn nhập 'The Quick Brown Fox', đầu ra phải
// là 'tHE qUICK bROWN fOX'.

// => uppercase (In hoa lên) / lowercase (in thường)

// Chữa bài
// let user = prompt("Nhập đoạn text: ");
// let result = "";

// for (let i = 0; i < user.length; i++) {
//   let arr = user[i];
//   if (arr == arr.toLowerCase()) {
//     result += arr.toUpperCase();
//   } else {
//     result += arr.toLowerCase();
//   }
// }

// // tHE qUICK bROWN fOX
// console.log(result); // The Quick Brown Fox

// Bài 4: Viết kịch bản yêu cầu người dùng nhập một dãy số, Các số được phân tách
// bằng dấu phẩy, tính tổng các số và hiển thị cho người dùng

// Chữa bài:
// let number = prompt("Nhập vào dãy số ngăn cách bằng dấu ',' ").split(",");
// let result = 0;

// for (let i = 0; i < number.length; i++) {
//   result += Number(number[i]);
// }

// // Lưu ý: trong js ( + ) => phép nối chuỗi => "1" + "2" => 12
// alert(`Tổng của dãy số là: ${result}`);

// Bài tập về nhà: Bài 5, Bài 6, Bài 7, Bài 1 (Sử dụng for thường)

const numbers = [1, 2, 3, 4, 5];
const firstEvenNumber = numbers.find((num) => num % 2 === 0);
console.log(firstEvenNumber); // Output: 2


