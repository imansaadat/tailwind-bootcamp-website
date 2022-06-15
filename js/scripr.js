const menu = document.querySelector("#menu");
const hamMenu = document.querySelector("#hamMenu");
const header = document.querySelector("#header");
// hamMenu
hamMenu.addEventListener('click', () => {
  menu.classList.toggle('top-0')
  menu.classList.toggle('-top-[100vh]')
  hamMenu.classList.toggle('fa-times')
})

window.addEventListener('scroll',()=>{
  if(window.scrollY > 0){
    menu.classList.remove('top-0')
    menu.classList.add('-top-[100vh]')
    hamMenu.classList.remove('fa-times')
  }
})

 /* accordion */ 
 const accordion = document.querySelectorAll('.accordion_content')
 const arrowIcon = document.querySelectorAll('.arrowIcon')
 accordion.forEach(ac =>{
     ac.addEventListener('click',()=>{
         ac.classList.toggle('active')
     })
 })    


//  modal

const modal = document.querySelector('#modal')
const modalBtn = document.querySelector('#modal_btn')
const closeBtn = document.querySelector('#close_btn')
const modalContent = document.querySelector('#modal_content')

modalBtn.addEventListener('click',()=>{
  modal.classList.toggle('flex')
  modal.classList.toggle('hidden')
})

window.addEventListener('click',(e)=>{
  if(e.target === modal){
    modal.classList.toggle('flex')
    modal.classList.toggle('hidden')
  }
})

closeBtn.addEventListener('click',()=>{
  modal.classList.toggle('flex')
  modal.classList.toggle('hidden')
})
