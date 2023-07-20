// Bài tập 1: Tính tổng các phần tử trong mảng
// + Cho mảng ban đầu. Tính tổng các phẩn tử trong mảng. Ví dụ:
// Input: [1,2,3]
// Ouput: 6
// Chữa bài:
// let arr = [1, 2, 3];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// // console.log("Tổng của mảng là:", sum);
// // Để hiển thị kiểu dữ liệu string: "" / '' / `` (template string trong ES06)
// console.log(`Tổng của mảng là ${sum}`);

// Bài tập 2: Tìm phần tử lớn nhất trong mảng
// + Cho mảng ban đầu. Tìm phần tử lớn nhất. ví dụ:
// Input: [4,5,8,9,1]
// Output: 3
// Chữa bài:
// Hàm split("") và cách ép kiểu dữ liệu trong js
// let arr = [4, 5, 8, 9, 1];
// Kiểu dữ liệu prompt trả về là kiểu string => sử dụng split để ép kiểu dữ liệu từ string => array

// let arr = prompt("Nhập các giá trị cách nhau bằng dấu ', ' ").split(",");
// let max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }

// console.log("giá trị lớn nhất là:", max);

// Bài tập 3: Tìm phần tử nhỏ nhất trong mảng
// + Cho mảng ban đầu. Tìm phần tử nhỏ nhất. ví dụ:
// Input: [10,8,2,6]
// Output: 2
// Chữa bài:
// let arr = [10, 8, 2, 6];
// let min = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (min > arr[i]) {
//     min = arr[i];
//   }
// }

// console.log("giá trị nhỏ nhất là:", min);

// Bài tập 4: Kiểm tra xem phần tử có tồn tại trong mảng hay không
// Cho mảng ban đầu, làm theo 2 cách:
// + Cách 1: Không sử dụng hàm có sẵn
// + Cách 2: Sử dụng hàm có sẵn
// Input: [1, 2, 3, 4, 5];
// Output: true/false
// Chữa bài:
// let arr = [1, 2, 3, 4, 5];
// let check = false; // Kỹ thuật đặt cờ (flag)
// let value = Number(prompt("Nhập số bất kỳ: "));

// for (let i = 0; i < arr.length; i++) {
//   if (value === arr[i]) {
//     check = true;
//     break;
//   }
// }

// console.log(`Is value ${check}`);

// Bài tập 5: Đảo ngược giá trị trong mảng
// Input: [1, 2, 3, 4, 5]
// Ouput: [5, 4, 3, 2, 1]
// Chữa bài:
// let arr = [1, 2, 3, 4, 5];
// let reverseArr = [];

// Cách 1:
// for (let i = 0; i < arr.length; i++) {
//   reverseArr[i] = arr[arr.length - 1 - i];
// }

// Cách 2:
// for (let i = arr.length - 1; i >= 0; i--) {
//   reverseArr.push(arr[i]);
// }

// console.log(reverseArr);

// Bài tập 6: Lọc các phần tử chẵn trong mảng:
// Input: [1, 2, 3, 4, 5]
// Ouput: [2, 4]
// Chữa bài

// let arr = [1, 2, 3, 4, 5];
// let arrNumber = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     arrNumber.push(arr[i]);
//   }
// }

// console.log(arrNumber);

// Bài tập 7: Tìm số lần xuất hiện của một phần tử trong mảng
// + Cho mảng ban đầu và cho người dùng nhập 1 giá trị bất kỳ.
// Nếu có giá trị trong mảng thì sẽ báo số lần phần tử xuất hiện trong mảng
// Input: [1, 2, 3, 2, 4, 2, 5] => người dùng nhập 2
// Output: 3
// Chữa bài
// let arr = [1, 2, 3, 2, 4, 2, 5];
// let user = Number(prompt("Nhập 1 số bất kỳ: "));
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (user === arr[i]) {
//     count++;
//   }
// }

// console.log(`Số user nhập ${user} xuất hiện: ${count}`);

// Bài tập 8: Sắp xếp lại mảng theo giá trị tăng dần
// Input: [4, 2, 9, 5, 1]
// Output: [1, 2, 4, 5, 9]
// Chữa bài:
// let arr = [4, 2, 9, 5, 1];

// for (let i = 0; i < arr.length - 1; i++) {
//   // i = 0 => 4; i = 1 => 4; i = 2 => 9; i = 3 => 9
//   for (let j = i + 1; j < arr.length; j++) {
//     // j = 1 => 2; j = 2 => 9; j = 3 => 5; i = 4 => 1
//     if (arr[i] > arr[j]) {
//       // 4 > 2 || 4 > 9 || 9 > 5 || 9 > 1
//       let temp = arr[i]; // temp = 4 || 9 || 9
//       arr[i] = arr[j]; // 2 || 5 || 1
//       arr[j] = temp; // 4 || 9 || 9
//     }
//   }
// }


// console.log(arr); // 1 2 4 5 9
