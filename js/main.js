$(function(){
  $('select').styler();

  $('.header__btn-menu').on('click',function() {
    $('.header__menu-top').slideToggle();
  })
});
