const table = document.querySelector(".table-container");

const paid = document.querySelector(".paid");
const unpaid = document.querySelector(".unpaid");
const overdue = document.querySelector(".overdue");

const filter = document.querySelector(".filter-btn");
const filterCrud = document.querySelector(".filter-crud");
const allUsers = document.querySelectorAll(".all-users");

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

let currentUserId = null;

let users = [
  {
    id: "u1",
    name: ["Justin Septimus", "example@email.com"],
    "user status": ["Active", "Last Login: 14/APR/2020"],
    "payment status": ["Paid", "Paid on 15/APR/2020"],
    amount: ["$200", "USD"],
    "": "View More",
  },
  {
    id: "u2",
    name: ["Anika Rahiel Madsen", "example@email.com"],
    "user status": ["Active", "Last Login: 14/APR/2020"],
    "payment status": ["Overdue", "Dued on 15/APR/2020"],
    amount: ["$300", "USD"],
    "": "View More",
  },
  {
    id: "u3",
    name: ["Miracle Vaccaro", "example@email.com"],
    "user status": ["Active", "Last Login: 14/APR/2020"],
    "payment status": ["Paid", "Paid on 15/APR/2020"],
    amount: ["$250", "USD"],
    "": "View More",
  },
  {
    id: "u4",
    name: ["Erin Levin", "example@email.com"],
    "user status": ["Active", "Last Login: 14/APR/2020"],
    "payment status": ["Unpaid", "Dues on 15/APR/2020"],
    amount: ["$200", "USD"],
    "": "View More",
  },
  {
    id: "u5",
    name: ["Mira Herwitz", "example@email.com"],
    "user status": ["Inactive", "Last Login: 14/APR/2020"],
    "payment status": ["Paid", "Paid on 15/APR/2020"],
    amount: ["$200", "USD"],
    "": "View More",
  },
  {
    id: "u6",
    name: ["Jaxson Siphron", "example@email.com"],
    "user status": ["Inactive", "Last Login: 14/APR/2020"],
    "payment status": ["Paid", "Paid on 15/APR/2020"],
    amount: ["$750", "USD"],
    "": "View More",
  },
  {
    id: "u7",
    name: ["Mira Levin", "example@email.com"],
    "user status": ["Active", "Last Login: 14/APR/2020"],
    "payment status": ["Unpaid", "Dues on 15/APR/2020"],
    amount: ["$200", "USD"],
    "": "View More",
  },
  {
    id: "u8",
    name: ["LincoIn Levin", "example@email.com"],
    "user status": ["Active", "Last Login: 14/APR/2020"],
    "payment status": ["Paid", "Paid on 15/APR/2020"],
    amount: ["$370", "USD"],
    "": "View More",
  },
  {
    id: "u9",
    name: ["Phillip Saris", "example@email.com"],
    "user status": ["Inactive", "Last Login: 14/APR/2020"],
    "payment status": ["Unpaid", "Dues on 15/APR/2020"],
    amount: ["$200", "USD"],
    "": "View More",
  },
  {
    id: "u10",
    name: ["Cheyenne Ekstrom Bothman", "example@email.com"],
    "user status": ["Inactive", "Last Login: 14/APR/2020"],
    "payment status": ["Paid", "Paid on 15/APR/2020"],
    amount: ["$150", "USD"],
    "": "View More",
  },
];
renderTable(users);

function renderTable(users) {
  table.innerHTML = "";
  const headers = Object.keys(users[0]);
  const headerRow = document.createElement("tr");
  headerRow.classList.add("base-border");
  headers.shift();
  console.log(headerRow);

  const th = document.createElement("th");
  th.classList.add("cell-padding", "left-text");
  headerRow.appendChild(th);
  const checkButtonEl = document.createElement("button");
  checkButtonEl.classList.add(
    "base-button",
    "font-20",
    "lavender-purple-color",
    "bi",
    "bi-square",
    "cursor-pointer"
  );
  th.appendChild(checkButtonEl);

  const th2 = document.createElement("th");
  th2.classList.add("cell-padding", "left-text");
  th2.textContent = "";
  headerRow.appendChild(th2);

  for (let header of headers) {
    const tableHeader = document.createElement("th");
    tableHeader.classList.add("kimberly-text-color", "font-14");
    tableHeader.classList.add("cell-padding", "left-text");
    headerRow.appendChild(tableHeader);
    tableHeader.textContent = header.toUpperCase();
  }

  const th3 = document.createElement("th");
  th3.classList.add("cell-padding", "left-text");
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
    contentRow.classList.add("base-border", "bg-white", "content-row");

    updateUser.addEventListener("click", () => {
      filtereUsers("editUser", user);
      removeOverflow();
    });

    const td1 = document.createElement("td");
    td1.classList.add("cell-padding");
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    td1.appendChild(checkBox);
    checkBox.classList.add("cursor-pointer", "checkbox");
    contentRow.appendChild(td1);

    checkBox.addEventListener("change", () => {
      contentRow.classList.toggle("bg-snuff");
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
      "cursor-pointer"
    );
    contentRow.appendChild(td2);

    const objValues = Object.values(user);
    objValues.shift();

    objValues.forEach((el) => {
      const tableContent = document.createElement("td");
      tableContent.classList.add("cell-padding");
      contentRow.appendChild(tableContent);
      typeof el === "object"
        ? (tableContent.innerHTML = el.join("<br>"))
        : (tableContent.textContent = el);
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
        paymentStatut.value = "UnPaid";
      } else {
        paymentStatut.value = "Overdue";
      }
      numberInput.value = parseFloat(user.amount[0].replace("$", ""));
      currentUserId = user.id;
    });

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
        user["user status"][0] === "Inactive" ? "Active" : "Inactive";
      renderTable(users);
    });

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
}

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
}

filter.addEventListener("click", (event) => {
  filterCrud.classList.toggle("hidden");
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
        amount: [
          numberInput.value ? `$${numberInput.value}` : user.amount[0],
          user.amount[1],
        ],
      };
    }
    return user;
  });

  renderTable(users);
  modal.close();
  body.classList.remove("overflow-hidden");
});

closeModal.addEventListener("click", () => {
  modal.close();
  removeOverflow();
});
