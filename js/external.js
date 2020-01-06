
myID = document.getElementById("top");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 300) {
    myID.style.display="block";
  } else {
    myID.style.display="none";
  }
};

window.addEventListener("scroll", myScrollFunc);

// change navbar on scroll

$$(function() {
    var header = $(".nav");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 200) {
            header.removeClass('nav').addClass("white");
        } else {
            header.removeClass("white").addClass('nav');
        }
    });
});