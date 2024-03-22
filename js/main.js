// Blur header
const blurHeader =()=>{
      const header = document.getElementById('header');
      this.scrollY >= 50 ? header.classList.add('blur-header'): header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader);

// Active-links
const sections = document.querySelectorAll('section[id]');
const scrollActive = () =>{
      const scrollDown = window.scrollY

      section.forEach(element => {
            const sectionHeight = element.offsetHeight, 
             sectionTop = element.offsetTop - 50,
             sectionId = element.getAttribute('id'),
             sectionClass = document.querySelector('.nav-menu a[href+=' + sectionId + ']')
             if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                  sectionClass.classList.add('.is-active')
             }
             else {
                  sectionClass.classList.remove('.is-active')
             }
      });
}

// Scroll-up
const scrollup =()=>{
      const scrollup = document.getElementById('scrollup');
      this.scrollY >= 350 ? scrollup.classList.add('show-scroll'): scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)

const sr = ScrollReveal({
      origin: 'top',
      distance: '40px',
      opacity: 1,
      scale: 1.1,
      duration: 2500,
      delay: 300,
})
sr.reveal(`.section-description , .about-us-img , .visit-us-data`)

// sr.reveal(`.hero-section-bread img`, {rotate: {z: 15}})
sr.reveal(`.bread-1`, {rotate: {z: 15}})
sr.reveal(`.bread-4`, {rotate: {z: -15}, distance: '0'})
sr.reveal(`.hero-footer`, {scale: 1, origin: 'bottom'})

// sr.reveal(`.bread:nth-child(1) img`, {rotate: {z: -30}, distance: '0'})
// sr.reveal(`.bread:nth-child(2) img`, {rotate: {z: 15}, distance: '0', delay: 600 })
// sr.reveal(`.bread:nth-child(3) img`, {rotate: {z: 10}, distance: '0', delay: 900 })

sr.reveal(`.product-card img`, {interval: 100, rotate: {z: 15}, distance: '0'})
sr.reveal(`.footer`, {scale: 1})

