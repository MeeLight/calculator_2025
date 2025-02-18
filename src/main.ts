import './styles/main.css'

const results = document.getElementById('results')
const clearCalcBtn = document.querySelector('.clear__calc__btn')
const removeCalcBtn = document.querySelector('.remove__calc__btn')
const calcButtons = document.querySelectorAll('.cacl__btn')
const resultCaclBtn = document.querySelector('.result__calc__btn')

document.addEventListener('DOMContentLoaded', () => {
  const liElement = document.createElement('li')

  liElement.classList.add('calc__result')
  liElement.textContent = '0'

  results?.appendChild(liElement)

  // Funcs
  const calculate = () => {
    try {
      liElement.textContent = eval(liElement.textContent!)
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Oops!', error.message)
      }
    }
  }

  // Events
  calcButtons.forEach(buttonNode => {
    buttonNode.addEventListener('click', (event: any) => {
      if (
        liElement.textContent!.length === 1 &&
        liElement.textContent === '0'
      ) {
        liElement.textContent = event.target.textContent
        return
      }

      liElement.textContent += event.target.textContent
    })
  })

  clearCalcBtn?.addEventListener('click', () => {
    if (liElement.textContent === '') {
      return
    }

    liElement.textContent = '0'
  })

  removeCalcBtn?.addEventListener('click', () => {
    if (liElement.textContent !== null && liElement.textContent!.length >= 1) {
      liElement.textContent = liElement.textContent?.substring(
        0,
        liElement.textContent.length - 1
      )
    }
    
    if (liElement.textContent === '') {
      liElement.textContent = '0'
    }
  })

  resultCaclBtn?.addEventListener('click', () => {
    if (liElement.textContent === '') {
      return
    }

    calculate()
  })
})
