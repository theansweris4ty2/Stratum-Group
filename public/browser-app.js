// Staff Page Functionality
const staffBios = document.querySelectorAll('.bio')
const hero = document.querySelector('.section.hero')
const reveal = (n, e, el) => {
  e.style.transform = `translateX(${n * 200}%)`
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
staffBios.forEach((bio) =>
  bio.addEventListener('click', (e) => {
    const selection = e.target.closest('div')
    const id = selection.getAttribute('data-id')
    const expand = document.querySelector(`#${id}`)
    expand.classList.toggle('hidden')
    setTimeout(() => reveal(1, expand, expand), 0)
    expand.addEventListener('click', () => {
      reveal(-1, expand, hero)
      setTimeout(() => {
        expand.classList.toggle('hidden')
      }, 1000)
    })
  })
)
