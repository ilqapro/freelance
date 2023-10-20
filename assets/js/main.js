$(function() {
  let htmlWidth = $('html').width();
  let headerHeight = $('.header').outerHeight();
  let windowHeight = $(window).height();

  $('body').on('click', '[data-open_popup]', function(e) {
    e.preventDefault()
    $('.popup.active').removeClass('active')
    $('.popup#' + $(this).data('open_popup')).addClass('active')
  })

  $('body').on('click', '.popup-close', function() {
    $(this).closest('.popup').removeClass('active')
  })

  $('body').on('click', 'a[href^="#"]', function(e) {
    e.preventDefault();

    let href = $(this).attr('href');
    if( href.length < 2 ) return;

    let $block = $(href);
    if( ! $block.length ) return;

    $('html, body').stop().animate({
      scrollTop: $block.offset().top
    })
  })

  $('.reviews-swiper').each(function(i, e) {
    let
      swiper = $(e).find('.swiper')[0],
      arrow_prev = $(e).find('.swiper-arrow.prev')[0],
      arrow_next = $(e).find('.swiper-arrow.next')[0];

    new Swiper(swiper, {
      navigation: {
        prevEl: arrow_prev,
        nextEl: arrow_next,
      },
      breakpoints: {
        0: {
          slidesPerView: 1.3,
        },
        576: {
          slidesPerView: 1,
        }
      }
    });
  })

  $('.aboutSystem-control').on('click', 'button', function() {
    $(this).closest('.aboutSystem-control').find('.active').removeClass('active')
    $(this).addClass('active')

    let index = $('button').index($(this)) - 2;

    $('.aboutSystem-slider').find('.active').removeClass('active')
    $('.aboutSystem-slide').eq(index).addClass('active')
  })
  $('.aboutSystem-control button').first().click()

  $('.input-control').on('click', function() {
    $(this).toggleClass('visible')

    let input_type = $(this).hasClass('visible') ? 'text' : 'password';
    $(this).parent().find('input').attr('type', input_type)
  })

  $('.dealInfo-chat-box').each(function(i, e) {
    let $block = $(e);
    $block.scrollTop($block.prop('scrollHeight'))
  })

  $('.paymentsHistory-list-control button').on('click', function() {
    $(this).parent().find('.active').removeClass('active')
    $(this).addClass('active');

    let index = $(this).index();
    $('.paymentsHistory-list-section.active').removeClass('active')
    $('.paymentsHistory-list-section').eq(index).addClass('active')

  }).first().click()

  $('.header-accountControl-userMenu').on('click', function() {
    $(this).toggleClass('active')
  })

  $('.header-burger').on('click', function() {
    $(this).toggleClass('active')
    $('.header-menu').toggleClass('active')
  })

  if( htmlWidth <= 768 ) {
    $('.header-accountControl .item').each(function(i, e) {
      let item = '<li>' + e.outerHTML + '</li>';
      $('.header-menu ul').append(item)
    })
    $('.header-menu').css({
      'top': headerHeight,
      'height': windowHeight - headerHeight
    })
  }

  if( htmlWidth <= 576 ) {
    let dealInfo_progress_button = $('.dealInfo-progress-wrapper .button-border').prop('outerHTML');
    $('.dealInfo-control-buttons').prepend(dealInfo_progress_button);

    $('body').removeClass('do-css-hover')
  }
})