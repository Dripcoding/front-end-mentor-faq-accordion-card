// // images
// import bgPatternDesktop from './assets/images/bg-pattern-desktop.svg'
// import bgPatternMobile from './assets/images/bg-pattern-mobile.svg'
// import chevron from './assets/images/icon-arrow-down.svg'
// import boxDesktop from './assets/images/illustration-box-desktop.svg'
// import womanOnlineDesktop from './assets/images/illustration-woman-online-desktop.svg'
// import womanOnlineMobile from './assets/images/illustration-woman-online-mobile.svg'
// styles
import './styles/reset.scss'
import './styles/main.scss'

// ===== ADD CHEVRON ACTIVE STYLES =====
const chevron = document.querySelectorAll('.faqContainer__item__chevron');
chevron.forEach(c => {
    c.addEventListener('click', () => {
        c.classList.toggle("faqContainer__item__chevron--active")
    })
});
