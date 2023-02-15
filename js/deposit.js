document.getElementById('deposit-btn').addEventListener('click', function () {
    // add deposit input amount in deposit text
    const newDeposit = inputFieldValue('deposit-field')

    const p = document.getElementById('invalid-text')
    if (isNaN(newDeposit)) {
        p.innerText = "*Provide Valid Input"
        return
    }
    p.innerText = ""

    const previousDeposit = getElementText('total-deposit')
    const totalDeposit = parseFloat(previousDeposit + newDeposit)
    setElementText('total-deposit', totalDeposit)


    // add deposit amount in balance
    const previousBalance = getElementText('total-balance')
    const totalBalance = previousBalance + newDeposit
    setElementText('total-balance', totalBalance)

})
