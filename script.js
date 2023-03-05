let Container = document.querySelector('.container-1')
let container = document.querySelector('container-2')
let h3 = document.querySelector('h3')
let h2 = document.querySelector('h2')
let p = document.querySelector('p')
let h21 = document.querySelector('h2')
let section = document.querySelector('section-2')
let ul = document.querySelector('ul')
let li = document.querySelector('li')
let form = document.querySelector('form')
let input = document.querySelector('input')
let h4 = document.querySelector('h4')
let img = document.querySelector('img')
let humidity = document.getElementById("texts")
let Rollings = document.getElementById('#face')
let ultra = document.getElementById('#Uv')
let wind = document.getElementById('#Degree')

// console.log(li)
async function getData (e){
    e.preventDefault()
    try{
        const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=b722eb4552a64e6d8b892440232702&q=${input.value}&aqi=no`)
    const data = await res.json()
    let temp = data.current.temp_c
    h2.innerText = `${temp}°C`
    let city = data.location.name
    p.innerText = city   
    console.log(data) 
    let country = data.location.country
    h3.innerText =country
    let dates = data.location.localtime
    h4.innerText = dates
    let icon = data.current.condition.icon
    img.setAttribute("src" , `https:${icon}`)
    let humpy = data.current.humidity
    humidity.innerText = humpy
    let insta = data.current.pressure_mb
    face.innerText = insta
    let ultra = data.current.uv
    Uv.innerText = ultra
    let winds = data.current.wind_degree
    Degree.innerText = winds

    }
    catch(error){
        // window.alert("enter valid city")
    }
form.reset()
    
} 

form.addEventListener("submit", getData)
