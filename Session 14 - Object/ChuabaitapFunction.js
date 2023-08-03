// Bài 1: Viết hàm cho người dùng nhập 2 số. Tính tổng 2 số đó
// Chữa bài:
// function sum() {
//   let num1 = +prompt("Nhập số thứ nhất: ");
//   let num2 = Number(prompt("Nhập số thứ hai: "));
//   let result = num1 + num2;
//   return result;
// }

// console.log("Tổng 2 số là: ", sum());

// Bài 2: Viết một hàm nhận một chuỗi làm đối số và trả về độ dài của chuỗi.
// Chữa bài:
// function lengthText(text) {
//   return text.length;
// }
// let inputText = prompt("Nhập đoạn text:");
// console.log("Độ dài của đoạn text là:", lengthText(inputText));

// Bài 3: Viết một hàm nhận một mảng các chuỗi làm đối số và trả về mảng mới chứa các chuỗi viết hoa.
// Chữa bài:
// let arrText = ["html", "css", "js"];

// function upperText(text) {
//   let newArr = [];
//   for (let i = 0; i < text.length; i++) {
//     newArr.push(text[i].toUpperCase());
//   }
//   return newArr;
// }

// console.log("Chuỗi sau khi viết hoa", upperText(arrText));

// Bài 4: Viết một hàm nhận một chuỗi làm đối số và trả về chuỗi mới với các từ đảo ngược thứ tự.
// Chữa bài:

// let text = "Chúc các bạn học tập tốt";

// function reverseText(element) {
//   let convertArr = element.split(" "); // ép kiểu dữ liệu từ string => array
//   let reverseTextCurr = convertArr.reverse(); // sử dụng hàm reverse để đảo ngược thức tự
//   let newText = reverseTextCurr.join(" "); // sử dụng hàm join để array => string
//   return newText; // trả về kết quả
// }

// console.log("Chuỗi được đảo ngược là:", reverseText(text));

// Bài 5: Viết một hàm nhận một mảng các số làm đối số và trả về mảng mới chứa các số đã sắp xếp theo thứ tự tăng dần.
// Chữa bài:
// let arrNumber = [3, 1, 4, 1, 5, 9, 2, 6, 5];

// function sortNumber(number) {
//   let arrNumberSort = number.sort((a, b) => a - b);
//   return arrNumberSort;
// }

// console.log("Mảng sau khi sắp xếp", sortNumber(arrNumber));

// Bài 6: Viết một hàm nhận một mảng các số làm đối số và trả về mảng mới chỉ chứa các số nguyên tố.
