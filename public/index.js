// styles
import './styles/reset.scss'
import './styles/main.scss'

// ===== CARD ELEMENTS =====
const faqItems = document.querySelectorAll('.faqContainer__item')
const chevrons = document.querySelectorAll('.faqContainer__item__chevron');
const faqItemHeaders = document.querySelectorAll('.faqContainer__item__header');
const faqItemAnswers = document.querySelectorAll('.faqContainer__item__answer')

// ===== TOGGLE ACTIVE MODIFIERS =====
for (let i = 0; i < faqItems.length; i++) {
    // listen for clicks on items
    faqItems[i].addEventListener('click', () => {
        chevrons[i].classList.toggle("faqContainer__item__chevron--active")
        faqItems[i].classList.toggle("faqContainer__item--active")
        faqItemHeaders[i].classList.toggle("faqContainer__item__header--active")
        faqItemAnswers[i].classList.toggle("faqContainer__item__answer--active")
    })
}
