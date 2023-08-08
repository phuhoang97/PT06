// 1. Web storage là gì?
// là tính năng mới trong HTML5, được dùng để lưu trữ dữ liệu bên phía client (người dùng)
// dưới local

// Web storage cung cấp 3 kiểu lưu trữ:
// + localStorage
// + sessionStorage
// + cookie

// 2. LocalStorage
// Trong localStorage cho phép người dùng lưu trữ dữ liệu từ 5MB -> 10MB
// Và không giới hạn thời gian lưu trữ

// Các phương thức trong LocalStorage
// + setItem(key, value) => sử dụng để set giá trị vào trong localStorage
// + getItem(key) => sử dụng để lấy giá trị trong localStorage
// + removeItem(key) => sử dụng để xóa item trong localStorage
// + clear => sử dụng để xóa tất cả dữ liệu trong localStorage

// Ví dụ:
// setItem(key, value) => để lưu được dữ liệu array, object => JSON.stringtify
localStorage.setItem("username", "Huy");

// Lưu theo kiểu object
const people = { name: "Phương", age: 20 };
localStorage.setItem("people", JSON.stringify(people));

// Lưu theo kiểu array
// const listStudent = [
//   { id: 1, nameStudent: "Nguyễn Hiệp", age: 30 },
//   { id: 2, nameStudent: "Lê Thành", age: 26 },
//   { id: 3, nameStudent: "Vũ Hồng", age: 25 },
// ];

// localStorage.setItem("listStudent", JSON.stringify(listStudent));

// getItem(key) => Lấy dữ liệu trong localStorage => JSON.parse

// let user = localStorage.getItem("username");
// console.log(user);

let students = JSON.parse(localStorage.getItem("listStudent"));
console.log(students);

// removeItem(key): để xóa item trong localStorage
// localStorage.removeItem("people");

// clear: Xóa tất cả dữ liệu trong localStorage
// localStorage.clear();

// 3. sessionStorage
// Trong sessionStorage cho phép người dùng lưu trữ dữ liệu từ 5MB -> 10MB
// Dữ liệu được lưu trữ trong sessionStorage sẽ bị mất đi khi người dùng tắt hoặc đóng trình duyệt

// Các phương thức trong sessionStorage
// + setItem(key, value) => sử dụng để set giá trị vào trong sessionStorage
// + getItem(key) => sử dụng để lấy giá trị trong sessionStorage
// + removeItem(key) => sử dụng để xóa item trong sessionStorage
// + clear => sử dụng để xóa tất cả dữ liệu trong sessionStorage

// Ví dụ:
// setItem trong sessionStorage
localStorage.setItem("address", "Hà Nội");
sessionStorage.setItem("address", "Hồ Chí Minh");

// const listStudent = [
//   { id: 1, nameStudent: "Nguyễn Hiệp", age: 30 },
//   { id: 2, nameStudent: "Lê Thành", age: 26 },
//   { id: 3, nameStudent: "Vũ Hồng", age: 25 },
// ];

// sessionStorage.setItem("listStudent", JSON.stringify(listStudent));

// getItem trong sessionStorage
// let studentList = JSON.parse(sessionStorage.getItem("listStudent"));
// console.log(studentList);

// removeItem trong sessionStorage
// sessionStorage.removeItem("listStudent");

// clear trong sessionStorage
// sessionStorage.clear();

// Cookie
// document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
