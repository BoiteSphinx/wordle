let grid = document.querySelector('#game')

// the number of guesses (3)
let guessesAllowed = 4
// the length of the word (3)
let wordLength = 3


let fragment = document.createDocumentFragment()

let generateGrid = () => {
    // generate 3 rows
    Array.from({ length: guessesAllowed }).forEach(() => {
        let row = document.createElement('div')
        row.classList.add('row')

        // where each row contains 3 columns
        Array.from({ length: wordLength }).forEach(() => {
            let tile = document.createElement('div')
            tile.classList.add('tile')

            row.appendChild(tile)
        })

        fragment.appendChild(row)
    })

    // append to the grid
    grid.appendChild(fragment)
}

// Init
generateGrid()
