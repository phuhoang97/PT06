// 1. DOM - Document Object Model
// console.log(document);
// là 1 object bao bọc lấy HTML

// 2. HTML Selector
// Id, Class, Tagname

// // Id:
// let idDiv = document.getElementById("app");
// console.log(idDiv);

// // Class => trả HTMLCollection (là mảng chứa tất cả các thẻ có tên giống nhau)
// let classDiv = document.getElementsByClassName("div-1");
// console.log(classDiv);
// console.log(classDiv[0]);
// console.log(classDiv[1]);

// // Tagname => trả HTMLCollection
// let divList = document.getElementsByTagName("div");
// console.log(divList);
// console.log(divList[0]);

// // querySelector và querySelectorAll => giúp lấy các thẻ trong html ra
// // (id - "#id", class - ".classname", tagname - "tagname")

// // querySelector
// let element = document.querySelector(".greeting");
// console.log(element);

// // querySelectorAll
// let elements = document.querySelectorAll(".myClass");
// console.log(elements);
// console.log(elements[0]);
// console.log(elements[1]);

// 3. Thuộc tính (Properties)
// 3.1. Text & Content
// let app = document.getElementById("app");
// console.log(app);
// console.log(app.innerHTML); // Lấy toàn bộ nội dung là html có trong thẻ
// console.log(app.innerText); // Chỉ lấy nội dung là chữ có trong thẻ
// console.log(app.textContent); // Chỉ lấy nội dung là chữ có trong thẻ

// So sánh innerText và textContent
// - Giống nhau: Chỉ lấy nội dung là chữ có trong thẻ
// - Khác nhau:
// + innerText: Là thuộc tính không chuẩn và chỉ được hỗ trợ bởi 1 số trình duyệt nhất định
// + innerText: sẽ trả về nội dung giống văn bản có trên trình duyệt, bị ảnh hưởng bởi css
// + innerText: Tự động loại bỏ các thẻ HTML và chỉ lấy văn bản
// + Mất thời gian nhiều hơn để đọc css

// + textContent: là thuộc tính chuẩn và được hỗ trợ bởi nhiều trình duyệt
// + textContent: sẽ trả về nội dung văn bản nhưng không bị ảnh hưởng bởi css
// + Mất ít thời gian hơn vì không đọc css

// Thêm hoặc thay đổi nội dung
// app.innerHTML = "<i>Heyyyyy</i>";
// app.innerText = "<i>Heyyyyy</i>";
// app.textContent = "<i>Heyyyyy</i>";
// => Để thay đổi nội dung có trong thẻ => innerHTML

// Style
// let app = document.getElementById("app");
// // Lưu ý: khi sử dụng style trong js => viết theo kiểu camleCase
// // background-color (CSS) => backgroundColor (JS)
// // app.style.backgroundColor = "pink";
// app.style.color = "#eb4034";
// app.style.backgroundImage = `url('https://cdnimg.vietnamplus.vn/uploaded/bokttj/2023_01_02/avatar_the_way_of_water.jpg')`;

// console.log(app.style);

// // 4. Children, ParentElement
// let ulList = document.getElementById("list");
// console.log(ulList.children);
// // Để truy cập vào các phần tử con có trong thẻ cha (ul)
// console.log(ulList.children[0]);
// console.log(ulList.children[1]);
// console.log(ulList.children[2]);

// // Để truy cập từ phần tử con lên phần tử cha
// console.log(ulList.children[2].parentElement);

// Classlist, id
// id: lấy ra thuộc tính id có trong thẻ
// console.log(ulList.id);

// Classlist
// console.log(ulList.classList);
// console.log(ulList.classList[0]);
// console.log(ulList.classList[1]);
// console.log(ulList.classList[2]);

// Thêm và xóa class
// Thêm class cho thẻ
// ulList.classList.add("cl4");

// Xóa class cho thẻ
// ulList.classList.remove("cl1");

// console.log(ulList.classList);

// Methods: remove() || appendChild || createElement
// remove()
// let li = ulList.children[2];
// console.log(li);
// li.remove(); // Xóa phần tử số 3

// appendChild

// let liChild = document.createElement("li");
// liChild.innerHTML = "Xin chào mọi người";

// ulList.appendChild(liChild);

// Bài tập 1:
// Tạo một HTML gồm một nút. Sử dụng JavaScript để thay đổi màu nền của trang web khi người dùng nhấn vào nút.
// Chữa bài:
// function changeBackgroundColor() {
//   document.body.style.backgroundColor = getRandomColorRGB();
// }

// function getRandomColorRGB() {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   return `rgb(${r}, ${g}, ${b})`;
// }

// Bài tập 2:
// Tạo một HTML với một đoạn văn bản và một nút. Sử dụng JavaScript để thay đổi
// nội dung của đoạn văn bản thành "Chào bạn!" khi người dùng nhấn nút.

// function changeText() {
//   document.getElementById("content").innerText = "Chào bạn!";
// }

// let isChanged = false;

// function changeText() {
//   const contentElement = document.getElementById("content");
//   if (isChanged) {
//     contentElement.innerText = "Đoạn văn bản ban đầu.";
//   } else {
//     contentElement.innerText = "Chào bạn!";
//   }
//   isChanged = !isChanged;
// }

// Bài tập 3:
// Tạo một HTML với một đoạn văn bản và hai nút "Phóng to" và "Thu nhỏ".
// Sử dụng JavaScript để thay đổi kích thước của đoạn văn bản khi người dùng nhấn vào các nút này.

// let currentFontSize = 16;

// function zoomIn() {
//   currentFontSize += 2;
//   document.getElementById("content").style.fontSize = currentFontSize + "px";
// }

// function zoomOut() {
//   currentFontSize -= 2;
//   document.getElementById("content").style.fontSize = currentFontSize + "px";
// }

// Bài tập 4:
// Tạo một HTML với một danh sách các mục. Sử dụng JavaScript để thêm một lớp CSS cho mỗi mục
// trong danh sách khi người dùng di chuột qua mục đó.
// function highlightItem(item) {
//   item.classList.add("highlighted");
// }

// function unhighlightItem(item) {
//   item.classList.remove("highlighted");
// }

// Bài tập 5:
// Tạo một HTML với một ô input và một nút. Sử dụng JavaScript để hiển thị
// thông báo "Bạn đã nhập: [giá trị nhập vào]" khi người dùng nhập dữ liệu và nhấn nút.
// function showMessage() {
//   const userInput = document.getElementById("userInput").value;
//   alert("Bạn đã nhập: " + userInput);
// }

// B1: Lấy được nội dung ở trong ô input
// Viết sự kiện onclick cho btn:

const form = document.getElementById("main-form");
const todoList = document.getElementById("todo-list");

form.onsubmit = function (event) {
  event.preventDefault();
  //   console.log("Hello");
  // B1: Lấy được nội dung trong ô input
  //   console.log(todoInput.value);
  const inputValue = form.todoValue.value;
  //   console.log(inputValue);
  // B2: Tạo ra thẻ li có cấu trúc giống li con của thẻ ul
  const li = document.createElement("li");
  li.classList.add("list-item");
  // B3: Append nội dung của ô input cho thẻ li vừa được tạo
  li.innerText = inputValue;
  // B3-2: Thêm button ở mỗi ô input
  const button = document.createElement("button");
  //   console.log(button);
  button.classList.add("btn");
  button.classList.add("btn-danger");
  button.innerText = "Delete";
  // B3-3:append nút vào thẻ li
  li.appendChild(button);
  // B4: Gọi thẻ ul ra, append li làm con của thẻ ul đó
  todoList.appendChild(li);
  //   button.onclick = function () {
  //     li.remove();
  //   };
};

todoList.onclick = function (e) {
  //   console.log(e.target); // ủy quyền sự kiện onlick

  if (e.target.classList.contains("btn-danger")) {
    e.target.parentElement.remove();
  }

  const btn = e.target.children[0];

  if (e.target.classList.contains("list-item")) {
    if (e.target.style.textDecoration !== "line-through") {
      e.target.style.textDecoration = "line-through";
    } else {
      e.target.style.textDecoration = "none";
    }
    btn.style.textDecoration = "";
  }
};
