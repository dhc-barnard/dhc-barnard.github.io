// calculator attempt
// following https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/

const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = document.querySelector('.calculator__display')

keys.addEventListener('click', e => {
 if (e.target.matches('button')) {
   const key = e.target
   const action = key.dataset.action
   const keyContent = key.textContent
   const displayedNum = display.textContent
   const previousKeyType = calculator.dataset.previousKeyType

   const calculate = (n1, operator, n2) => {
     // Perform calculation and return calculated value
     let result = ''

     if (operator === 'add') {
       result = parseFloat(n1) + parseFloat(n2)
     } else if (operator === 'subtract') {
       result = parseFloat(n1) - parseFloat(n2)
     } else if (operator === 'multiply') {
       result = parseFloat(n1) * parseFloat(n2)
     } else if (operator === 'divide') {
       result = parseFloat(n1) / paseFloat(n2)
     }

     return result
   }

   if (!action) {
    if (displayedNum === '0' ||
     previousKeyType === 'operator' ||
     previousKeyType === 'calculate'
    ) {
       display.textContent = keyContent
     } else {
       display.textContent = displayedNum + keyContent
     }
     calculator.dataset.previousKey = 'number'
   }

   if (
     action === 'add' ||
     action === 'subtract' ||
     action === 'multiply' ||
     action === 'divide'
   ) {
     const firstValue = calculator.dataset.firstValue
     const operator = calculator.dataset.operator
     const secondValue = displayedNum

     if (
       firstValue &&
       operator &&
       previousKeyType !== 'operator' &&
       previousKeyType !== 'calculate'
     ) {
       const calcValue = calculate(firstValue, operator, secondValue)
       display.textContent = calcValue

       // Update claculated value as firstValue
       calculator.dataset.firstValue = calcValue
     } else {
       // If there are no calculations, set displayedNum as firstValue
       calculator.dataset.firstValue = displayedNum
     }

   key.classList.add('is-depressed')
     // Add custom attribute
     calculator.dataset.previousKeyType = 'operator'
     calculator.dataset.operator = action
   }

   if (action === 'decimal') {
     // Do nothing if string has a dot
      if (!displayedNum.includes('.')) {
        display.textContent = displayedNum + '.'
      } else if (
        previousKeyType === 'operator' ||
        previousKeyType === 'calculate'
      ) {
        display.textContent = '0.'
      }
      calculator.dataset.previousKeyType = 'decimal'
   }

   // Do nothing if string has a dot
   if (!displayedNum.includes('.')) {
     display.textContent = displayedNum + '.'
   }

   if (action === 'clear') {
     if (key.textContent === 'AC') {
       calculator.dataset.firstValue = ''
       calculator.dataset.modValue = ''
       calculator.dataset.operator = ''
       calculator.dataset.previousKeyType = ''
     } else {
       key.textContent = 'AC'
     }
     display.textContent = 0
     calculator.dataset.previousKeyType = 'clear'
   }

   if (action !== 'clear') {
     const clearButton = calculator.querySelector('[data-action=ckear]')
     clearButton.textContent = 'CE'
   }

   if (action === 'calculate') {
     let firstValue = calculator.dataset.firstValue
     const operator = calculator.dataset.operator
     const secondValue = displayedNum

   if (firstValue) {
     if (previousKeyType === 'calculate') {
       firstValue = displayedNum
       secondValue - calculator.dataset.modValue
     }
  display.textContent = calculate(firstValue, operator, secondValue)
  }
    // Set modValue attribute
     calculator.dataset.modValue = secondValue
     calculator.dataset.previousKeyType = 'calculate'
  }

  Array.from(key.parentNode.children)
     .forEach(k => k.classList.remove('is-depressed'))
 }
})
