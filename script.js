//code 
fetch('http://localhost:3000/doge')
.then(res => res.json())
.then(dogeData => renderDogeList(dogeData))

function renderDogeList(doges){
    doges.forEach(doge => {
        const dogeList = document.querySelector('.shiba-list')
        const h5 = document.createElement('h5')
        h5.textContent = doge.name
        dogeList.append(h5)
    })
}