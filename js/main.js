let onTopButton = $('.on-top-block');

// Событие скролла наверх
onTopButton.click(() => {
  $('html, body').animate({
    scrollTop: 0
  }, 1000);
});

// Появление кнопки на верх
$(window).scroll(() => {
  if ($(window).scrollTop() > 400) {
    onTopButton.addClass('show-onTop-button');
  } else {
    onTopButton.removeClass('show-onTop-button');
  }
});
