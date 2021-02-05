const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-hamburguer');

console.log(menu)
console.log(hamburguer)

hamburguer.addEventListener('click', ()=>{
menu.classList.toggle("spread");
})

