const updateWordEvent = () => {
 const inputFieldValue = document.querySelector('.inputField').value
 if (inputFieldValue ===inputFieldValue.split('').reverse().join(''))
 return (document.querySelector('.yesOrNo').textContent = 'Yes')
 else (document.querySelector('.yesOrNo').textContent = 'No')
}

const addNewWordEvent = () => {
  const previousInput = document.querySelector('.inputField').value
  document.querySelector('.previousValue').textContent = previousInput
  const previousAnswer = document.querySelector('.yesOrNo').value
  document.querySelector('.previousAnswer').textContent = previousAnswer
}

document.querySelector('.trueOrFalse').addEventListener('click', updateWordEvent)
document.querySelector('.trueOrFalse').addEventListener('click', addNewWordEvent)