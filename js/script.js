let prevScrollpos = 0;
let nav = document.querySelector('nav')
let navbar = document.getElementById('navbar')
let toggler = document.getElementById('navbar-toggler')
let upButton = document.getElementById('up')
let carousel = document.getElementsByClassName('carousel-item')
let caption = document.getElementsByClassName('caption')
let carouselDiv = document.getElementById('carouselCaption')
let carouselID

let colorNav = function(){
    if(window.scrollY > 100){
        nav.classList.add('bg-dark','shadow')
        upButton.style.color = "black"
        upButton.style.backgroundColor = "gold"
    }
    else{
        nav.classList.remove('bg-dark','shadow')
        upButton.style.color = "transparent"
        upButton.style.backgroundColor = "transparent"
    }
}

let hideNavbar = function(){
    let navbarHeight = navbar.offsetHeight
    var nowScrollpos = window.scrollY
    if (nowScrollpos > prevScrollpos){
        navbar.style.top="-" + navbarHeight + "px"
        nav.classList.remove('shadow')
        if(navbarHeight > 200){toggler.click()}
    } else{
        navbar.style.top="0px"
        if(navbarHeight > 200){toggler.click()}
        if(window.scrollY > 100){
            nav.classList.add('shadow')
        }
        else{
            nav.classList.remove('shadow')
        }
    }
    prevScrollpos = nowScrollpos
}

let toggleNavbarColor = function() {
    let navbarHeight = navbar.offsetHeight
    if(navbarHeight < 100){
        nav.classList.add('bg-dark')
        nav.classList.add('shadow')
    } else{
        if(window.scrollY < 100){
            nav.classList.remove('bg-dark')
            nav.classList.remove('shadow')
        }        
    }
    
}

let textIn = function(i){
    carouselDiv.style.backgroundColor = "rgba(0, 0, 0, 0.2)"
    if(carouselID != i){
        if(carouselID != undefined){
            let formerDiv = caption[carouselID]
            formerDiv.classList.add('d-none')
            formerDiv.classList.remove('d-flex')
        }
        let div = caption[i]
        div.classList.remove('d-none')
        div.classList.add('d-flex')
        carouselID = i
    } 
}

for(let i = 0; i < carousel.length; i++){
    carousel[i].addEventListener('mouseover', () => setTimeout(textIn, 500, i))
}

toggler.addEventListener('click', toggleNavbarColor)
window.addEventListener('scroll', colorNav)
window.addEventListener('scroll', hideNavbar)