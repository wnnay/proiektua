let garun = document.querySelector('.garunkant')
let parsedgarun = parseInt(garun.innerHTML)

function incrementGarun() {
    parsedgarun += 1
    garun.innerHTML = parsedgarun
}   