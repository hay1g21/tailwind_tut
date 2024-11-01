const initApp = () => {
    const hBtn = document.getElementById('hamburger-button')
    const mMenu = document.getElementById('mobile-menu')

    toggleMenu = () => {
        mMenu.classList.toggle('hidden')
        mMenu.classList.toggle('flex')
        hBtn.classList.toggle('toggle-btn')
    }

    hBtn.addEventListener('click',toggleMenu)
    mMenu.addEventListener('click',toggleMenu)
}

document.addEventListener('DOMContentLoaded',initApp)