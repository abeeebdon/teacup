const share = document.getElementById('share')
const shared = document.getElementById('shared')
const clicked = document.getElementById('clicked')
const footer = document.getElementById('footer')
const handleClick = () => {
  clicked.style.display = 'flex'
  footer.style.display = 'none'
}
const handleClick1 = () => {
  clicked.style.display = 'none'
  footer.style.display = 'flex'
}

share.addEventListener('click', handleClick)
shared.addEventListener('click', handleClick1)
