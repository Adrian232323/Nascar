const nav = document.querySelector('.nav-mobile')
const navBTN = document.querySelector('.burger-btn')
const allIinks = document.querySelectorAll('.nav-item')
const navBtnBars = document.querySelector('.burger-btn-bars')


const accordion = document.querySelector('.accordion')
const accordionBtns = document.querySelectorAll('.accordion-btn')





const footerYear = document.querySelector('.footer-year')

const handleNAv = () => {
    nav.classList.toggle('nav-active')
    allIinks.forEach(item => {
        item.addEventListener('click', () =>
        nav.classList.remove('nav-active'))
    })
    
    handleNavItemsAnimation();
   
}

const handleNavItemsAnimation = () => {
    let delayTime = 0;

    allIinks.forEach(item => {
        item.classList.toggle('nav-items-animation')

        item.style.animationDelay = '.' + delayTime + 's'; 
        delayTime++;
    })
}




function openAccordionItems() {
    if( this.nextElementSibling.classList.contains('accordion-active')){
        this.nextElementSibling.classList.remove('accordion-active')
    }
    else{
        closeAccordionItems()
        this.nextElementSibling.classList.toggle('accordion-active')
    }
   
   
}


const closeAccordionItems = () => {
    const allActiveItems = document.querySelectorAll('.accordion-info')
    allActiveItems.forEach(item => item.classList.remove('accordion-active'))
}


const clickOutsideAccordion = e => {
    if (
        e.target.classList.contains('accordion-btn') ||
        e.target.classList.contains('accordion-info') ||
        e.target.classList.contains('accordion-info-text')
    )
    return
    closeAccordionItems()
}






















const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

navBTN.addEventListener('click', handleNAv)
accordionBtns.forEach(btn => btn.addEventListener('click', openAccordionItems))
window.addEventListener('click', clickOutsideAccordion)



handleCurrentYear();