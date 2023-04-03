const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,

})
sr.reveal(`.left-side`)
sr.reveal(`.home__img`, { delay: 500 })
sr.reveal(`.about-text`, { origin: 'right' })
sr.reveal(`.about_img`, { origin: 'left' })
sr.reveal(`.white-box`)
sr.reveal(`.item`)



