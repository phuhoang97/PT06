// 1. Từ khóa khai báo biến: var, let, const
// 1.1. Tính chất
// Giống nhau: đều được sử dụng để làm từ khóa khai báo biến
// Khác nhau:
// - Từ khóa var:
//  + Tính chất:
//      + Có thể khai báo lại
//      + Có thể gắn lại được giá trị

// Ví dụ:
// Có thể khai báo lại
// var a = 10;
// var a = 20;
// console.log(a); // 20

//  Có thể gắn lại giá trị
// var a = 10;
// a = 40;
// console.log(a); // 40

// Từ khóa let
// - Tính chất:
//      + Không khai báo lại được giá trị nhưng có thể gắn lại giá trị
// Ví dụ:
// let a = 10;
// a = 30;
// console.log(a); // 30

// Từ khóa const
// - Tính chất:
//      + const là viết tắt của constant (Hằng số)
// => không khai báo lại được và không thể gắn lại giá trị

// const a = 10;
// a = 30;
// console.log(a);

// => Từ phiên bản ES06 từ khóa var được thay thế bởi từ khóa let và const

// 1.2. Phạm vị (scope) của các từ khóa
// Các phạm vi trong JS:
// + Global scope (Toàn cục)
// + Block scope ( { } )
// + Local scope ( function )

// => Global > Block, Local

// Ví dụ:

// debugger;
// Phạm vị Global
// let a = 10;
// console.log(a);

// Phạm vi Block
// {
//   let b = 20;
// }
// console.log(b); // b is not defined

// 1.3. Hoisting:
// => Chỉ xảy ra khi sử dụng với từ khóa var

// debugger;
// console.log(a);
// var a = 10; // undefined
// let a = 10; // Báo lỗi: Cannot access 'a' before initialization

// 2. Các kiểu dữ liệu trong JS
// 2.1. Kiểu dữ liệu nguyên thủy
// + Number, String, Boolean, Null, Undefined, NaN, Symbol
// 2.2 Kiểu dữ liệu tham chiếu
// + Array, Object

// 3. Toán tử trong JS
// +; -; *; /; %; !; ==; ===; !=; !==; >=; <=; <; >

// So sánh == và ===
// ==: chỉ so sánh giá trị
// ===: so sánh cả giá trị cả kiểu dữ liệu

// Tiền tố và hậu tố
// ++a (tiền tố): Khi sử dụng ++a sẽ xảy ra 2 việc
// Bước 1: Tăng giá trị của a lên 1 đơn vị
// Bước 2: Hiển thị a

// a++ (Hậu tố): Khi sử dụng a++ sẽ xảy ra 3 việc
// Bước 1: Tạo ra biến a copy
// Bước 2: Tăng giá trị của a lên 1 đơn vị
// Bước 3: Hiển thị a

// let a = 5;

// let b = ++a + a++ + a++;
// // 6 + 6 + 7
// console.log(b); // 19

