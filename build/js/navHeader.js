// Button menu

const btn = document.querySelector(".nav__btn");
const links = document.querySelector(".b-nav-link");
const exit = document.querySelector("#nav__exit");

btn.addEventListener('click',()=>links.className='b-nav-link link_block');
exit.addEventListener('click',()=>links.className='b-nav-link link_none')