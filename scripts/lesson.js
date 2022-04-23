const accButtons = document.getElementsByClassName('index__accordion-button');
const accordions = document.getElementsByClassName('index__lessons_position_sidebar');


for (let i = 0; i < accButtons.length; i++) {
  accButtons[i].addEventListener('click', function() {
    const accordion = this.closest('.index__chapter-block_position_sidebar').querySelector('.index__lessons_position_sidebar');
    if (accordion.classList.contains('index__lessons_opened')) {
      accordion.classList.remove('index__lessons_opened');
      this.classList.remove('index__accordion-button_opened');
    } else {
      accordion.classList.add('index__lessons_opened');
      this.classList.add('index__accordion-button_opened');
    }
  });
}
