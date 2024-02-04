const share = document.getElementById('share')
const shared = document.getElementById('shared')
const clicked = document.getElementById('clicked')
const footer = document.getElementById('footer')
const icon = document.getElementById('icon')
const icon1 = document.getElementById('icon1')
const handleClick = () => {
  clicked.style.display = 'flex'
  icon1.style.display = 'block'
  icon.style.display = 'none'
}
const handleClick1 = () => {
  clicked.style.display = 'none'
  icon1.style.display = 'none'
  icon.style.display = 'block'
}

share.addEventListener('click', handleClick)
icon1.addEventListener('click', handleClick1)
