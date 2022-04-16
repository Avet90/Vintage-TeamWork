const accButtons = document.getElementsByClassName('card__accordion-button');
const accordions = document.getElementsByClassName('card__accordion-body');

const faqButtons = document.getElementsByClassName('faq__accordion-button');

for (let i = 0; i < accButtons.length; i++) {
  accordions[i].style.paddingTop = '32px';
  accordions[i].style.maxHeight = accordions[i].scrollHeight + 'px';
  accButtons[i].addEventListener('click', function() {
    const accordion = this.closest('.card').querySelector('.card__accordion-body');
    accordion.style.transition = 'all 0.2s ease-out';
    if (accordion.style.maxHeight) {
      accordion.style.paddingTop = null;
      accordion.style.maxHeight = null;
      this.textContent = 'Развернуть';
    } else {
      accordion.style.paddingTop = '32px';
      accordion.style.maxHeight = accordion.scrollHeight + 'px';
      this.textContent = 'Свернуть';
    }
  });
}

for (let i = 0; i < faqButtons.length; i++) {
  faqButtons[i].addEventListener('click', function() {
    const mainAccordion = this.closest('.card__accordion-body');
    const faqAccordion = this.closest('.faq__question').querySelector('.faq__accordion-body');
    if (faqAccordion.style.maxHeight) {
      faqAccordion.style.paddingTop = null;
      faqAccordion.style.maxHeight = null;
      this.style.transform = null;
    } else {
      faqAccordion.style.paddingTop = '32px';
      mainAccordion.style.maxHeight = (mainAccordion.scrollHeight + faqAccordion.scrollHeight) + 'px';
      faqAccordion.style.maxHeight = faqAccordion.scrollHeight + 'px';
      this.style.transform = 'rotate(180deg)';
    }
  });
}
