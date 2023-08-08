// Bài tập 1:
// Tạo một HTML gồm một nút. Sử dụng JavaScript để thay đổi màu nền của trang web khi người dùng nhấn vào nút.

// function getRandomColorRGB() {
// Mã màu rgb được chạy từ 0 -> 256. Được kết hợp từ 3 màu
// r - red (đỏ) || g - green (xanh lá cây) || b - blue (xanh dương)
// Math.random => được chạy từ 0 -> 1
// Math.floor => làm tròn các số thập phân
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   return `rgb(${r}, ${g}, ${b})`;
// }

// color: "tên tiếng anh (red, ...)", mã hex (#123456789abcdef), rgb()

// Cách 1: Sử dụng function + Sự kiện
// function changeBackgroundColor() {
//   document.body.style.backgroundColor = getRandomColorRGB();
// }

// Cách 2: addEventListener - 1
// const btnChange = document.getElementById("btn-change");
// console.log(btnChange);
// btnChange.onclick = function () {
//   document.body.style.backgroundColor = getRandomColorRGB();
// };

// Cách 3: addEventListener - 2
// const btnChange = document.getElementById("btn-change");
// btnChange.addEventListener("click", function () {
//   document.body.style.backgroundColor = getRandomColorRGB();
// });

// Bài tập 2:
// Tạo một HTML với một đoạn văn bản và một nút. Sử dụng JavaScript để thay đổi
// nội dung của đoạn văn bản thành "Chào bạn!" khi người dùng nhấn nút.

// Chữa bài:
// Cách 1: Thay đổi ND 1 lần
// function changeText() {
//   document.getElementById("content").innerText = "Chào bạn !!!";
// }

// Cách 2: Toggle chuyển đổi nội dung

let isChanged = false;

function changeText() {
  const contentElement = document.getElementById("content");
  if (isChanged) {
    contentElement.innerText = "Welcome RA !!!";
  } else {
    contentElement.innerText = "Chào bạn !!!";
  }
  isChanged = !isChanged;
}

// Bài tập 3:
// Tạo một HTML với một đoạn văn bản và hai nút "Phóng to" và "Thu nhỏ".
// Sử dụng JavaScript để thay đổi kích thước của đoạn văn bản khi người dùng nhấn vào các nút này.

// Chữa bài:
let currentFontSize = 16;
let zoomText = document.getElementById("zoomText");

function zoomIn() {
  currentFontSize += 2; // currentFontSize = currentFontSize + 2
  zoomText.style.fontSize = currentFontSize + "px";
}

function zoomOut() {
  currentFontSize -= 2; // currentFontSize = currentFontSize - 2
  zoomText.style.fontSize = currentFontSize + "px";
}

// Bài tập 4:
// Tạo một HTML với một danh sách các mục. Sử dụng JavaScript để thêm một lớp CSS cho mỗi mục
// trong danh sách khi người dùng di chuột qua mục đó.
// Sử dụng sự kiện onmouseout

// Bài tập 5:
// Tạo một HTML với một ô input và một nút. Sử dụng JavaScript để hiển thị thông báo
// "Bạn đã nhập: [giá trị nhập vào]" khi người dùng nhập dữ liệu và nhấn nút.

// Chữa bài
function showMessage() {
  const userInput = document.getElementById("userInput").value;
  //   console.log(userInput.value);
  alert("Bạn đã nhập: " + userInput);
}

// Bài tập 6: Ẩn hiện 1 khối div có nội dung bất kỳ
// Chữa bài:

const btnToggle = document.getElementById("btn-toggle");

btnToggle.onclick = function () {
  // Bước 1: Gọi thẻ div
  const toggleDiv = document.getElementById("toggle-block");

  // Bước 2: Ẩn thẻ div đi
  // Sử dụng contains() => phương thức được cung cấp bởi classlist
  // => được sử dụng để kiểm trả xem phần tử có chứa class trong đối tượng
  // console.log(toggleDiv.classList.contains("test"));
  if (!toggleDiv.classList.contains("toggleClass")) {
    toggleDiv.classList.add("toggleClass");
  } else {
    toggleDiv.classList.remove("toggleClass");
  }
};

// Bài tập 7: Random màu của thẻ div
// Tự làm
