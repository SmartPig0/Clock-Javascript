let clockContainer = document.querySelector('.container-clock')

const updateClock = () => {
    const data = new Date()
    const hours = data.getHours()
    const minutes = data.getMinutes()
    const seconds = data.getSeconds()

    const clock = hours +':'+ minutes +':'+ seconds
    
    clockContainer.innerHTML = "<span>" + clock + "</span>"

}

setInterval(updateClock, 1000)  