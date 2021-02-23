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
   if (!action) {
     console.log('number key!')
   }
   if (
     action === 'add' ||
     action === 'subtract' ||
     action === 'multiply' ||
     action === 'divide'
   ) {
     console.log('operator key!')
   }
   if (action === 'decimal') {
   console.log('decimal key!')
   }
   if (action === 'clear') {
   console.log('clear key!')
   }
   if (action === 'calculate') {
   console.log('equal key!')
  }
 }
})
