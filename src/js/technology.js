'use strict'

import {getData,dsplayMenuMobil} from './functionsGloabal.js'

const imagePreview=document.querySelector('.image-preview')
const name=document.querySelector('.name')
const description=document.querySelector('.description')
const sections=document.querySelectorAll('.sections')
const sectionsTech=document.querySelector('.section-technology')

const linksPage = document.querySelector(".links-page")
const linkLi = document.querySelectorAll(".link-li")

const menuMobil = document.querySelector(".menu-hamburger")
const displayMenu = document.querySelector(".display-menu")
const btnClose = document.querySelector(".btn-close")

const data=await getData('technology')

console.log(data);


sectionsTech.addEventListener('click',async (e)=>{
    const arrSections=Array.from(sections)
    const target=e.target
    const imgRes=window.innerWidth>=1024?'portrait':'landscape'
    if(!arrSections.includes(target))return
    const data=await getData('technology')
    const index=arrSections.indexOf(target)
    arrSections.forEach(el=>{
        el.classList.add('border-opacity')
        el.classList.remove('border-active')
    })
    target.classList.add('border-active')
    
    imagePreview.src=`../../starter-code/${data[index].images[imgRes]}`
    name.textContent=data[index].name
    description.textContent=data[index].description
    console.log(window.innerWidth);
})

window.addEventListener('load',()=>{
    console.log('dmsdm');
    if (window.innerWidth>=1024){
        console.log('nkn');
        imagePreview.src=`../../starter-code/assets/technology/image-launch-vehicle-portrait.jpg`
    }else if(window.innerWidth <= 1024){
        imagePreview.src = '../../starter-code/assets/technology/image-launch-vehicle-landscape.jpg';

    }
})



window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        console.log('23');
        imagePreview.src = '../../starter-code/assets/technology/image-launch-vehicle-portrait.jpg';
    }else if(window.innerWidth < 1024){
        imagePreview.src = '../../starter-code/assets/technology/image-launch-vehicle-landscape.jpg';

    }
});


let elementLiAct=""

// Cuando se carga la página, recupera el índice del enlace activo de localStorage
const activeLinkIndex = localStorage.getItem('activeLinkIndex');

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