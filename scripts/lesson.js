const accButtons = document.getElementsByClassName('index__accordion-button');
const accordions = document.getElementsByClassName('index__lessons_sidebar');


for (let i = 0; i < accButtons.length; i++) {
  if (accordions[i].classList.contains('index__lessons_opened')) {
      accordions[i].style.maxHeight = accordions[i].scrollHeight + 'px';
      accordions[i].closest('.index__chapter-block_sidebar').style.rowGap = '32px';
      accButtons[i].style.background = 'url(../../../images/icon_arrow-up.svg)';
  }
  else {
    accordions[i].closest('.index__chapter-block_sidebar').style.rowGap = '0';
    accButtons[i].style.background = 'url(../../../images/icon_arrow-down.svg)';
  }
  accButtons[i].addEventListener('click', function() {
    const accordion = this.closest('.index__chapter-block_sidebar').querySelector('.index__lessons_sidebar');
    accordion.style.transition = 'all 0.2s ease-out';
    if (accordion.style.maxHeight) {
      accordion.style.maxHeight = null;
      this.closest('.index__chapter-block_sidebar').style.rowGap = '0';
      this.style.background = 'url(../../../images/icon_arrow-down.svg)';
    } else {
      accordion.style.maxHeight = accordion.scrollHeight + 'px';
      this.closest('.index__chapter-block_sidebar').style.rowGap = '32px';
      this.style.background = 'url(../../../images/icon_arrow-up.svg)';
    }
  });
}
