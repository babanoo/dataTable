const table = document.querySelector(".table-container");
const filter = document.querySelector(".filter-btn");
const filterCrud = document.querySelector(".filter-crud");
const allUsers = document.querySelector(".all-users");
const activeUsers = document.querySelector(".active-users");
const inactiveUsers = document.querySelector(".inactive-users");

let users = [
  {
    id: "u1",
    name: ["Justin Septimus", "example@email.com"],
    "user status": ["Active", "Last Login: 14/APR/2020"],
    "payment status": ["Paid", "Paid on 15/APR/2020"],
    amount: ["$200", "USD"],
  },
  {
    id: "u2",
    name: ["Anika Rahiel Madsen", "example@email.com"],
    "user status": ["Active", "Last Login: 14/APR/2020"],
    "payment status": ["Overdue", "Dued on 15/APR/2020"],
    amount: ["$300", "USD"],
  },
  {
    id: "u3",
    name: ["Miracle Vaccaro", "example@email.com"],
    "user status": ["Active", "Last Login: 14/APR/2020"],
    "payment status": ["Paid", "Paid on 15/APR/2020"],
    amount: ["$250", "USD"],
  },
  {
    id: "u4",
    name: ["Erin Levin", "example@email.com"],
    "user status": ["Active", "Last Login: 14/APR/2020"],
    "payment status": ["Unpaid", "Dues on 15/APR/2020"],
    amount: ["$200", "USD"],
  },
  {
    id: "u5",
    name: ["Mira Herwitz", "example@email.com"],
    "user status": ["Inactive", "Last Login: 14/APR/2020"],
    "payment status": ["Paid", "Paid on 15/APR/2020"],
    amount: ["$200", "USD"],
  },
  {
    id: "u6",
    name: ["Jaxson Siphron", "example@email.com"],
    "user status": ["Inactive", "Last Login: 14/APR/2020"],
    "payment status": ["Paid", "Paid on 15/APR/2020"],
    amount: ["$750", "USD"],
  },
  {
    id: "u7",
    name: ["Mira Levin", "example@email.com"],
    "user status": ["Active", "Last Login: 14/APR/2020"],
    "payment status": ["Unpaid", "Dues on 15/APR/2020"],
    amount: ["$200", "USD"],
  },
  {
    id: "u8",
    name: ["LincoIn Levin", "example@email.com"],
    "user status": ["Active", "Last Login: 14/APR/2020"],
    "payment status": ["Paid", "Paid on 15/APR/2020"],
    amount: ["$370", "USD"],
  },
  {
    id: "u9",
    name: ["Phillip Saris", "example@email.com"],
    "user status": ["Inactive", "Last Login: 14/APR/2020"],
    "payment status": ["Unpaid", "Dues on 15/APR/2020"],
    amount: ["$200", "USD"],
  },
  {
    id: "u10",
    name: ["Cheyenne Ekstrom Bothman", "example@email.com"],
    "user status": ["Inactive", "Last Login: 14/APR/2020"],
    "payment status": ["Paid", "Paid on 15/APR/2020"],
    amount: ["$150", "USD"],
  },
];
renderTable(users);
function renderTable(users) {
  table.innerHTML = "";
  const headers = Object.keys(users[0]);
  const headerRow = document.createElement("tr");
  headers.shift();

  for (let header of headers) {
    const tableHeader = document.createElement("th");
    headerRow.appendChild(tableHeader);
    tableHeader.textContent = header.toUpperCase();
  }
  table.appendChild(headerRow);

  users.forEach((user) => {
    const objValues = Object.values(user);
    objValues.shift();
    const contentRow = document.createElement("tr");
    objValues.forEach((el) => {
      const tableContent = document.createElement("td");
      contentRow.appendChild(tableContent);
      typeof el === "object"
        ? (tableContent.innerHTML = el.join("<br>"))
        : (tableContent.textContent = el);
    });
    table.appendChild(contentRow);
  });
}

filter.addEventListener("click", (event) => {
  filterCrud.classList.toggle("hidden");
});

function filtereActivedUsers(filterType) {
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
    default:
      filteredUsers = users;
  }
  renderTable(filteredUsers);
}

activeUsers.addEventListener("click", () => filtereActivedUsers("active"));
inactiveUsers.addEventListener("click", () => filtereActivedUsers("inactive"));
allUsers.addEventListener("click", filtereActivedUsers);
