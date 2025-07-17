document.addEventListener('DOMContentLoaded', ()=>{

    const expenseForm = document.getElementById('expense-form')
    const expenseNameInput = document.getElementById('expense-name')
    const expenseAmountInput = document.getElementById('expense-amount')
    const expenseList = document.getElementById('expense-list')
    const totalAmountDisplay = document.getElementById('total')
    const totalAmount = document.getElementById('total-amount')

    let expenses = []
    let totalAmt = calculateTotal()


    expenseForm.addEventListener('submit', (e)=>{
        e.preventDefault()

        const name = expenseNameInput.value.trim()
        const amount = parseFloat(expenseAmountInput.value.trim())

        if(name !== "" && !isNaN(amount) && amount > 0){
            const newExpense = {
                id: Date.now(),
                name, // name: name -> since key value pairs are same (new JS syntax)
                amount // amount: amount
            }

            expenses.push(newExpense)
            saveExpensesToLocal()
            updateTotal()

            // clear the input
            expenseNameInput.value = ""
            expenseAmountInput.value = ""
        }
    })

    function calculateTotal(){
        return expenses.reduce((sum, expense) => (sum + expense.amount), 0)
    }

    function saveExpensesToLocal(){
        localStorage.setItem('expenses', JSON.stringify(expenses))
    }

    function updateTotal(){
        totalAmt = calculateTotal()
        totalAmount.textContent = totalAmt.toFixed(2)
    }
})