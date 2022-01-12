const timer = document.querySelector('#time span')

setInterval(() => {
	timer.innerText = new Date().toLocaleString()
}, 1000)
.items-3{
    height: 150px;
}
.items-4{
    font-size: 100px;
}