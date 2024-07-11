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
    "bi-square"
  );
  th.appendChild(checkButtonEl);

  const th2 = document.createElement("th");
  th2.classList.add("cell-padding", "left-text");
  th2.textContent = "";
  headerRow.appendChild(th2);

  for (let header of headers) {
    const tableHeader = document.createElement("th");
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
    "base-button"
  );
  headerRow.appendChild(th3);

  table.appendChild(headerRow);

  users.forEach((user) => {
    const contentRow = document.createElement("tr");
    contentRow.classList.add("base-border", "bg-white");

    const td1 = document.createElement("td");
    td1.classList.add("cell-padding");
    const checkedButtonEl = document.createElement("button");
    td1.appendChild(checkedButtonEl);
    checkedButtonEl.classList.add(
      "bi",
      "bi-square",
      "font-20",
      "lavender-purple-color",
      "base-button"
    );
    contentRow.appendChild(td1);

    const td2 = document.createElement("td");
    td2.classList.add("cell-padding");
    const dropDownBttn = document.createElement("button");
    td2.appendChild(dropDownBttn);
    dropDownBttn.classList.add(
      "fa",
      "fa-chevron-down",
      "lavender-purple-color",
      "font-14",
      "radius-50",
      "base-button",
      "drop-down-bttn"
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
      "base-button"
    );

    const moreCard = document.createElement("div");
    moreCard.classList.add("bg-white", "more-card", "box-shadow", "p-relative");

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("base-button", "d-block", "padding-3", "font-16");
    moreCard.appendChild(editButton);

    const viewProfile = document.createElement("button");
    viewProfile.textContent = "View Profile";
    viewProfile.classList.add("base-button", "d-block", "padding-3", "font-16");
    moreCard.appendChild(viewProfile);

    const activeUser = document.createElement("button");
    activeUser.textContent = "Activate User";
    activeUser.classList.add(
      "base-button",
      "d-block",
      "padding-3",
      "activate-user-bttn",
      "font-16"
    );
    moreCard.appendChild(activeUser);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add(
      "base-button",
      "d-block",
      "padding-3",
      "delete-bttn",
      "font-16"
    );
    moreCard.appendChild(deleteButton);

    const cardFlex = document.createElement("div");
    cardFlex.classList.add("d-flex");

    cardFlex.appendChild(moreCard);

    const removeMoreCard = document.createElement("button");
    removeMoreCard.classList.add(
      "base-button",
      "bi",
      "bi-x",
      "lavender-purple-color",
      "radius-50",
      "remove-card",
      "padding-3"
    );

    cardFlex.appendChild(removeMoreCard);

    td3.appendChild(cardFlex);
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
    this.classList.add("active", "p-relative");
  }
}

function activeBorder() {
  for (let activeEl of addActiveBorder) {
    this.classList.add("active-border") ||
      this.classList.replace("base-border", "active-border");
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
