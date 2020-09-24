document.getElementById("listItem").addEventListener("mouseover", function(){
    document.getElementById("hello").innerText = "✉️";
});

document.getElementById("listItem").addEventListener("mouseout", function(){
    document.getElementById("hello").innerText = "☕️";
});


//
//
// function setColor() {
//   window.setTimeout("setColor()", 1000);
//
//   let colorArray = ["#00D2C4", "#E9C200", "#222", "#D2D200", "#4800FF", "#CE0067"];
//   let arrLength = colorArray.length;
//   let randomNum = Math.random() * arrLength; //index
//   let color = colorArray[Math.floor(randomNum)];
//
//   const coffee = document.getElementById('coffee');
//   coffee.style.backgroundColor = color;
//
//   const borderTop = document.getElementById('top');
//   const borderBottom = document.getElementById('bottom');
//   const borderLeft = document.getElementById('left');
//   const borderRight = document.getElementById('right');
//   borderTop.style.backgroundColor = color;
//   borderBottom.style.backgroundColor = color;
//   borderLeft.style.backgroundColor = color;
//   borderRight.style.backgroundColor = color;
//
//
//   // const introHighlights= document.getElementById('intro')getElementsByTagName('a');
//   // introHighlights.style.borderBottomColor = color;
//
//   if (color === "#4800FF" || color === "#CE0067" || color === "#222") {
//     document.getElementById('coffee').style.color = "white";
//     document.getElementById('social').style.color = "white";
//   } else if (color === "#00D2C4" || color === "#E9C200" || color === "#D2D200") {
//     document.getElementById('coffee').style.color = "black";
//     document.getElementById('social').style.color = "black";
//
//     document.getElementById('coffee').getElementsByTagName('a').style.color = "black";
//   }
// };

function redesignMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readmore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "read less";
    moreText.style.display = "inline";
  }
}
function hourglassMore() {
  var dots = document.getElementById("dots-hourglass");
  var moreText = document.getElementById("more-hourglass");
  var btnText = document.getElementById("readmore-hourglass");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "read less";
    moreText.style.display = "inline";
  }
}
function cmsMore() {
  var dots = document.getElementById("dots-cms");
  var moreText = document.getElementById("more-cms");
  var btnText = document.getElementById("readmore-cms");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "read less";
    moreText.style.display = "inline";
  }
}

function gatherMore() {
  var dots = document.getElementById("dots-gather");
  var moreText = document.getElementById("more-gather");
  var btnText = document.getElementById("readmore-gather");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "read less";
    moreText.style.display = "inline";
  }
}




$(document).ready(function() {

  /* Every time the window is scrolled ... */
  $(window).scroll(function() {

    /* Check the location of each desired element */
    $('.project').each(function(i) {

      var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 1200;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {

        $(this).animate({
          'opacity': '1'
        }, 500);

      }

    });

  });

});

$(document).ready(function() {
  $('.cover').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    centerMode: true,
    adaptiveHeight: true
  });

  $('.cover').find(".slick-slide").on("click", function(){
   $('.cover').slick("slickNext");
});
});
