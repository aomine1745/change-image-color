const bg = document.querySelector('.bg')
const img = document.querySelector('img')

bg.style.width = img.width + 'px'
bg.style.height = img.height + 'px'

function randomColor () {
	return Math.floor(Math.random() * 255)
}

bg.addEventListener('click', () => {
	bg.style.backgroundColor = `rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, ${randomColor()})`
})