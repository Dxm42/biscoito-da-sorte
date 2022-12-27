let randonNumber = Math.round(Math.random() * 10)
let luckyPhrase = document.querySelector("#luckyPhrase")
let firstArea = document.querySelector(".first-area")
let secondArea = document.querySelector(".second-area")

let btnSort = document.querySelector("#btn-sort")
let btnOpen = document.querySelector("#btn-open")

let phraseDrawn = ["Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
"A vida trará coisas boas se tiver paciência.",
"Demonstre amor e alegria em todas asoportunidades e verá que a paz nasce dentro de si.",
"Não compense na ira o que lhe falta na razão.","Defeitos e virtudes são apenas dois lados da mesma moeda.",
"A maior de todas as torres começa no solo.",
"Não há que ser forte. Há que ser flexível.",
"Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
"Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
"Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.",
"Quem quer colher rosas tem de estar preparado para suportar os espinhos."]


luckyPhrase.innerHTML = `${phraseDrawn[randonNumber]}`

btnSort.addEventListener('click',changeScreen)
btnOpen.addEventListener('click',newPhrase)

function changeScreen (event){
    toggleScreen()
    event.preventDefault()    
}

function newPhrase (event){
    toggleScreen()
    event.preventDefault()
    randonNumber = Math.round(Math.random() * 10)
    luckyPhrase.innerHTML = `${phraseDrawn[randonNumber]}`      
}

function toggleScreen (){
    firstArea.classList.toggle("hide")
    secondArea.classList.toggle("hide")
    
}