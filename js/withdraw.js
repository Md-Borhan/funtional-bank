
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // collect data from html element
    const newWithdraw = inputFieldValue('withdraw-field')

    const p = document.getElementById('invalid-text2')
    if (isNaN(newWithdraw)) {
        p.innerText = "*Provide Valid Input"
        return
    }
    p.innerText = ""

    const previousWithdraw = getElementText('total-withdraw')

    // minus withdraw amount in balance 
    const previousBalance = getElementText('total-balance')

    if (newWithdraw > previousBalance) {
        alert('Not enough balance!!!')
        return
    }

    const totalWithdraw = previousWithdraw + newWithdraw
    setElementText('total-withdraw', totalWithdraw)

    const newBalance = previousBalance - newWithdraw
    setElementText('total-balance', newBalance)
})