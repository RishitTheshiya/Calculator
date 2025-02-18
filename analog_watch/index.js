setInterval(setClock,1000)

const hourhand=document.querySelector('[data-hour-hand]')
const minutehand=document.querySelector('[data-minute-hand]')
const secondhand=document.querySelector('[data-second-hand]')

function setClock(){
    const currentDate = new Date()
    const seconds = currentDate.getSeconds() / 60
    const minutes = (seconds + currentDate.getMinutes()) / 60
    const hours = (minutes + currentDate.getHours()) / 12

    setRotation(secondhand, seconds)
    setRotation(minutehand, minutes)
    setRotation(hourhand, hours)
}
function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio*360)
}
setClock()