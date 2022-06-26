//code 
fetch('http://localhost:3000/doge')
.then(res => res.json())
.then(dogeData => renderDogeList(dogeData))
.catch (error => {
    alert('JSON server not loaded');
})

function renderDogeList(doges){
    doges.forEach(doge => {
        const dogeList = document.querySelector('.shiba-list')
        const h5 = document.createElement('h5')
        h5.textContent = doge.name
        dogeList.append(h5)

        h5.addEventListener('click', () => renderDogeDetail(doge))
    })
    renderDogeDetail(doges[0])
}

function renderDogeDetail(doge) {
    const dogeImg = document.querySelector('#shiba-image')
    dogeImg.src = doge.imgUrl
}
