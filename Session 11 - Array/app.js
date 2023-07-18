// Tìm hiểu về Array - Mảng
// => Dùng để chứa nhiều đối tượng trong 1 biến

// let course1 = "PHP";
// let course2 = "ReactJS";
// let course3 = "Javascript";

// 1. cú pháp khai báo mảng
// 1.1. Cú pháp new Array

// (Từ khóa khai báo biến (var/let/const)) (Tên mảng) = new Array / []

// let course = new Array("PHP", "ReactJS", "JS");

// 1.2. Cú pháp []

// let course = ["PHP", "ReactJS", "JS"];
// console.log(course);

// Lưu ý:
// - Lưu ý 1: trong mảng có thể chứa bất kỳ kiểu dữ liệu

// 1. Kiểu dữ liệu nguyên thủy: string, number, boolean, null, undefined, NaN, symbol
// 2. Kiểu dữ liệu tham chiếu: Array, object

// let array = ["Hello", 20, true, null, undefined, NaN, ["JS"], {}];
// console.log(array);

// - Lưu ý 2:
// ví dụ:
// let a = 10; // Number
// let b = 10; // Number
// console.log(a === b); // true

// let d = [10]; // array
// let e = [10]; // array
// console.log(d === e); // false

// => Để so sánh được array với nhau thì cần so sánh giá trị trong array

// console.log(d[0] === e[0]); // true

// 2. Các thành phần trong array: value, Length, index

// let arrNumber = [10, 20, 30, 40]; // Chỉ mục là (4)
//     // index     0    1   2   3  (length - 1)
//     // length là chiều dài của mảng - 4
// console.log(arrNumber);

// 3. Các hàm làm việc với array (mảng)
// CRUD -> C - Create (Thêm mới) / R - Read (Đọc) / U - Update (Cập nhật) / D - Delete (Xóa)

// R - Read one (Đọc 1)
// let arrNumber = [10, 20, 30, 40];
// console.log(arrNumber);
// // (Tên mảng)([chỉ số index của phần tử])
// console.log(arrNumber[1]); // 20
// console.log(arrNumber[3]); // 20

// R - Read all (Đọc tất cả)
// let arrNumber = [10, 20, 30, 40];
// // Sử dụng vòng lặp để đọc các giá trị trong mảng
// for (let i = 0; i < arrNumber.length; i++) {
//   console.log(arrNumber[i]);
// }

// C - Create (thêm dữ liệu)
// Thêm vào đầu mảng - unshift()
// let arrNumber = [10, 20, 30, 40];
// console.log(arrNumber); // 10, 20, 30, 40
// arrNumber.unshift(60);
// console.log(arrNumber); // 60, 10, 20, 30, 40

// Thêm vào cuối mảng - push()
// let arrNumber = [10, 20, 30, 40];
// console.log(arrNumber); // 10, 20, 30, 40
// arrNumber.push(50);
// console.log(arrNumber); // 10, 20, 30, 40, 50

// U - Update
// Update - one (cập nhật một phần tử)
// let arrNumber = [10, 20, 30, 40];
// console.log(arrNumber); // 10, 20, 30, 40
// arrNumber[1] = 60;
// console.log(arrNumber); // 10, 60, 30, 40

// Update - all (cập nhật tất cả các phần tử)
// let arrNumber = [10, 20, 30, 40];
// console.log(arrNumber); // 10, 20, 30, 40
// console.log(arrNumber.length); // 4
// for (let i = 0; i < arrNumber.length; i++) {
//   arrNumber[i] += 10;
//   // arrNumber[i] = arrNumber[i] + 10
// }
// console.log(arrNumber); // 20, 30, 40, 50

// D - Delete
// Xóa phần tử đầu tiên của mảng - shift()
// let arrNumber = [10, 20, 30, 40];
// console.log(arrNumber); // 10, 20, 30, 40
// arrNumber.shift();
// console.log(arrNumber); // 20, 30, 40

// Xóa phần tử cuối mảng - pop()
// let arrNumber = [10, 20, 30, 40];
// console.log(arrNumber); // 10, 20, 30, 40
// arrNumber.pop();
// console.log(arrNumber); // 10, 20, 30

// Xóa hoặc thêm phần tử tại vị trí index biết trước - splice()
// splice(index, amount, newValue1, newValue2, ...)
//  + index: ví trí index của phần tử trong mảng
//  + amount: số lượng phần tử muốn xóa
//  + newValue: giá trị muốn thêm
// let arrNumber = [10, 20, 30, 40];
// console.log(arrNumber); // 10, 20, 30, 40
// // Xóa
// arrNumber.splice(1, 2);
// console.log(arrNumber); // 10, 40
// Thêm
// arrNumber.splice(1, 0, 60);
// console.log(arrNumber); // 10, 60, 20, 30, 40

// CRUD trong mảng (Array)
// let arrNumber = [10, 20, 30, 40];
// + C - Create
// Thêm dữ liệu vào đầu mảng: arrNumber.unshift(value)
// Thêm dữ liệu vào cuối mảng: arrNumber.push(value)
// Thêm phần tử tại vị trí index biết trước trong mảng: arrNumber.splice(index, 0, value)
// + R - Read
// Đọc 1 phần tử: arrNumber[index]
// Đọc all phần tử: vòng lặp => arrNumber[i]
// + U - Update
// Cập nhật một phần tử: arrNumber[index] = value
// Cập nhật all phần tử: vòng lặp => arrNumber[i] += value
// D - Delete
// Xóa phần tử đầu trong mảng: arrNumber.shift()
// Xóa phần tử cuối trong mảng: arrNumber.pop()
// Xóa phần tử tại vị trí index biết trước trong mảng: arrNumber.splice(index, deleteCount)

// 3. Các hàm có sẵn xử lý mảng trong ES06

// 3.1. concat - nối mảng
// let arr1 = [10, 20];
// let arr2 = [30, 40];
// let arr3 = [50, 60];
// let childenArray = arr1.concat(arr2);
// console.log(childenArray);

// 3.2. includes - kiểm tra giá trị trong mảng có tồn tại hay không
// let numbers = [10, 20, 30, 40];
// let searchNumber = numbers.includes(30);
// console.log(searchNumber);

// 3.3. indexOf - Tìm kiếm vị trí index của phần tử
// Nếu tồn tại sẽ trả vị trí index của ptu đó
// Nếu không tồn tại sẽ trả gtri -1
// let numbers = [10, 20, 30, 40];
// let indexNumber = numbers.indexOf(60);
// console.log(indexNumber);

// 3.4. join() - Chuyển mảng thành chuỗi (string)
// let numbers = [10, 20, 30, 40];
// console.log(numbers);
// let joinArray = numbers.join(" ");
// console.log(joinArray);

// 3.5. reverse() - Đảo thứ tự của mảng
// let numbers = [10, 20, 30, 40];
// console.log(numbers);
// let reverseArray = numbers.reverse();
// console.log(reverseArray);

// 3.6. sort() - Sắp xếp lại giá trị trong mảng theo aphabet
// let numbers = [30, 220, 10, 40];
// console.log(numbers);
// let sortArr = numbers.sort();
// console.log(sortArr);

// map, find, filter, findIndex, includes, forEach

// 4. Mảng đa chiều
// let arrNumbers = [
//   [10, 20, 30],
//   [40, 50, 60],
// ];

// console.log(arrNumbers[0][2]);
