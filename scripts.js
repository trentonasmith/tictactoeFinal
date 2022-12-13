const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const cellElements = document.querySelectorAll('[data-cell]')
const baord = document.getElementById('baord')
let circleTurn

startGame()

const WINNING_COMBINATIONS = [
    [0, 1, 2]
    [3, 4, 5]
    [6, 7, 8]
    [0, 3, 6]
    [1, 4, 7]
    [2, 5, 8]
    [0, 4, 8]
    [2, 4, 6]
]

function startGame() {
    circleTurn = false
    cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, {once: true})
})
setBoardHoverClass()
}


function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    placeMark(cell, currentClass)

    // Check For Win
    // Check For Draw
    // Switch Turns
    swapTurns()
    setBoardHoverClass()

}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurns() {
    circleTurn = !circleTurn
}

function setBoardHoverClass() {
    baord.classList.remove(X_CLASS)
    baord.classList.remove(CIRCLE_CLASS)
    if (circleTurn) {
        baord.classList.add(CIRCLE_CLASS)
    } else {
        baord.classList.add(X_CLASS)
    }
    }

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combinations => {
        return combinations.every(index => {
            return cellElements[index].classList.contains(currentClass)
        }
            )
    })
}
