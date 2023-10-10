$(document).ready(function(){
  $('.scroller__inner').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
  });
});


function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
    document.querySelector(".burger").classList.toggle("toggle");
}


document.querySelectorAll('.links').forEach(link => {
  link.addEventListener('click', function() {
      toggleMenu(); 
  });
});


const scrollers = document.querySelectorAll(".scroller");


if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);


    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}



