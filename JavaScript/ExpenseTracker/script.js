document.addEventListener('DOMContentLoaded', () => {

    const expenseForm = document.getElementById('expense-form')
    const expenseNameInput = document.getElementById('expense-name')
    const expenseAmountInput = document.getElementById('expense-amount')
    const expenseList = document.getElementById('expense-list')
    const totalAmountDisplay = document.getElementById('total')
    const totalAmount = document.getElementById('total-amount')

    let expenses = JSON.parse(localStorage.getItem('expenses')) || []
    if (!Array.isArray(expenses)) {
        expenses = []
    }

    let totalAmt = calculateTotal()

    renderExpenses()
    updateTotal()

    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const name = expenseNameInput.value.trim()
        const amount = parseFloat(expenseAmountInput.value.trim())

        if (name !== "" && !isNaN(amount) && amount > 0) {
            const newExpense = {
                id: Date.now(),
                name, // name: name -> since key value pairs are same (new JS syntax)
                amount // amount: amount
            }

            expenses.push(newExpense)
            saveExpensesToLocal()
            renderExpenses()
            updateTotal()

            // clear the input
            expenseNameInput.value = ""
            expenseAmountInput.value = ""
        }
    })

    function renderExpenses() {
        expenseList.innerHTML = ""

        expenses.forEach(expense => {
            const expenseDiv = document.createElement('div')
            expenseDiv.classList.add('expense-div')

            expenseDiv.innerHTML = `
            ${expense.name} - Rs.${expense.amount}
            <button class="expense-div-btn" data-id="${expense.id}">Delete</button>
            `

            expenseList.appendChild(expenseDiv)

            expenseDiv.addEventListener('click', (e) => {
                if (e.target.tagName === 'BUTTON') {
                    const expenseId = parseInt(e.target.getAttribute('data-id'))
                    expenses = expenses.filter(i => i.id !== expenseId)

                    saveExpensesToLocal()
                    updateTotal()
                    renderExpenses()
                }
            })
        })
    }

    function calculateTotal() {
        console.log("Current expenses:", expenses);
        console.log("Type of expenses:", typeof expenses);

        return expenses.reduce((sum, expense) => (sum + expense.amount), 0)
    }

    function saveExpensesToLocal() {
        localStorage.setItem('expenses', JSON.stringify(expenses))
    }

    function updateTotal() {
        totalAmt = calculateTotal()
        totalAmount.textContent = totalAmt.toFixed(2)
    }
})