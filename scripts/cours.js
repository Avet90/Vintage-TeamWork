const accButtons = document.getElementsByClassName('card__accordion-button');
const accordions = document.getElementsByClassName('card__accordion-body');

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
