$(".hamburger").click(function () {
    $(this).toggleClass("is-active");
    if ($(".menu").css("display") == "none") {
        $(".menu").css({"display": "flex"});
        $("body").css({"overflow": "hidden"});
    } else {
        $(".menu").css({"display": "none"});
        $("body").css({"overflow": "auto"});

    }
});
$(".menu-item-science").click(function () {
    $(this).find("i").toggleClass("fa-caret-down").toggleClass("fa-caret-up");
    $(".menu-science-subitems").fadeToggle();
});


$(".menu-item-science-mobile").click(function(e){
    e.preventDefault();
    $(this).find("i").toggleClass("fa-angle-down").toggleClass("fa-angle-up");
    $(".menu-science-subitems-mobile").fadeToggle();
});

$(".dropdown-btn").on("click", function () {
    var dropdown = $(".dropdown-content");
    if ($(".mobile").css("display") == "none") {
        dropdown.fadeToggle();
    } else {
        if (dropdown.css("display") == "none") {
            dropdown.css({"display": "block"});
            dropdown.animate({"right": "0"}, 500);
        } else {
            dropdown.animate({"right": "-350px"}, 500, function () {
                dropdown.css({"display": "none"});
            });
        }
    }


});
window.onclick = function (event) {
    if (!(event.target.matches('.dropdown-btn')
        || event.target.matches(".fa-heart")
        || event.target.matches(".dropdown-content")
        || event.target.matches(".dropdown-content-share-it")
        || event.target.matches(".dropdown-content-subscribe, .dropdown-content-subscribe h2, .dropdown-content-subscribe p, .dropdown-content-subscribe input, .dropdown-content-subscribe button")
        || event.target.matches(".dropdown-content div, .dropdown-content a")
        || event.target.matches(".share-it-icons"))) {
        var dropdown = $(".dropdown-content");
        if ($(".mobile").css("display") == "none") {
            dropdown.fadeOut();
        } else {
            if (dropdown.css("display") == "block") {
                dropdown.animate({ "right": "-350px" }, 1000, function () {
                    dropdown.css({ "display": "none" });
                });
            }
        }
    }
}

$('.change-img1').waypoint(function() {
    $('.change-img1').css({
    animation: "blinker 16s",
    animationFillMode: "both"
    });
}, { offset: '75%' });

$('.change-img').waypoint(function() {
    $('.change-img').css({
    animation: "blinker 16s",
    animationFillMode: "both"
    });
    }, { offset: '75%' });

//slick slider1
$(document).ready(function(){
    $('.slider1').slick({
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      speed: 2000
    });
  });
 
//slick slider2
$(document).ready(function(){
    $('.slider2').slick({
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      speed: 2000
    });
  });

  //slider 1 prevent scroll
  window.blockMenuHeaderScroll = false;
$(window).on('touchstart', function(e) {
    if ($(e.target).closest('.slider1').length == 1) {
        blockMenuHeaderScroll = true;
    }
});
$(window).on('touchend', function() {
    blockMenuHeaderScroll = false;
});
$(window).on('touchmove', function(e) {
     if (blockMenuHeaderScroll) {
        e.preventDefault();
     }
});

//slider 2 prevent scroll
window.blockMenuHeaderScroll = false;
$(window).on('touchstart', function(e) {
    if ($(e.target).closest('.slider2').length == 1) {
        blockMenuHeaderScroll = true;
    }
});
$(window).on('touchend', function() {
    blockMenuHeaderScroll = false;
});
$(window).on('touchmove', function(e) {
     if (blockMenuHeaderScroll) {
        e.preventDefault();
     }
});