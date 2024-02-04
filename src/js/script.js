'use strict'

import {dsplayMenuMobil} from './functionsGloabal.js'

const menuMobil = document.querySelector(".menu-hamburger")
const displayMenu = document.querySelector(".display-menu")
const btnClose = document.querySelector(".btn-close")
const linksPage = document.querySelector(".links-page")
const linkLi = document.querySelectorAll(".link-li")
dsplayMenuMobil(menuMobil,displayMenu,btnClose)

let elementLiAct=""

const activeLinkIndex = localStorage.getItem('activeLinkIndex');

console.log(activeLinkIndex !== null);

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