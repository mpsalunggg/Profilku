function navbar(){
    const menu = document.querySelector('.hamburger .input1')
    const nav = document.querySelector('header nav ul')

    menu.addEventListener('click', function () {
        nav.classList.toggle('active')
    })

    const link = document.querySelectorAll('header nav ul li a')
    if(link != null){
        for (let i = 0; i < link.length; i++) {
            link[i].addEventListener('click', function () {
                nav.classList.remove('active')
            })
        }
    }
}
navbar()
