function inputFieldValue(inputFieldId) {
    const inputData = document.getElementById(inputFieldId)
    const inputValue = parseFloat(inputData.value)
    inputData.value = ''
    return inputValue
}

function getElementText(elementId) {
    const elementData = document.getElementById(elementId)
    const elementValue = parseFloat(elementData.innerText)
    return elementValue
}

function setElementText(elementTextId, newValue) {
    const elementText = document.getElementById(elementTextId)
    elementText.innerText = newValue
}