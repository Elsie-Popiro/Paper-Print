const search = document.querySelector('.search')
const btn = document.querySelector('.search-btn')
const input = document.querySelector('.input')

btn.addEventListener("click", () =>{
    search.classList.toggle('active')
    input.focus()
})


document.body.addEventListener('touchstart', function(e) {
    e.preventDefault();
  }, { passive: false });
  