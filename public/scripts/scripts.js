document.addEventListener('DOMContentLoaded', () => {
  const FARBA = {
    WH: window.innerHeight,
  
    WW: document.documentElement.clientWidth,
  
    isTouch: 'ontouchstart' in window || navigator.msMaxTouchPoints,
  
    //lazy load для сторонних либ
    lazyLibraryLoad(scriptSrc, linkHref, callback) {
      let script;
      const domScript = document.querySelector(`script[src="${scriptSrc}"]`);
      const domLink = document.querySelector(`link[href="${linkHref}"]`);
  
      if (!domScript) {
        script = document.createElement("script");
        script.src = scriptSrc;
        document.querySelector("#wrapper").after(script);
      }
  
      if (linkHref !== "" && !domLink) {
        let style = document.createElement("link");
        style.href = linkHref;
        style.rel = "stylesheet";
        document.querySelector("link").before(style);
      }
  
      if (!domScript) {
        script.onload = callback;
      } else {
        domScript.onload = callback;
      }
    }
  };
  
  (function() {
    if (!document.querySelector('.main-slider')) return
  
    var swiper = new Swiper('.main-slider', {
      effect: 'cards',
      grabCursor: true,
      initialSlide: 1,
      slidesPerView: 1,
      centeredSlides: true,     
      spaceBetween: 200,
      loop: true,    
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      cardsEffect: {
        rotate: 0,
        slideShadows: true,     
        // stretch: 50,
      },
      pagination: {
        el: ".section-slider .swiper-pagination",
      },
    });  
  })();
  
  (function() {
    if (!document.querySelector('.destinations-slider')) return
  
    var swiper = new Swiper('.destinations-slider', {   
      grabCursor: true,    
      slidesPerView: 5,
      slidesPerGroup: 1,
      spaceBetween: 20,
      autoHeight: true,
      autoplay: false,
      // loop: true,
      pagination: {
        el: ".section-destinations .swiper-pagination",
      },
      navigation: {
        nextEl: ".section-destinations .slider-next",
        prevEl: ".section-destinations .slider-prew",
      },
    });  
  })();
  
  (function() {
    if (!document.querySelector('.tour-slider')) return
  
    var swiper = new Swiper('.tour-slider', {   
      grabCursor: true,    
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 20,
      autoplay: false,
      // loop: true,     
      pagination: {
        el: ".section-tours .swiper-pagination",
      },
      navigation: {
        nextEl: ".section-tours .slider-next",
        prevEl: ".section-tours .slider-prew",
      },
    });  
  })();

  (function() {
    if (!document.querySelector('.article-slider')) return
  
    var swiper = new Swiper('.article-slider', {   
      grabCursor: true,    
      slidesPerView: 1,     
      autoplay: false,
      // loop: true,     
      pagination: {
        el: ".article-slider .swiper-pagination",
      },
      navigation: {
        nextEl: ".article-slider .slider-next",
        prevEl: ".article-slider .slider-prew",
      },
    });  
  })();
  
  function initMask() {
    const inputs = document.querySelectorAll('.ux-phonemask'); 
    if(!inputs.length) return
  
    inputs.forEach(element => {
      IMask(element, {
        mask: [
          {
            mask: '+000 (00) 000-00-00',
            startsWith: '375',
            lazy: false,
            country: 'Belarus'
          },
          {
            mask: '+0 (000) 000-00-00',
            startsWith: '7',
            lazy: false,
            country: 'Russia'
          },
          {
            mask: '+{38} (0{00}) 000-00-00', 
            startsWith: '38',
            lazy: false,
            country: 'Ukraine'
          },
          {
            mask: '+000 (00) 000-00-00',
            startsWith: '371', 
            lazy: false,
            country: 'Latvia'  
          },
          {
            mask: '+000 (000) 000-00-00',
            startsWith: '370',
            lazy: false,
            country: 'Lithuania'
          },
          {
            mask: '+00 (000) 000-00-00',
            startsWith: '48',
            lazy: false, 
            country: 'Poland'
          },
          {
             mask: '+{49} {0} {000} {000}-{00}-{00}',
             startsWith: '49',
             lazy: false,
             country: 'Germany'
          },    
          {
            mask: '0000000000000',
            startsWith: '',
            country: 'unknown'
          }
        ],
        dispatch: (appended, dynamicMasked) => {
          const number = (dynamicMasked.value + appended).replace(/\D/g,'');
      
          return dynamicMasked.compiledMasks.find(m => number.indexOf(m.startsWith) === 0);
        }
      })
    })
  };
  
  initMask();


  // Открытие попапа
  $(document).on("click", ".mfp-link", function () {
    var a = $(this);
    $.magnificPopup.open({
      items: { src: a.attr("data-href") },
      type: "ajax",
      overflowY: "scroll",
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in',
      ajax: {
        tError: "Error. Not valid url",
      },
      callbacks: {
        open: function () {
          setTimeout(function(){
            $('.mfp-wrap').addClass('not_delay');
            $('.mfp-popup').addClass('not_delay');
          },700);
  
          document.documentElement.style.overflow = 'hidden'
        },
  
        close: function() {
          document.documentElement.style.overflow = ''
        }
      }
    });
    return false;
  });
  
  
  // (function () {
  //   if (!document.querySelector('.header-nav ul li:nth-child(1) a') || !document.querySelector('.appointment')) return
  
  
  //   document.querySelector('.header-nav ul li:nth-child(1) a').addEventListener('click', (e) => {
  //     e.preventDefault()   
  
  //     if (window.innerWidth <= 1280) {
  //       toggleBurgerMenu();
  //     } else {
  //       document.body.style.overflow = '';
  //     }   
  
  //     document.querySelector('.appointment').scrollIntoView({behavior: "smooth"})
  //   })
  // })();
});
