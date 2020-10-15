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

// ===== CARD ELEMENTS =====
const faqItems = document.querySelectorAll('.faqContainer__item')
const chevrons = document.querySelectorAll('.faqContainer__item__chevron');
const faqItemHeaders = document.querySelectorAll('.faqContainer__item__header');

// ===== TOGGLE ACTIVE MODIFIERS =====
for (let i = 0; i < faqItems.length; i++) {
    // listen for clicks on items
    faqItems[i].addEventListener('click', () => {
        chevrons[i].classList.toggle("faqContainer__item__chevron--active")
        faqItemHeaders[i].classList.toggle("faqContainer__item__header--active")
    })
}