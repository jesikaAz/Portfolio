$(document).ready(function () {

  //Preloader
  $(window).load(function () {
    $('#page-loader').fadeOut(600);
  });
  //fin


  // ********************** NAVBAR ***********************

  // Scroll pour les liens du menu de navigation
  $('a[href^="#formation"], a[href^="#portfolio"], a[href^="#reseaux"], a[href^="#contact"], a[href^="#competence"], a[href^="#profil"], a[href^="#accueil"]').click(function () {
    var the_id = $(this).attr("href");

    $('html, body').animate({
      scrollTop: $(the_id).offset().top
    }, 'slow');
    return false;
  });

  //changement de fond nav au scroll 
  $(window).on('scroll load', function () {
    if ($(window).scrollTop() > 0) {
      $('#menu').removeClass('transparent').addClass('background-nav');
      $('.navbar-nav li').removeClass('lienNavStart').addClass('lienNav');
    } else {
      $('#menu').removeClass('background-nav').addClass('transparent');
      $('.navbar-nav li').removeClass('lienNav').addClass('lienNavStart');
    }
  });

  // Ouvre the sidebar menu
  $("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });

  // Ferme sidebar menu
  $("#menu-close").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });

  //Ferme menu pour ecran reduit lors d'un clic
  $('#sidebar-wrapper ul li a:not(.dropdown-toggle').click(function () {
    $('.navbar-toggle:visible').click();
  });

  //Animation du menu hamburger
  $(".navbar-toggle").on("click", function () {
    $(this).toggleClass("active");
  });

  //Affiche section ouvert dans navbar brand
  $("#menu").on("activate.bs.scrollspy", function () {
    var currentItem = $(".navbar-nav li.active > a").text();
    $("#brand").empty().html(currentItem);
  });


  // *********************** DEBUT WOW ***********************

  //Ajoute wow et animation lorsque l'ecran est superieur a 800px
  if ($(window).width() > 800) {
    $('#profil .container, #competence .container, #formation .container, #reseaux .container').addClass('wow fadeIn');
  } else {
    $('#profil .container, #competence .container, #formation .container, #reseaux .container').removeClass('wow fadeIn');
  }

  if ($(window).width() > 800) {
    $('#formation .espace-formation').addClass('wow fadeInUp');
  } else {
    $('#formation .espace-formation').removeClass('wow fadeInUp');
  }

  //Script pour wow
  var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  });
  wow.init();

  // *********************** FIN WOW ***********************

  // initialise tooltip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });
  //fin

});
