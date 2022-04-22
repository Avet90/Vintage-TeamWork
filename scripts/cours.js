const accButtons = document.getElementsByClassName('card__accordion-button');
const accordions = document.getElementsByClassName('card__accordion-body');

const faqButtons = document.getElementsByClassName('faq__accordion-button');

for (let i = 0; i < accButtons.length; i++) {
  accordions[i].classList.add('card__accordion-body_opened');
  accButtons[i].addEventListener('click', function(evt) {
    const accordion = this.closest('.card').querySelector('.card__accordion-body');
    if (accordion.classList.contains('card__accordion-body_opened')) {
      accordion.classList.remove('card__accordion-body_opened');
      this.textContent = 'Развернуть';
    } else {
      accordion.classList.add('card__accordion-body_opened');
      this.textContent = 'Свернуть';
    }
  });
}

for (let i = 0; i < faqButtons.length; i++) {
  faqButtons[i].addEventListener('click', function() {
    const faqAccordion = this.closest('.faq__question').querySelector('.faq__accordion-body');
    if (faqAccordion.classList.contains('faq__accordion-body_opened')) {
      this.classList.remove('faq__accordion-button_opened');
      faqAccordion.classList.remove('faq__accordion-body_opened');
    } else {
      this.classList.add('faq__accordion-button_opened');
      faqAccordion.classList.add('faq__accordion-body_opened');
    }
  });
}
