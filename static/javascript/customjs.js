
/* NAVBAR */
const navEl = document.querySelector('.navbar');
    var els = document.getElementsByClassName('nav-link');
        for (var i = 0; i < els.length; i++) {
                    els[i].style.color = '#fff';
                  }
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 56) {
                navEl.classList.add('navbar-scrolled')
                navEl.classList.add('shadow-lg')
                for (var i = 0; i < els.length; i++) {
                    els[i].style.color = 'rgba(255, 255, 255, 0.55)';
                  }
            } else if (window.scrollY < 56) {
                navEl.classList.remove('navbar-scrolled')
                navEl.classList.remove('shadow-lg')
                for (var i = 0; i < els.length; i++) {
                    els[i].style.color = '#fff';
                  }
            }
        });

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-80px";
    document.querySelector(".navbar-toggler").setAttribute("aria-expanded", "true");
    document.querySelector(".navbar-collapse").classList.add('collapsing')
    document.querySelector(".navbar-collapse").classList.remove('show')
    document.querySelector(".navbar-collapse").classList.remove('collapsing')

//    navbar-collapse aria-expanded
  }
  prevScrollpos = currentScrollPos;
}



/* TYPED JS */
var typed = new Typed(".auto-type", {
    strings: ["Hi there, my name is", "Hi there, my name is", "Здравейте, казвам се", "Hola, mi nombre es", "Hallo, mein Name ist", ],
    typeSpeed: 150,
    backSpeed: 50,
    loop: true
});

/* CORUSEL */
$(document).ready(function() {
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});

