// 1. Object là gì
// Object (đối tượng) là 1 khái niệm trựu tượng dùng để miêu tả
// hay biểu diễn một vật hay một đối tượng cụ thể

// ví dụ: con mèo: màu lông: trắng, tiếng kêu là meowmeow, chân: 4, đuôi: có, ...

// 2. cú pháp:
// <từ khóa khai báo biến>_<tên của đối tượng> = {key1: value1, key2: value2, ...}

// Ví dụ:

// let student = {
//   name: "Minh Phương", // key: name - value: "Minh Phương"
//   age: 20, // key: age - value: 20
//   address: "Hà Nội",  // key: address - value: "Hà Nội"
//   arr: [1, 2, 3, 4],
// };

// console.log(student);

// C/R/U/D - Create / Read / Update / Delete

// C - Create

// Cách 2: Thêm kiểu ES6 - Dynamic
let myEmail = "Email"; // Thêm dữ liệu động (dynamic)
let valueEmail = "minhphuong@gmail.com"; // Thêm dữ liệu động (dynamic)

let student = {
  name: "Minh Phương",
  age: 20,
  address: "Hà Nội",
  [myEmail]: valueEmail, // Cú pháp trong ES6
};

// Cách 1
// <tên đối tượng>.<key mới> = <giá trị>
student.phone = "035151212";

// R - Read
// Read one
// console.log(student.address);

// Read all
// EX01:
// + Dùng vòng lặp for để in ra tất cả value trong Object
// Cần phải lấy được danh sách các keys có trong object (student)
// let keys = Object.keys(student);
// for (let i = 0; i < keys.length; i++) {
//   let key = keys[i];
//   let value = student[key];
//   console.log(value);
// }
// + Tìm hiểu và sử dụng vòng lặp for-in

// for (const key in student) {
//   //   console.log(student);
//   //   console.log(key);
//   console.log(student[key]);
// }

// U - Update

// student.address = "Hồ Chí Minh";
// console.log(student);

// D - Delete

// delete student.age;
// console.log(student);

// EX2: Tạo đối tượng person bao gồm: tên, tuổi, địa chỉ, sđt => in tất cả thông tin
// input: object person: name, age, address, phone
// output: "Thông tin người dùng là:
// tên: ... - age: ... - địa chỉ: ... - sđt: ...
//"

// Chữa bài:
let person = {
  name: "Mạnh Hùng",
  age: 20,
  address: "HN",
  phone: "032342127",
};

console.log(`
Thông tin người dùng là:
- Tên: ${person.name}
- Tuổi: ${person.age}
- Địa chỉ: ${person.address}
- SĐT: ${person.phone}
`);

// // in dữ liệu theo kiểu table
// console.table(person);

// EX3: Tạo đối tượng product bao gồm: tên, giá tiền (12000), Danh mục (category)
// input: object product: name, price, category
// output: "Thông tin sản phẩm là:
// Tên sp: ... - giá sp: 12000 VNĐ - Danh mục: ...
//"
// Chữa bài:
let product = {
  nameProduct: "Áo sơ mi",
  price: 20000,
  category: "Áo",
};

// console.log("Tên sp", product.nameProduct);
// console.log("Giá sp", product.price);

console.log(`
Thông tin sản phẩm là:
- Tên sp: ${product.nameProduct}
- Giá sp: ${product.price} VNĐ
- Danh mục: ${product.category}
`);

// EX4: Tạo đối tượng employee bao gồm: tên, lương (12000), chức vụ
// input: object employee: name, salary, department
// output: "Thông tin nhân viên là:
// Tên NV: ... - Lương NV: 24000 VNĐ - Chức vụ: ...
//"
// Chữa bài:
let employee = {
  name: "Cường",
  salary: 2000,
  department: "DEV",
};

employee.salary *= 2;
// console.log("Tên sp", product.nameProduct);
// console.log("Giá sp", product.price);

console.log(`
Thông tin Nhân viên là:
- Tên NV: ${employee.name}
- Lương NV: ${employee.salary} VNĐ
- Chức vụ: ${employee.department}
`);

// EX5: Tạo đối tượng car bao gồm: brand, color, year
// input: object car: brand, color, year,
// output: "Thông tin xe hơi là:
// Hãng xe là: ..., màu xe: ..., năm sx: ..., Biển số xe: ...
// "

// Chữa bài:
let car = {
  brand: "Toyota",
  color: "black",
  year: "2023",
};

car.bienSo = "29A-123456";
// console.log("Tên sp", product.nameProduct);
// console.log("Giá sp", product.price);

console.log(`
  Thông tin xe là:
  - Hãng xe: ${car.brand}
  - Màu xe: ${car.color}
  - year: ${car.year}
  - Biển số xe: ${car.bienSo}
  `);
