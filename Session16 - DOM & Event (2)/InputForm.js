document.addEventListener("DOMContentLoaded", function () {
  const infoForm = document.getElementById("infoForm");
  const infoTable = document
    .getElementById("infoTable")
    .getElementsByTagName("tbody")[0];

  infoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    if (name && email && phone && address) {
      const info = { name, email, phone, address };
      saveInfo(info);
      displayInfo();
      infoForm.reset();
    }
  });

  function saveInfo(info) {
    let infos = JSON.parse(localStorage.getItem("infos")) || [];
    infos.push(info);
    localStorage.setItem("infos", JSON.stringify(infos));
  }

  function displayInfo() {
    infoTable.innerHTML = "";
    const infos = JSON.parse(localStorage.getItem("infos")) || [];

    infos.forEach(function (info, index) {
      const row = infoTable.insertRow();

      const nameCell = row.insertCell(0);
      nameCell.textContent = info.name;

      const emailCell = row.insertCell(1);
      emailCell.textContent = info.email;

      const phoneCell = row.insertCell(2);
      phoneCell.textContent = info.phone;

      const addressCell = row.insertCell(3);
      addressCell.textContent = info.address;

      const actionsCell = row.insertCell(4);
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Xóa";
      deleteButton.addEventListener("click", function () {
        deleteInfo(index);
        displayInfo();
      });
      actionsCell.appendChild(deleteButton);
    });
  }

  function deleteInfo(index) {
    const infos = JSON.parse(localStorage.getItem("infos")) || [];
    infos.splice(index, 1);
    localStorage.setItem("infos", JSON.stringify(infos));
  }

  displayInfo();
});
