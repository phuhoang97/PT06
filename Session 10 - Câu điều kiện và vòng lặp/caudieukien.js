// Câu điều kiện

// 1. Câu điều kiện: if else
// cú pháp:
// if (điều kiện) {
// Logic code
// } else {
// Logic code
// }

// Start => Điều kiện ----(true)----> Logic code trong if sẽ được thực hiện
// 		              ----(fasle)---> Logic code trong else sẽ được thực hiện

// Ví dụ:
// let a = 8;
// if (a > 10) {
//   console.log("a lớn hơn 10");
// } else {
//   console.log("a nhỏ hơn 10");
// }

// 1.1: các trường hợp sử dụng với câu điều kiện if else
// 1.1.1: Trường hợp sử dụng với if
// if (2 > 5) {
//   console.log("True");
// }

// 1.1.2: Trường hợp sử dụng với if else
// let a = 8;
// if (a > 10) {
//   console.log("a lớn hơn 10");
// } else {
//   console.log("a nhỏ hơn 10");
// }

// 1.1.3: Trường hợp sử dụng với if else if và else
// let b = 20;
// if (b > 30) {
//   // 20 > 30 => false
//   console.log("Logic ở phần if"); // Logic này sẽ được bỏ qua
// } else if (b == 20) {
//   // 20 = 20 => true
//   console.log("Logic ở phần else if"); // Logic này được in ra
// } else {
//   console.log("Logic ở phần else"); // Sẽ không chạy xuống else
// }

// Bài tập: Cho người dùng nhập vào text
// => Kiểm tra text đấy có phải là admin hay không
// Nếu nhập admin => thông báo đây là admin
// Nếu nhập user => thông báo đây là user
// => thông báo => I don't know

// // Bước 1: Sử dụng prompt để người dùng nhập giá trị
// let inputUser = prompt("Nhập text: ");
// // Bước 2: Sử dụng giá trị đấy để đi so sánh => Câu điều kiện
// if (inputUser == "admin") {
//   console.log("Đây là admin");
// } else if (inputUser == "user") {
//   if (inputUser == "user") {
//     console.log("true");
//   } else {
//     console.log("false ");
//   }
// } else {
//   console.log("I don't know");
// }

// 2. câu điều kiện switch case
// cú pháp:
// switch (biểu thức) { // x
//     case value1: // if(x === value1)
//         break; // Dừng lại
//     case value2: // if(x === value2)
//         break; // Dừng lại
//     default: // else
//         break; // Dừng lại
// }

// Ví dụ:

// // let a = +prompt("Nhập giá trị");
// // Sẽ trả về kiểu dữ liệu là string
// console.log(a); // "123132adad" => NaN (Not a number)
// console.log(typeof a); // Kiểm tra kiểu dữ liệu => typeof NaN => number
// // "123123" Ép kiểu dữ liệu từ string về number(+, Number, parseInt)

// switch (a) {
//   case "12":
//     console.log("Case 1");
//     break;
//   case 12:
//     console.log("Case 2");
//     break;
//   default:
//     console.log("Default");
//     break;
// }

// Học JS => ReactJS => Typescript => NodeJS => NextJS => NestJS
// Học Java => Học JS => Học Java



