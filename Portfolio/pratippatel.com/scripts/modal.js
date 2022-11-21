$(document).ready(function() {
  // MODAL
  var modalText = {
    discover: {
      title: 'Bike Rental System',
      tag: 'Calculate the number of bike rented.',
      detail:
        'In this project, I have combined historical usage patterns with weather data in order to forecast hourly bike rental demand.',
      link: 'https://github.com/pratippatel/bikerentalproject'
    },
    ordering: {
      title: 'Salary-Prediction Modal',
      tag: 'Predict Salary based on Multiple Factors.',
      detail:
        'To Predict Salary based on the number of years of expierence you possess.',
      link: 'https://github.com/pratippatel/salary-prediction'
    },
    newrelic: {
      title: 'WhatsApp Chat Analysis',
      tag: 'WhatsApp Chat Analysis.',
      detail:
        'Used WhatsApp Chat to predict the sentiment of the chat in terms of positive, negative and neutral.',
      link: ''
    },
    roambi: {
      title: 'Home Automation System',
      tag: 'Home Automation System.',
      detail:
        'To turn on/off multiple LEDs and as well as changing the intensity of the LED.',
      link: ''
    },
    walker: {
      title: 'Tip Calculator',
      tag: 'Tip Calculator Application.',
      detail:
        'Calculating the tip based on the Service provided.',
        link:'https://github.com/pratippatel/Tip-Calculator'
    },
    powur: {
      title: 'Powur.com',
      tag: 'CONSUMER POWERED MARKETING.',
      detail:
        'Powur is a marketing platform for lead generation, recruitment, and team building. Built with Ruby on Rails and Angular-UI. Makes use of Angular-material for front-end visuals. Features complex user tree heiarchy and commission system.',
      link: ''
    },
    mystand: {
      title: 'The Furniture Store',
      tag: 'Ecommerce Furniture Application.',
      detail:
        'A shopping cart that can be used on online shops and E-Commerce sites with Vanilla JS, HTML, and CSS. Implemented features such as Add to Cart, Dynamic Product Filter, Individual Item Description.',
        link:'https://github.com/pratippatel/Shopping-Cart'
    },
    
    never: {
      title: 'Vacation Rental By Owner Prototype',
      tag: 'Rental Application.',
      detail:
        'Built a marketplace that lets the host rent out properties so that guests can search for lodging options using filters based on NodeJs with ExpressJs, NoSQL database, and React Redux framework hosted on AWS Cloud.',
        link:'https://github.com/pratippatel/VRBO-Vacation-Rental-by-Owner-Prototype'
    },
    
    themall: {
      title: 'The Treasure Hunter',
      tag: 'The Treasure Hunter.',
      detail:
        'Modeled character controller movements and interactions (collecting gems and firing bullets) in a single-level 2D platformer game.',
        link:'https://github.com/pratippatel/TresureProject'
    }
  };

  $('#gallery .button').on('click', function() {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function() {
    shiftSlide(-1);
  });
  $('#prev').click(function() {
    shiftSlide(1);
  });

  carousel.on('mousedown', function() {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function() {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function() {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function() {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);

    $.each($('#modal li'), function(index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
    });
  }
});
