// Get elements

const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expenseCategory = document.getElementById("expenseCategory");
const addExpenseBtn = document.getElementById("addExpenseBtn");

const expenseList = document.getElementById("expenseList");
const totalAmount = document.getElementById("totalAmount");

// Store expenses

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

/*
    Save expenses to Local Storage
*/
function saveExpenses() {
    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
    );
}

/*
    Calculate total expenses
*/
function updateTotal() {

    const total = expenses.reduce(
        (sum, expense) => sum + expense.amount,
        0
    );

    totalAmount.textContent = `£${total.toFixed(2)}`;
}

/*
    Render expenses on screen
*/
function renderExpenses() {

    expenseList.innerHTML = "";

    expenses.forEach((expense) => {

        const li = document.createElement("li");
        li.classList.add("expense-item");

        li.innerHTML = `
            <div class="expense-details">
                <h3>${expense.name}</h3>
                <p>
                    Category: ${expense.category}
                </p>
                <p>
                    Amount: £${expense.amount.toFixed(2)}
                </p>
            </div>

            <button
                class="delete-btn"
                onclick="deleteExpense(${expense.id})"
            >
                Delete
            </button>
        `;

        expenseList.appendChild(li);
    });

    updateTotal();
}

/*
    Add new expense
*/
function addExpense() {

    const name = expenseName.value.trim();
    const amount = parseFloat(expenseAmount.value);
    const category = expenseCategory.value;

    if (
        name === "" ||
        isNaN(amount) ||
        amount <= 0 ||
        category === ""
    ) {
        alert("Please fill all fields correctly.");
        return;
    }

    const expense = {
        id: Date.now(),
        name,
        amount,
        category
    };

    expenses.push(expense);

    saveExpenses();
    renderExpenses();

    // Clear form

    expenseName.value = "";
    expenseAmount.value = "";
    expenseCategory.value = "";
}

/*
    Delete expense
*/
function deleteExpense(id) {

    expenses = expenses.filter(
        expense => expense.id !== id
    );

    saveExpenses();
    renderExpenses();
}

// Button click event

addExpenseBtn.addEventListener(
    "click",
    addExpense
);

// Initial render

renderExpenses();