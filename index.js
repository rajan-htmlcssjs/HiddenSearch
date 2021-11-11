const searchButton = document.getElementById("searchBtn")
const input = document.getElementById("searchInput")
const container = document.querySelectorAll('.container')

searchButton.addEventListener('click',()=>{
    if(container && container[0]){
        container[0].classList.toggle('active')
    }
    input.focus()
})