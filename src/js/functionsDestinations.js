import {about,title,distance,travel,imgDestination} from './destination.js'


export function renderData(data){
    imgDestination.src=`/space-tourism/starter-code/${data.images.png}`
    about.textContent=data.description
    title.textContent=data.name
    travel.textContent=data.travel
    distance.textContent=data.distance
}
