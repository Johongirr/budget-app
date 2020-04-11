const formBalance = document.getElementById('balance');
const formExpense = document.getElementById('expenses');
const balanceText = document.querySelector('.balance-text');
const budgetText = document.querySelector('.budget-text');
const expensesAmount = document.querySelector('.expenses-amount');
const expenseTitle = document.querySelector('.expense-title-container');
const expenseAmount = document.querySelector('.expense-amount-container');
const expenseDelete = document.querySelector('.expense-delete-container');

function addBalance(e){
    e.preventDefault();
    const balanceInput = document.querySelector('.balance-input')
    balanceText.textContent =`${ balanceInput.value}`;
    budgetText.textContent = `${ balanceInput.value}`;

    balanceInput.value = '';
}


function addExpenses(e){
    e.preventDefault();
    const expenseTitleInput = document.querySelector('.expense-title');
    const expenseAmountInput = document.querySelector('.expense-amount');
    // adding expenses
    expensesAmount.textContent = parseInt(expensesAmount.textContent) + parseInt(expenseAmountInput.value);
    // creating elements
    createElements(expenseTitleInput.value,expenseAmountInput.value)
    // calculate 
    calculateNewBalance(parseInt(expenseAmountInput.value));
    expenseTitleInput.value = '';
    expenseAmountInput.value = '';
}

function createElements(title,amount){
    
    const para1 = document.createElement('p');
    para1.classList.add('text-danger')
    para1.textContent = title;
    expenseTitle.appendChild(para1)

    const para2 = document.createElement('p');
    para2.classList.add('text-danger');
    para2.textContent = `$${amount}`
    expenseAmount.appendChild(para2);

    const deleteBtn = document.createElement('a')
    deleteBtn.setAttribute('href','#')
    deleteBtn.classList.add('btn')
    deleteBtn.classList.add('btn-danger');
    deleteBtn.classList.add('d-block');
    deleteBtn.classList.add('mb-4')
    deleteBtn.textContent = 'DELETE'; 
    expenseDelete.appendChild(deleteBtn);
    
}

function calculateNewBalance(expense){
   
    balanceText.textContent = parseInt(balanceText.textContent) - parseInt(expense)
}

function resizeElements(e){
    console.log(e.target.innerWidth)
}



formBalance.addEventListener('submit', addBalance)
formExpense.addEventListener('submit', addExpenses)
window.addEventListener('resize', resizeElements)