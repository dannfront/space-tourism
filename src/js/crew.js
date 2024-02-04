'use strict'

import {getData,dsplayMenuMobil} from'./functionsGloabal.js'

const dots = document.querySelector('.dots')
const imgPerson = document.querySelector('.img-person')
const description = document.querySelector('.description')
const namePerson = document.querySelector('.name-person')
const specialty = document.querySelector('.specialty')

const menuMobil = document.querySelector(".menu-hamburger")
const displayMenu = document.querySelector(".display-menu")
const btnClose = document.querySelector(".btn-close")


const linksPage = document.querySelector(".links-page")
const linkLi = document.querySelectorAll(".link-li")
let elementLiAct=""

// Cuando se carga la página, recupera el índice del enlace activo de localStorage
const activeLinkIndex = localStorage.getItem('activeLinkIndex');

function renderDataCrew(data){
    description.textContent=data.bio
    imgPerson.src=`/space-tourism/starter-code/${data.images.png}`
    namePerson.textContent=data.name
    specialty.textContent=data.role
}

dots.addEventListener('click',async (e)=>{
    const sectionDots=Array.from(document.querySelectorAll('.dot-section'))
    const target=e.target
    if (!sectionDots.includes(target))return
    const index=sectionDots.indexOf(target)
    const data=await getData("crew")
    sectionDots.forEach(el=>el.classList.remove('dots-active'))
    target.classList.add('dots-active')
    console.log(data[index]);
    renderDataCrew(data[index])

})



if (activeLinkIndex !== null) {
    elementLiAct = linkLi[activeLinkIndex];
    elementLiAct.classList.add('link-page-active');
}

linksPage.addEventListener('click',(e)=>{

    const links = Array.from(document.querySelectorAll(".link"))
    const element =e.target
    const arrLi=[...linkLi]
    if(!element.classList.contains('link'))return
    const index=links.indexOf(element)
    const elementLi=arrLi[index]
    if (elementLiAct) elementLiAct.classList.remove('link-page-active')

    elementLiAct=elementLi
    localStorage.setItem('activeLinkIndex', index);
    
    if (!elementLi.classList.contains('link-page-active')) elementLi.classList.add('link-page-active')

})

dsplayMenuMobil(menuMobil,displayMenu,btnClose)
