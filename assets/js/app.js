// CABEÇALHO

function scrollHeader() {
    const nav = document.getElementById('header');


    if (this.scrollY >= 50) {
        nav.classList.add("active-header")
    } else {
        nav.classList.remove("active-header")
    }
}

window.addEventListener('scroll', scrollHeader)




// ABRIR FECHAR MENU NAVEGAÇÃO MOBILE

const toggleMobileMenuButton = document.getElementById("bx")
const navMobileMenu = document.querySelector(".menu-mobile")
const mediaQuery = window.matchMedia('(max-width: 960px)');


toggleMobileMenuButton.addEventListener('click', () => {
    toggleMobileMenuButton.classList.toggle('active-bx')
    navMobileMenu.classList.toggle('active-mobile-menu')

    // FECHAR O MENU, QUANDO ABERTO, E ULTRAPASSAR OS 960PX
    mediaQuery.addEventListener("change", (e) => {
        if (!mediaQuery.matches) {
            toggleMobileMenuButton.classList.remove('active-bx')
            navMobileMenu.classList.remove('active-mobile-menu')
        }
    })
})



// ABRIR/FECHAR MENUS DROPDOWN

const navDesktopItem = document.querySelectorAll('.menu-item')
const dropdownMenus = document.querySelectorAll(`.dropdown-menu`);

function closeOpenedDropdown() {
    dropdownMenus.forEach(
        (dropdown) => dropdown.classList.remove('active-dropdown')
    )
}

function showDropdown(parentNavItem) {
    const dropdownMenu = parentNavItem.querySelector('.dropdown-menu')

    dropdownMenu.classList.add('active-dropdown')


    // FECHA O DROPDOWN ABERTO QUANDO O MOUSE NÃO ESTIVER SOBRE O ELEMENTO
    dropdownMenu.addEventListener('mouseleave', () => {
        dropdownMenu.classList.remove('active-dropdown')
    })
}

navDesktopItem.forEach((navItem) => {
    navItem.addEventListener('click', (e) => {
        e.preventDefault()
        closeOpenedDropdown();
        showDropdown(navItem)
    })
})


// ALTERAR VALOR DO SALDO BANCÁRIO NO SVG

// window.onload = () => {
//     const accountBalance = document.querySelector('.account-balance')
//     const newBalance = (Math.floor(Math.random() * (5000 - 1000)) + 1000).toLocaleString('pt-br', { minimumFractionDigits: 2 });;
//     if (accountBalance) accountBalance.innerHTML = `R$ ${newBalance}`
// }