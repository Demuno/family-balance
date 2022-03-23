let familyBalance = {
    required: [1, 1, 1, 2],
    expenses: [1, 1, 1, 2]
}

let balance;

function sumTotal(array){
    balance = 0;

    for(let value of array) {
        balance += value;
    }
    return balance;
}

function checkBalance() {
    const calculateRequired = sumTotal(familyBalance.required)
    const calculateExpenses = sumTotal(familyBalance.expenses)
    
    balance = calculateRequired - calculateExpenses;

    const ok = balance >= 0;

    let baseText = 'negativo';

    if (ok>=0) {
        baseText = 'positivo';
    }

    console.log(`Your balance is ${balance} R$: ${baseText}`);

}

checkBalance();
