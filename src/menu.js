let menuBtn = document.querySelector('.menu-btn')
let closeBtn = document.querySelector('.close-btn')
let mobileMenu = document.querySelector('.mobile-menu')
let links = document.querySelectorAll('.link')

links.forEach((link)=> {
    link.addEventListener('click', ()=>{
        mobileMenu.classList.add('hidden')
        closeBtn.classList.add('hidden')
        menuBtn.classList.remove('hidden')
    })
})

menuBtn.addEventListener('click', () => {
    menuBtn.classList.add('hidden')
    closeBtn.classList.remove('hidden')
    mobileMenu.classList.remove('hidden')
    gsap.fromTo(
        mobileMenu,
        { opacity: 0, y: -50 },
        {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
        }
    );
})

closeBtn.addEventListener('click', () => {
    menuBtn.classList.remove('hidden')
    closeBtn.classList.add('hidden')
    mobileMenu.classList.add('hidden')
    gsap.to(mobileMenu, {
        opacity: 0,
        y: -50,
        duration: 0.4,
        ease: 'power2.in',
        onComplete: () => {
            mobileMenu.classList.add('hidden');
        }
    });
})