const toggleMenu = function () {
    document.querySelector("#primaryNav").classList.toggle("open")
    document.querySelector("#hamburgerBtn").classList.toggle("open")

}

const x = document.querySelector("#hamburgerBtn")
x.onclick = toggleMenu;