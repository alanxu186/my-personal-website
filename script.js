//array of doge names and pics
const data = [
    { name: 'Doge', image: 'https://i.pinimg.com/564x/cc/e9/2b/cce92b94514424978c1884f2211252c4.jpg' },
    { name: 'Hemlo', image: 'https://dailytimes247.com/wp-content/uploads/2020/09/funny-photobombing-shiba-inu1.jpg' },
    { name: 'Samurai doge', image: 'https://i.pinimg.com/564x/7e/07/2f/7e072fe75c837142dc011749397e01cb.jpg' },
    { name: 'Chunky', image: 'https://i.pinimg.com/564x/18/3e/8a/183e8ab2887af09a1bd81c7bf770b966.jpg' },
    { name: 'Angry doge', image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cb64d2c6-76b9-483c-854f-12aff4ed7c93/deqrk2a-650b3226-cf26-439b-b8c8-6fd0cd4d0214.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NiNjRkMmM2LTc2YjktNDgzYy04NTRmLTEyYWZmNGVkN2M5M1wvZGVxcmsyYS02NTBiMzIyNi1jZjI2LTQzOWItYjhjOC02ZmQwY2Q0ZDAyMTQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0btVsKiLZ8vTG33GHiAX_JJdEYUvfAeMqJcrPIOedV8' },
]



//code 
const dogeContainer= document.querySelector('#images-container')
const bonkButton = document.querySelector('#bonk-button')
bonkButton.addEventListener('click', () => {
    const doge = data[ Math.floor( Math.random() * data.length ) ]
    const div = document.createElement('div')
    div.className = "doge-pic"
    const h2 = document.createElement('h2')
    h2.textContent = doge.name
    div.append(h2)
    const img = document.createElement('img')
    img.src = doge.image
    div.append(img)
    const removeBtn = document.createElement('button')
    removeBtn.textContent = 'Remove doge'
    div.append(removeBtn)
    
    dogeContainer.append(div)

    removeBtn.addEventListener('click', () => {
        div.remove()
    })

})