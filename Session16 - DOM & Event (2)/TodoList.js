// C - Create todolist

const form = document.getElementById("main-form");
const todoList = document.getElementById("todo-list");

form.onsubmit = function (event) {
  //   console.log("Hello");
  event.preventDefault(); // để chặn sự kiện mặc định của form
  // Bước 1: lấy được giá trị (nội dung) có trong ô input
  // console.log(form.todoValue.value);
  const inputValue = form.todoValue.value;
  // Bước 2-1: Tạo ra thẻ li có cấu trúc giống li con của thẻ ul
  // createElement => để tạo ra thẻ
  const li = document.createElement("li");
  //   console.log(li);
  // Bước 2-2: Thêm Class cho thẻ li để style cho chức năng complate (Hoàn thành)
  li.classList.add("list-item");

  // Bước 3: append thẻ li được tạo vào trong ul và thêm nội dung cho thẻ li đấy
  // Bước 3-1: Thêm nội dung cho thẻ li chính bằng nội dung của người dùng nhập vào từ ô input
  li.innerText = inputValue;
  // Bước 3-2: thêm btn delete để làm chức năng xóa
  const buttonDelete = document.createElement("button");
  // Thêm class cho button delete
  buttonDelete.classList.add("btn");
  buttonDelete.classList.add("btn-darger");
  // Thêm nội dung của button delete
  buttonDelete.innerText = "Delete";
  // console.log(buttonDelete);
  // Bước 3.3: Append btn delete vào li
  li.appendChild(buttonDelete);

  // Bước 4: Gọi ul ra, append li làm con của thẻ ul
  todoList.appendChild(li);

  // Cách 1: Làm chức năng delete
  //   buttonDelete.onclick = function () {
  //     li.remove();
  //   };
};

todoList.onclick = function (e) {
  //   console.log(e.target); // Ủy quyền sự kiện onclick
  if (e.target.classList.contains("btn-darger")) {
    e.target.parentElement.remove();
  }

  // Chức năng hoàn thành
  //   console.log(e.target.children[0]);
  const btn = e.target.children[0];
  if (e.target.classList.contains("list-item")) {
    if (e.target.style.textDecoration != "line-through") {
      e.target.style.textDecoration = "line-through";
    } else {
      e.target.style.textDecoration = "none";
    }
    btn.style.textDecoration = "";
  }
};

// Bài tập về nhà
// Xem lại video buổi học và code lại todolist
// Thêm chức năng update cho todoList

// Lấy btn update ra => lấy li con ra => sử dụng innerHTML = <input type="text"/> (cần phải lại được giá trị của thẻ li)