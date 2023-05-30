"use strict" 



const hamburgerIcon = document.querySelector(`.hamburger`)
const Nav = document.querySelector(`nav`)
const closeIcon = document.querySelector(`.close_icon`)
const NavStatus = false

hamburgerIcon.onclick = () => {

    if(NavStatus === false) {
    Nav.style.display = `flex`
    hamburgerIcon.style.display = `none`
    closeIcon.style.display = `block`
        NavStatus = true
    } else {
        Nav.style.display = `none`
        hamburgerIcon.style.display = `block`
        closeIcon.style.display = `block`
        NavStatus = false
    }

}

closeIcon.onclick = () => {
    Nav.style.display = `none`
    hamburgerIcon.style.display = `block`
    closeIcon.style.display = `none`
}

