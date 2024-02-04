

export function dsplayMenuMobil(menuMobil,displayMenu,btnClose){
    menuMobil.addEventListener('click', () => {
        displayMenu.classList.toggle('hidden')
    })
    
    btnClose.addEventListener('click',()=>{
        displayMenu.classList.add('hidden')
    })
}

export async function getData(position) {
    try {
       const data = await fetch('/space-tourism/starter-code/data.json')
        const dataObj=await data.json()
        return dataObj[position]
    } catch (error) {
        console.log(error.messague);
    }
}
