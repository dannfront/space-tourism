'use strict'

import {renderData} from './functionsDestinations.js'
import {dsplayMenuMobil,getData} from './functionsGloabal.js'

export const imgDestination=document.querySelector('.img-destination')
export const about=document.querySelector('.about-destination')
export const title=document.querySelector('.title-destination')
export const distance=document.querySelector('.distance-destination')
export const travel=document.querySelector('.travel-destination')

const linksPage = document.querySelector(".links-page")
const linkLi = document.querySelectorAll(".link-li")
let elementLiAct=""

// Cuando se carga la página, recupera el índice del enlace activo de localStorage
const activeLinkIndex = localStorage.getItem('activeLinkIndex');

const menuMobil = document.querySelector(".menu-hamburger")
const displayMenu = document.querySelector(".display-menu")
const btnClose = document.querySelector(".btn-close")

const destinationsContainer=document.querySelector('.destinations-container')

window.addEventListener('load',async ()=>{
    const [data]=await getData("destinations")
    console.log(data);
    renderData(data)
})

destinationsContainer.addEventListener('click',async (e)=>{
    const destinations=Array.from(document.querySelectorAll('.destinations'))
    const target=e.target
    
    if (!destinations.includes(target)) return

    const index=destinations.indexOf(target)
    const data=await getData('destinations')
    destinations.forEach(el=>el.classList.remove('border-b-2','border-white'))
    target.classList.add('border-b-2','border-white')
    renderData(data[index])
})



if (activeLinkIndex !== null) {
    // Si hay un enlace activo almacenado, añade la clase 'link-page-active' a ese enlace
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

    // Almacena el índice del enlace activo en localStorage
    localStorage.setItem('activeLinkIndex', index);
    
    if (!elementLi.classList.contains('link-page-active')) elementLi.classList.add('link-page-active')

})

dsplayMenuMobil(menuMobil,displayMenu,btnClose)