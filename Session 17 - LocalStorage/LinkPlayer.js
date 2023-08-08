// let arrPlayer = ["Messi", "Ronaldo", "Công Phượng"];
// localStorage.setItem("playerList", JSON.stringify(arrPlayer));

function displayPlayer() {
  // Lấy dữ liệu trong localstorage
  const playerList = JSON.parse(localStorage.getItem("playerList")) || [];
  // console.log(playerList);
  // Lấy thẻ ul từ html
  const playerListElement = document.getElementById("playerList");
  // Gán thẻ ul bằng nội dung rỗng
  playerListElement.innerHTML = "";
  // Sử dụng vòng lặp để lặp qua các phần tử trong array lấy từ localStorage
  for (let i = 0; i < playerList.length; i++) {
    // Gán các phần tử có trong array
    const player = playerList[i];
    // Tạo ra thẻ li
    const listItem = document.createElement("li");
    // Gắn nội dung cho các thẻ li bằng phần tử trong array
    listItem.textContent = player;
    // Tạo ra button xóa
    const deleteButton = document.createElement("button");
    // Gán nội dung cho button là Delete
    deleteButton.textContent = "Delete";
    // Viết sự kiện cho button Delete => Truyền được index của phần tử có trong mảng
    deleteButton.onclick = function () {
      deletePlayer(i);
    };
    // append button vào li
    listItem.appendChild(deleteButton);
    // appent li vào ul
    playerListElement.appendChild(listItem);
  }
}

function addPlayer() {
  // Lấy thẻ input
  const playerNameInput = document.getElementById("playerName");
  // Lấy value trong input
  const playerName = playerNameInput.value;
  // Lấy dữ liệu từ localStorage về
  const playerList = JSON.parse(localStorage.getItem("playerList")) || [];
  // Push dữ liệu mới từ input vào trong localStorage
  playerList.push(playerName);
  // set lại giá trị trong localStorage
  localStorage.setItem("playerList", JSON.stringify(playerList));
  // Set lại giá trị ô input thành rỗng
  playerNameInput.value = "";
  // Gọi hàm displayPlayer để hiển thị lại dữ liệu
  displayPlayer();
}

function deletePlayer(index) {
  //   console.log(index);
  // Lấy dữ liệu từ localStorage về
  const playerList = JSON.parse(localStorage.getItem("playerList")) || [];
  // Sử dụng hàm splice để xóa theo vị trí index
  playerList.splice(index, 1);
  // Sau khi xóa xong sẽ set lại giá trị vào trong localstorage
  localStorage.setItem("playerList", JSON.stringify(playerList));
  // Gọi hàm displayPlayer để hiển thị lại dữ liệu
  displayPlayer();
}

// Tạo hàm xóa tất cả player
function deleteAllPlayer() {
  // Sử dụng hàm removeItem để xóa theo key
  localStorage.removeItem("playerList");
  // Gọi hàm displayPlayer để hiển thị lại dữ liệu
  displayPlayer();
}

// Gọi hàm hiển thị để dữ liệu luôn được hiển thị
displayPlayer();
