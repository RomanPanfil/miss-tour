const FARBA = {
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


document.addEventListener('DOMContentLoaded', () => {
  $.validator.addMethod("noDigits", function(value, element) {
    return this.optional(element) || !/\d/.test(value); 
  });
  
  (function() {
    if (!document.querySelector('.destinations-slider')) return
  
    var swiper = new Swiper('.destinations-slider', {   
      grabCursor: true,    
      slidesPerView: 1.2,
      slidesPerGroup: 1,
      spaceBetween: 20,
      autoHeight: true,
      autoplay: false,
      // loop: true,
      pagination: {
        el: ".section-destinations .swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".section-destinations .slider-next",
        prevEl: ".section-destinations .slider-prew",
      },
      breakpoints: {
        480: {
          slidesPerView: 1.6,
        },
        577: {
          slidesPerView: 2,
        },
        769: {
          slidesPerView: 3,
        },
        1140: {
          slidesPerView: 4, 
        },
        1680: {
          slidesPerView: 5,
        }
      }
    });  
  })();
  
  (function() {
    if (!document.querySelector('.tour-slider')) return
  
    var swiper = new Swiper('.tour-slider', {   
      grabCursor: true,    
      slidesPerView: 'auto',
      // slidesPerGroup: 1,
      spaceBetween: 12,
      autoplay: false,
      // loop: true,     
      pagination: {
        el: ".section-tours .swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".section-tours .slider-next",
        prevEl: ".section-tours .slider-prew",
      },
      breakpoints: {             
        576: {
          // slidesPerView: 2,   
          spaceBetween: 14,   
        },
        960: {
          // slidesPerView: 2,       
          spaceBetween: 18,   
        },      
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,       
        },
        1680: {
          slidesPerView: 4,
          spaceBetween: 20,
        }
      }
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
        clickable: true
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


  // бургер-меню
  function toggleBurgerMenu() {
    if (document.querySelector('.header-nav ul') && document.querySelector('.burger-btn span')) {
      document.querySelector('.mobile-menu').classList.toggle('active');
      document.querySelector('.burger-btn span').classList.toggle('active');

      if(document.querySelector('.header').classList.contains('header-menu')) {
        setTimeout(() => {
          document.querySelector('.header').classList.remove('header-menu');
        }, 300)
      } else {
        document.querySelector('.header').classList.add('header-menu');
      }       

      document.body.style.overflow =  document.querySelector('.mobile-menu.active') ? 'hidden' : '';       
    }  
  };

  (function() {
    if(!document.querySelector('.burger-btn') || !document.querySelector('.header-nav ul')) return

    const menuBtn = document.querySelector('.burger-btn');
    const menu = document.querySelector('.mobile-menu');

    menuBtn.addEventListener('click', toggleBurgerMenu);    
  })();

 
  // клонирование и вставки навигации для мобильного отображаения
  (function() {
    if(!document.querySelector('.header-nav ul') || !document.querySelector('.mobile-menu .mobile-nav')) return

    const ul = document.querySelector('.header-nav ul');
    const mobileMenu = document.querySelector('.mobile-menu .mobile-nav');
    
    const clonedUl = ul.cloneNode(true);
    
    mobileMenu.appendChild(clonedUl);
  })();

  // открытие подменю mobile
  document.querySelectorAll('.mobile-nav li .icon').forEach(el => {
    el.addEventListener('click', () => {
      el.parentNode.classList.toggle('opened');
    })
  });

  document.querySelectorAll('.footer-nav li .icon').forEach(el => {      
    el.addEventListener('click', () => {        
      el.parentNode.classList.toggle('opened');
    })
  });

  // обертка для таблицы
  (function(){
    if (!document.querySelector('article table')) return

    let tables = document.querySelectorAll('article table');

    tables.forEach((table) => {
        let wrapper = document.createElement('div');
        wrapper.classList.add('section-article-table', 'section-article-table__full');

        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
    })
  })();

  const buildVueSlider = (selector) => {
    if (!document.querySelector(selector)) return null

    return new Vue({
      el: selector,
      data: {
        width: window.matchMedia("(min-width: 769px)").matches ? 1420 : 720,
        height: window.matchMedia("(min-width: 769px)").matches ? 560 : 965
      },
      components: {
        'carousel-3d': window['carousel-3d'].Carousel3d,
        'slide': window['carousel-3d'].Slide
      },
      mounted () {
        const mobileWidthMediaQuery = window.matchMedia('(max-width: 769px)')
  
        const mediaSizeHandler = (isMobileSize) => {
          if (!isMobileSize) {
            this.width = 1420;
            this.height = 560;
            this.$refs.carousel.setSize();
          } else {
            this.width = 720;
            this.height = 965;
            this.$refs.carousel.setSize();
          }
        }
  
        mediaSizeHandler(mobileWidthMediaQuery.matches)
  
        mobileWidthMediaQuery.addEventListener('change', (event) => {
          mediaSizeHandler(event.matches)
        })
      }   
    })
  }
  const slider = buildVueSlider('#vslider')
  

});
