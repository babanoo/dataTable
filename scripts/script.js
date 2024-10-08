import { users } from "./users.js";

table = document.querySelector(".table-container");

const paid = document.querySelector(".paid");
const unpaid = document.querySelector(".unpaid");
const overdue = document.querySelector(".overdue");

const filter = document.querySelector(".filter-btn");
const filterCrud = document.querySelector(".filter-crud");
const allUsers = document.querySelectorAll(".all-users");

const sortByFirstName = document.querySelector(".first-name");
const sortByLastName = document.querySelector(".last-name");
const sortByDueDate = document.querySelector(".due-date");
const sortByLastLogin = document.querySelector(".last-login");

const activeUsers = document.querySelector(".active-users");
const inactiveUsers = document.querySelector(".inactive-users");

const addActiveColor = document.querySelectorAll(".add-active");
const addActiveBorder = document.querySelectorAll(".add-active-border");

const searchBar = document.querySelector(".search-bar");
const searchFiled = document.querySelector(".search-field");

const modal = document.querySelector(".modal-content");
const closeModal = document.querySelector(".close-button");
const body = document.querySelector(".body");
const updateUser = document.querySelector(".update-user");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const paymentDate = document.querySelector("#date-payment");
const dateInput = document.querySelector("#login");
const statutInput = document.querySelector("#statut");
const paymentStatut = document.querySelector("#payment-statut");
const numberInput = document.querySelector("#number");
const modalInputs = document.querySelectorAll(".modal-input");

const payableAmount = document.querySelector(".payable-amount");

const rowsPerPage = document.querySelector(".select-num-page");

let currentUserId = null;

function renderTable(users) {
  table.innerHTML = "";
  const headers = Object.keys(users[0]);
  const headerRow = document.createElement("tr");
  headerRow.classList.add("base-border");
  headers.shift();

  const th = document.createElement("th");
  th.classList.add("left-text");
  headerRow.appendChild(th);
  const checkButtonEl = document.createElement("button");
  checkButtonEl.classList.add(
    "base-button",
    "font-20",
    "lavender-purple-color",
    "bi",
    "bi-square",
    "cursor-pointer",
    "cheked-buttn",
    "cell-header-padding"
  );
  th.appendChild(checkButtonEl);

  const th2 = document.createElement("th");
  th2.classList.add("left-text", "cell-header-padding");
  th2.textContent = "";
  headerRow.appendChild(th2);

  for (let header of headers) {
    const tableHeader = document.createElement("th");
    tableHeader.classList.add(
      "kimberly-text-color",
      "font-14",
      "font-600",
      "cell-header-padding",
      "left-text"
    );
    headerRow.appendChild(tableHeader);
    tableHeader.textContent = header.toUpperCase();
  }

  const th3 = document.createElement("th");
  th3.classList.add("cell-header-padding", "left-text");
  const moreButtonEl = document.createElement("button");
  th3.appendChild(moreButtonEl);
  moreButtonEl.classList.add(
    "bi",
    "bi-three-dots-vertical",
    "font-20",
    "lavender-purple-color",
    "base-button",
    "cursor-pointer"
  );
  headerRow.appendChild(th3);

  table.appendChild(headerRow);

  users.forEach((user) => {
    const contentRow = document.createElement("tr");
    contentRow.classList.add(
      "base-border",
      "bg-white",
      "content-row",
      "p-relative"
    );

    updateUser.addEventListener("click", () => {
      filtereUsers("editUser", user);
      removeOverflow();
    });

    const td1 = document.createElement("td");
    td1.classList.add("cell-padding");
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    td1.appendChild(checkBox);
    checkBox.classList.add("cursor-pointer", "check-box", "mb-5");
    contentRow.appendChild(td1);

    let isChecked = checkBox.checked;

    function updateCheckBoxState() {
      if (isChecked) {
        checkBox.checked = true;
        checkBox.parentElement.parentElement.classList.add("bg-snuff");
      } else {
        checkBox.checked = false;
        checkBox.parentElement.parentElement.classList.remove("bg-snuff");
      }
    }

    checkBox.addEventListener("change", () => {
      updateButtonState();
      checkBox.parentElement.parentElement.classList.toggle("bg-snuff");
      isChecked = checkBox.checked;
    });

    const td2 = document.createElement("td");
    td2.classList.add("cell-padding");
    const dropDownBttn = document.createElement("button");
    td2.appendChild(dropDownBttn);
    dropDownBttn.classList.add(
      "fa",
      "fa-chevron-down",
      "kimberly-text-color",
      "font-14",
      "radius-50",
      "base-button",
      "drop-down-bttn",
      "cursor-pointer",
      "mb-5"
    );
    contentRow.appendChild(td2);

    const objValues = Object.values(user);
    objValues.shift();

    objValues.forEach((el) => {
      const tableContent = document.createElement("td");
      tableContent.classList.add(
        "cell-padding",
        "kimberly-text-color",
        "font-14"
      );
      contentRow.appendChild(tableContent);

      if (typeof el === "object") {
        el.forEach((item) => {
          const spanEl = document.createElement("span");
          spanEl.classList.add("d-block", "mb-5");

          if (item === "Active") {
            spanEl.classList.add(
              "active-user",
              "d-inline-block",
              "bg-snuff",
              "p-relative",
              "font-500",
              "radius-15",
              "status-padding"
            );
          } else if (item === "Inactive") {
            spanEl.classList.add(
              "inactive-user",
              "d-inline-block",
              "p-relative",
              "font-500",
              "radius-15",
              "status-padding"
            );
          } else if (item === "Paid") {
            spanEl.classList.add(
              "paid-user",
              "d-inline-block",
              "p-relative",
              "font-500",
              "radius-15",
              "status-padding"
            );
          } else if (item === "Overdue") {
            spanEl.classList.add(
              "overdue-user",
              "d-inline-block",
              "p-relative",
              "font-500",
              "radius-15",
              "status-padding"
            );
          } else if (item === "Unpaid") {
            spanEl.classList.add(
              "unpaid-user",
              "d-inline-block",
              "p-relative",
              "font-500",
              "radius-15",
              "status-padding"
            );
          } else if (
            item === objValues[0][0] ||
            item === objValues[3][0] ||
            item === objValues[2][1]
          ) {
            spanEl.classList.add("font-500", "black-text");
          } else if (item === objValues[1][1] || item === objValues[1][0]) {
            tableContent.classList.add("cell-space-35");
          } else if (item === objValues[3][1] || item === objValues[3][0]) {
            tableContent.classList.add("right-text", "cell-space-10");
          }
          spanEl.textContent = item;
          tableContent.appendChild(spanEl);
          console.log(tableContent);
        });
      } else {
        tableContent.textContent = el;
      }
    });

    const td3 = document.createElement("td");
    td3.classList.add("cell-padding");
    const moreBttnEl = document.createElement("button");
    td3.appendChild(moreBttnEl);
    moreBttnEl.classList.add(
      "bi",
      "bi-three-dots-vertical",
      "font-20",
      "lavender-purple-color",
      "mb-5",
      "base-button",
      "cursor-pointer",
      "view-more-button"
    );

    moreBttnEl.addEventListener("click", (event) => {
      const sibling = moreBttnEl.nextElementSibling;
      sibling.classList.remove("hidden");
      sibling.classList.add("d-flex");
    });

    const moreCard = document.createElement("div");
    moreCard.classList.add("bg-white", "more-card", "box-shadow", "p-relative");

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add(
      "base-button",
      "d-block",
      "padding-5",
      "font-16",
      "cursor-pointer",
      "hover-bg",
      "card-bttns",
      "left-text",
      "edit-buttn"
    );
    moreCard.appendChild(editButton);

    editButton.addEventListener("click", (event) => {
      modal.showModal();
      body.classList.add("overflow-hidden");
      nameInput.value = user.name[0];
      emailInput.value = user.name[1];
      dateInput.value = user["user status"][1];
      paymentDate.value = user["payment status"][1];
      statutInput.value =
        user["user status"][0] === "Active" ? "active" : "inactive";
      if (user["payment status"][0] === "Paid") {
        paymentStatut.value = "Paid";
      } else if (user["payment status"][0] === "Unpaid") {
        paymentStatut.value = "Unpaid";
      } else {
        paymentStatut.value = "Overdue";
      }
      numberInput.value = parseFloat(user.amount[0].replace("$", ""));
      currentUserId = user.id;

      updateCheckBoxState();
    });

    const amounts = users.map((user) =>
      parseFloat(user.amount[0].replace("$", ""))
    );
    const totalAmount = amounts.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

    payableAmount.textContent = totalAmount;

    const viewProfile = document.createElement("button");
    viewProfile.textContent = "View Profile";
    viewProfile.classList.add(
      "base-button",
      "d-block",
      "padding-5",
      "font-16",
      "cursor-pointer",
      "hover-bg",
      "card-bttns",
      "left-text"
    );
    moreCard.appendChild(viewProfile);

    if (user["user status"][0] === "Inactive") {
      const activeUser = document.createElement("button");
      activeUser.textContent = "Activate User";
      activeUser.classList.add(
        "base-button",
        "d-block",
        "padding-5",
        "activate-user-bttn",
        "font-16",
        "cursor-pointer",
        "hover-bg",
        "card-bttns",
        "left-text"
      );
      moreCard.appendChild(activeUser);

      activeUser.addEventListener("click", () => {
        user["user status"][0] =
          user["user status"][0] === "Inactive" ? "Active" : "Active";
        renderTable(users);
        addTaskToLocalStorage();
      });
    }

    const hrEl = document.createElement("hr");
    hrEl.classList.add(".hr");
    moreCard.appendChild(hrEl);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add(
      "base-button",
      "d-block",
      "padding-5",
      "delete-bttn",
      "font-16",
      "cursor-pointer",
      "hover-bg",
      "card-bttns",
      "left-text"
    );
    moreCard.appendChild(deleteButton);

    deleteButton.addEventListener("click", () =>
      deleteUser(contentRow, user.id)
    );

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("hidden", "card-container");
    cardContainer.tabIndex = "1";
    cardContainer.addEventListener("blur", () => {
      cardContainer.classList.add("hidden");
    });

    cardContainer.appendChild(moreCard);

    const removeCardEl = document.createElement("button");
    removeCardEl.classList.add(
      "base-button",
      "bi",
      "bi-x",
      "lavender-purple-color",
      "radius-50",
      "remove-card",
      "cursor-pointer"
    );

    cardContainer.appendChild(removeCardEl);

    removeCardEl.addEventListener("click", () => {
      removeCardEl.parentElement.classList.add("hidden");
    });

    td3.appendChild(cardContainer);
    contentRow.appendChild(td3);
    table.appendChild(contentRow);
  });

  const checkBoxes = document.querySelectorAll(".check-box");
  const checkedButtn = document.querySelector(".cheked-buttn");

  function updateButtonState() {
    const allChecked = Array.from(checkBoxes).every(
      (checkbox) => checkbox.checked
    );
    const someChecked = Array.from(checkBoxes).some(
      (checkbox) => checkbox.checked
    );

    if (allChecked) {
      checkedButtn.classList.remove("bi-dash-square-fill", "bi-square");
      checkedButtn.classList.add("bi-check-square-fill", "blue-marguarite");
    } else if (someChecked) {
      checkedButtn.classList.remove("bi-square", "bi-check-square-fill");
      checkedButtn.classList.add("bi-dash-square-fill", "blue-marguarite");
    } else {
      checkedButtn.classList.remove(
        "bi-dash-square-fill",
        "bi-check-square-fill",
        "blue-marguarite"
      );
      checkedButtn.classList.add("bi-square");
    }
  }

  checkedButtn.addEventListener("click", () => {
    const allChecked = Array.from(checkBoxes).every(
      (checkbox) => checkbox.checked
    );

    const someChecked = Array.from(checkBoxes).some(
      (checkbox) => checkbox.checked
    );

    if (allChecked || someChecked) {
      for (let check of checkBoxes) {
        check.checked = false;
        check.parentElement.parentElement.classList.remove("bg-snuff");
      }
    } else if (!allChecked) {
      for (let check of checkBoxes) {
        check.checked = true;
        check.parentElement.parentElement.classList.add("bg-snuff");
      }
    }
    updateButtonState();
  });
}
renderTable(users);

function filtereUsers(filterType) {
  let filteredUsers;
  switch (filterType) {
    case "active":
      filteredUsers = users.filter((user) =>
        user["user status"].includes("Active")
      );
      break;
    case "inactive":
      filteredUsers = users.filter((user) =>
        user["user status"].includes("Inactive")
      );
      break;
    case "paid":
      filteredUsers = users.filter((user) =>
        user["payment status"].includes("Paid")
      );
      break;
    case "unpaid":
      filteredUsers = users.filter((user) =>
        user["payment status"].includes("Unpaid")
      );
      break;
    case "overdue":
      filteredUsers = users.filter((user) =>
        user["payment status"].includes("Overdue")
      );
      break;
    case "searchUsers":
      const searchInputValue = searchFiled.value.trim().toLowerCase();
      filteredUsers = users.filter((user) =>
        user.name[0].toLowerCase().includes(searchInputValue)
      );
      break;
    default:
      filteredUsers = users;
  }
  renderTable(filteredUsers);
}

function addActiveClass() {
  for (let activeBttn of addActiveColor) {
    activeBttn.classList.remove("active", "p-relative");
    this.classList.add("active", "p-relative", "font-600");
  }
}

function activeBorder() {
  for (let activeEl of addActiveBorder) {
    this.classList.add("active-border") ||
      this.classList.replace("base-border", "active-border");
  }
}

function removeOverflow() {
  body.classList.remove("overflow-hidden");
}

function deleteUser(userEl, userId) {
  const confirmDelete = confirm("Are you sure you want to delete this User?");
  if (confirmDelete) {
    users = users.filter((user) => user.id !== userId);
    userEl.remove();
  }
  addTaskToLocalStorage();
}

function showFilterDropDown() {
  filterCrud.classList.toggle("hidden");
}

function addTaskToLocalStorage() {
  window.localStorage.setItem("usersData", JSON.stringify(users));
}

filter.addEventListener("click", () => showFilterDropDown());

sortByFirstName.addEventListener("click", () => {
  users.sort(function (a, b) {
    let firstNameA = a.name[0].split(" ")[0].toLowerCase();
    let firstNameB = b.name[0].split(" ")[0].toLowerCase();
    if (firstNameA < firstNameB) {
      return -1;
    }
    if (firstNameA > firstNameB) {
      return 1;
    }
    return 0;
  });
  renderTable(users);
});

sortByLastName.addEventListener("click", () => {
  users.sort(function (a, b) {
    let lastNameA = a.name[0].split(" ").slice(-1)[0].toLowerCase();
    let lastNameB = b.name[0].split(" ").slice(-1)[0].toLowerCase();
    if (lastNameA < lastNameB) {
      return -1;
    }
    if (lastNameA > lastNameB) {
      return 1;
    }
    return 0;
  });
  renderTable(users);
});

sortByDueDate.addEventListener("click", () => {
  users.sort(function (a, b) {
    let dateStrA = a["payment status"][1].split(" ").slice(-1)[0];
    let dateStrB = b["payment status"][1].split(" ").slice(-1)[0];

    let dateA = new Date(dateStrA.replace(/(\d+)\/(\w+)\/(\d+)/, "$2 $1, $3"));
    let dateB = new Date(dateStrB.replace(/(\d+)\/(\w+)\/(\d+)/, "$2 $1, $3"));

    return dateA - dateB;
  });
  renderTable(users);
});

sortByLastLogin.addEventListener("click", () => {
  users.sort(function (a, b) {
    let loginStrA = a["user status"][1].split(" ").slice(-1)[0];
    let loginStrB = b["user status"][1].split(" ").slice(-1)[0];

    let loginA = new Date(
      loginStrA.replace(/(\d+)\/(\w+)\/(\d+)/, "$2 $1, $3")
    );
    let loginB = new Date(
      loginStrB.replace(/(\d+)\/(\w+)\/(\d+)/, "$2 $1, $3")
    );

    return loginA - loginB;
  });
  renderTable(users);
});

searchFiled.addEventListener("input", () => filtereUsers("searchUsers"));

searchBar.addEventListener("mouseover", () => {
  searchFiled.focus();
});
searchFiled.addEventListener("blur", () => {
  searchFiled.value === ""
    ? searchBar.classList.remove("active-border")
    : addActiveBorder();
});

for (let user of allUsers) {
  user.addEventListener("click", filtereUsers);
}

for (let active of addActiveColor) {
  active.addEventListener("click", addActiveClass);
}

for (let active of addActiveColor) {
  active.addEventListener("mouseover", addActiveClass);
}

for (let activeEl of addActiveBorder) {
  activeEl.addEventListener("mouseover", activeBorder);
}

paid.addEventListener("click", () => filtereUsers("paid"));
unpaid.addEventListener("click", () => filtereUsers("unpaid"));
overdue.addEventListener("click", () => filtereUsers("overdue"));

activeUsers.addEventListener("click", () => filtereUsers("active"));
inactiveUsers.addEventListener("click", () => filtereUsers("inactive"));

updateUser.addEventListener("click", (event) => {
  event.preventDefault();

  users = users.map((user) => {
    if (user.id === currentUserId) {
      return {
        ...user,
        name: [
          nameInput.value.trim() ? nameInput.value.trim() : user.name[0],
          emailInput.value.trim() ? emailInput.value.trim() : user.name[1],
        ],
        "user status": [
          statutInput.value === "active" ? "Active" : "Inactive",
          dateInput.value.trim()
            ? dateInput.value.trim()
            : user["user status"][1],
        ],
        "payment status": [
          paymentStatut.value === "Paid"
            ? "Paid"
            : paymentStatut.value === "Unpaid"
            ? "Unpaid"
            : "Overdue",
          paymentDate.value.trim()
            ? paymentDate.value.trim()
            : user["payment status"][1],
        ],
        amount: [
          numberInput.value ? `$${numberInput.value}` : user.amount[0],
          user.amount[1],
        ],
      };
    }
    return user;
  });

  renderTable(users);
  addTaskToLocalStorage();
  modal.close();
  body.classList.remove("overflow-hidden");
});

closeModal.addEventListener("click", () => {
  modal.close();
  removeOverflow();
});

rowsPerPage.addEventListener("click", () => {
  users.slice(2, 6);
});
