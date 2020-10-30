function getWeather() {
    let row = document.createElement('div')
    row.className = 'row container-fluid'
    let counter = 0;
        fetch('http://api.weatherapi.com/v1/forecast.json?key=7ced106c85d04f1daa5103935203010&q=43.2494,26.5727&days=1')
        .then(response => response.json())
        .then(data => {
            data.forecast.forecastday[0].hour.forEach(h => {
                if(counter % 2 != 0) {
                let col = document.createElement('div')
                let hour = h.time.split(' ')[1]
                let tempC = h.temp_c
                let icon = h.condition.icon
                let condition = h.condition.text
                col.className = 'col-md-2 text-light pb-4'
                col.innerHTML = `<div class="text-center">${hour}</div><img src="${icon}" class ="mx-auto d-block"><div class="text-center">${condition}</div><div class="text-center">${tempC}C°</div>`
                row.appendChild(col)
                }
                counter++
            })
        })
        
    return row
}

let btn = document.querySelector('.btn')
    
btn.addEventListener('click', () => {
    let buttondiv = document.querySelector('.buttons')
    let div = getWeather()
    let center = document.querySelector('.center')
    center.style.width = '100%'
    center.appendChild(div)
    buttondiv.style.display = 'none'
})