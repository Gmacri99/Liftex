import Navbar from './navbar';
import bg from '../img/bg.webp'
import video from '../videos/LIFTEX_Educaitonal.mp4'
import bg2 from '../img/bg2.webp'
import imagen1 from '../img/imagen1.webp'
import imagen2 from '../img/imagen2.webp'
import imagen3 from '../img/imagen3.png'
import imagen4 from '../img/image 4.png'
import imagen41 from '../img/image 4 (1).png'
import Grop1 from '../img/Group 15.svg'
import Grop2 from '../img/Group 16.svg'
import frame from '../img/Frame button.svg'
import imagen18 from '../img/image 18.jpg'
import imagen19 from '../img/image 19.jpg'
import imagen20 from '../img/image 20.jpg'
import imagen21 from '../img/image 21.jpg'
import imagen17 from '../img/image 17.png'
import imagen15 from '../img/image 15.png'
import imagen14 from '../img/image 14.png'
import imagen16 from '../img/image 16.png'
import Sw1 from '../img/FIRESTONE.svg'
import dragSignal from '../img/Group 14.svg'
import Sw2 from '../img/TESLA.svg'
import Sw3 from '../img/NIKON.svg'
import Sw5 from '../img/MART.svg'
import Sw4 from '../img/INTERNATIONAL-DELIGHT-1.svg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Observer } from 'gsap/all'
import { register } from 'swiper/element/bundle';
import { useEffect, useRef, useState } from 'react';
import Footer from './footer';
import { useWindowSize } from './useWindowSize';

function Home() {

    gsap.registerPlugin(Observer);
    gsap.set('section', {
    position: 'absolute',
    top: 0,
    left: 0,
  })
  const {width,height}=useWindowSize()
  gsap.registerPlugin(useGSAP);

  useGSAP(()=>{
  
    let animating = false,
    currentIndex = 0,
    nextIndex = -1;
    const maxIndex = 13;
    const isAnimating = () => animating = true;
    const notAnimating = () => animating = false;

    const headerTimeline = gsap.timeline({
        paused: true,
        defaults: {
            duration: 1,
            // ease: 'sine.in',
        }
    })
        .to('.navbar', {
            yPercent: -100,
        })

    const scrollTimeline = gsap.timeline({
        paused: true,
        defaults: {
            duration:.5,
            ease: 'power2.inOut',
        },
    })

    .to(".section-hero img", {
        opacity: 1,   
        onReverseComplete: notAnimating,
    })
    .to('#h1-title', {
        x:'70vw',
        y:'-7.5vh',
        opacity:.3,
        onComplete: notAnimating,
       
    },"<")
    .to('.button-fixed', {
        y: '18vh',
        onComplete: notAnimating,
    },"<")
    .to('.informacion2-hero', {
        y: '10vh',
        opacity: 0,
        
        onComplete: notAnimating,
    },"<")
    .to('.section2-hero', {
        opacity: 1,
        onReverseComplete: notAnimating,
       
    })
   
    .to('.section-father', {
        yPercent: -7.5,
     })
     .to('.section2-hero img', {
        borderRadius:'40px'
      },"<")
    .fromTo('.section-benefits', {
         opacity: 0,
     }, {
         yPercent: width>1439 && height< 900 ? -60 : -52,
         opacity: 1,
        
     }, "<")
     .to('#h1-make', {
         x: '-50vw',
         opacity:0
     }, "<")
     .to('#h2-makep', {
         x: '-50vw',
         opacity:0
     }, "<")
     .to('#h1-title', {
         x:'100vw',
         opacity:0,
         onComplete: notAnimating,
     },"<")
     .fromTo('.intro-benefits', {
         y: '-100vh',
         opacity: 0,
         
     }, {
         y: '-10vh',
         opacity: 1,
         onComplete: notAnimating,
     }, "<")
     .from('.divs-benefits div', {
        height:'25vh',
        onReverseComplete: notAnimating,
     })

     .to('.section-father', {
        yPercent: -100,
     })
     .to('.section-benefits', {
        yPercent: -100,
        paddingTop: '8.5rem',

     }, "<")
     .to('.intro-benefits', {
        y: 0,
     }, "<")
     .to('.intro-benefits h2',  {
        color:'#000000',
        opacity: 1,
        onComplete: notAnimating,
    }, "<")
    .to('.intro-benefits p',  {
        color:'#000000',
        opacity: 1,
        onComplete: notAnimating,
    }, "<")
     .to('#benefits-2', {
        top:'-4%',
        onReverseComplete: notAnimating,
     })
     .to('.divs-benefits div', {
        height:width > 1439 && height < 900 ? '48vh' : width > 1919 && height > 950 ? '60vh' :'56.5vh',
        onReverseComplete: notAnimating,
     },"<")
     .to('#benefits-3', {
        top:'0',
        onReverseComplete: notAnimating,
     },"<")
     .to('.intro-benefits',  {
        opacity: 1,
        onReverseComplete: notAnimating,
    })
    .to('.section-benefits',  {
        yPercent: -250,
        onComplete: notAnimating,
    })
    .fromTo('.section-videos',  {
        yPercent: 100,
        opacity: 0,
     
    },{
        yPercent: 0,
        opacity: 1,
        onReverseComplete: notAnimating,
    }, "<")

    .to('.bg-section-video',  {
        bottom: 0,
        onReverseComplete: notAnimating,
    })
    .to('.section-videos swiper-container',  {
        yPercent: -250,
        onComplete: notAnimating,
    })
    .to('.div-video-btn',  {
        top: width > 1439 && height < 900 ? '-11.5%' : width > 2160 && height > 1100 ? '-6%' : '-9%',
        gap:'1rem',
        onComplete: notAnimating,
    }, "<")
    .fromTo('.hero-video',  {
        width: '60%',
        height: '85%',
    },{
        width: '95%',
        height:'100%',
        onComplete: notAnimating,
    }, "<")
    
    .to('.btn-section-videos',  {
        padding:16,
        bottom:'0%',
        onComplete: notAnimating,
    }, "<")
    .to('.elemento-rotante',  {
        scale:1.3,
        onComplete: notAnimating,
    }, "<")
    .to('.pos-abs',  {
        scale:1.3,
        onComplete: notAnimating,
    }, "<")
    .to('.section-videos',  {
        yPercent: -100,
        opacity: 0,
        onReverseComplete: notAnimating,
    })
    .fromTo('.members-team',  {
        opacity: 0,
        
    },{
        yPercent: 0,
        opacity: 1,
        zIndex: 7,
        onComplete: notAnimating,
    })
    
    .to('.members-team',  {
        yPercent: -100,
        opacity: 0,
        onComplete: notAnimating,
    })
    .fromTo('.info-team',  {
        yPercent: 100,
        opacity: 0,
     
    },{
        yPercent: 0,
        opacity: 1,
        onReverseComplete: notAnimating,
    })
    .fromTo('#team1', {
        xPercent: -100,
     
    },{
        xPercent: 0,
        onReverseComplete: notAnimating,
    },"<")
    .fromTo('.class-info-team img', {
        scale:.5,
    },{
        scale:1,
        onComplete: notAnimating,
    },"<")
    .to('#team2',  {
        yPercent: -100,
    },"<")

    .to('#team1',  {
        xPercent: -100,
        opacity: 0,
        onComplete: notAnimating,
    })
    .fromTo('#team2',  {
        xPercent: -100,
        opacity: 0,
     
    },{
        xPercent: 0,
        opacity: 1,
        onReverseComplete: notAnimating,
    })
    .to('#team2-img',  {
        xPercent: width > 1279 && width < 1599 && height > 901 ? 30 : 60,
        yPercent: width>1439 && width <1279  && height < 901 ? 50  : 45,
        borderTopLeftRadius:20,
        onReverseComplete: notAnimating,
    })
    .to('#team2-p',  {
        xPercent: width>1279 && width<1599 && height > 949 ? -130 : width>1439 && width<1599 && height > 899 ? -40 : width> 1599 && width< 1929 && height > 799 ? -30 : -35,  
        paddingLeft: width>1279 && height > 729 ? '0rem' : '3rem',  
        gap:'1rem',
        onComplete: notAnimating,
    })
    
    .to('.info-team',  {
        yPercent: -200,
        onComplete: notAnimating,
    })
    .fromTo('.formulario-team',  {
        yPercent: 100,
        opacity: 0,
     
    },{
        yPercent: 50,
        opacity: 1,
        onReverseComplete: notAnimating,
    })
  .to('#span1', { color: '#000000' , onReverseComplete: notAnimating,}, "<")
  .to('#span2', { color: '#000000' , onReverseComplete: notAnimating,}, "<")
  .to('#span3', { color: '#000000' , onReverseComplete: notAnimating,}, "<")
  .to('#span4', { color: '#000000' , onReverseComplete: notAnimating,}, "<")
  .to('#span5', { color: '#000000' , onReverseComplete: notAnimating,}, "<")
  .to('#span6', { color: '#000000' , onReverseComplete: notAnimating,}, "<")
  .to('#span7', { color: '#000000' , onReverseComplete: notAnimating,}, "<")
  .to('#span8', { color: '#000000' , onReverseComplete: notAnimating,}, "<")
  .to('#span9', { color: '#000000' , onReverseComplete: notAnimating,}, "<")
  .to('#span10', { color: '#000000', onReverseComplete: notAnimating,}, "<")
  .to('#span11', { color: '#000000', onReverseComplete: notAnimating,}, "<")
    .fromTo('.frame',  {
        rotate: 180,
        xPercent: -130,
     
    },{
        rotate: 90,
        xPercent: -80,
        onReverseComplete: notAnimating,
    },"<")
    .to('.formulario-team2',  {
        yPercent: -20,
        onComplete: notAnimating,
    })


    .to('.formulario-team',  {
         yPercent: 20,
         onReverseComplete: notAnimating,
    })
    .to('#span12', { color: '#000000' , onReverseComplete: notAnimating,}, "<")
  .to('#span13', { color: '#000000' , onReverseComplete: notAnimating,}, "<")
  .to('#span14', { color: '#000000' , onReverseComplete: notAnimating,}, "<")
  .to('#span15', { color: '#000000' , onReverseComplete: notAnimating,}, "<")
  .to('#span16', { color: '#000000' , onReverseComplete: notAnimating,}, "<")
  .to('#span17', { color: '#000000' , onReverseComplete: notAnimating,}, "<")
  .to('#span18', { color: '#000000' , onReverseComplete: notAnimating,}, "<")
  .to('#span19', { color: '#000000' , onReverseComplete: notAnimating,}, "<")
  .to('#span20', { color: '#000000' , onReverseComplete: notAnimating,}, "<")
  .to('#span21', { color: '#000000', onReverseComplete: notAnimating,}, "<")
  .to('#span22', { color: '#000000', onReverseComplete: notAnimating,}, "<")
  .to('#span23', { color: '#000000', onReverseComplete: notAnimating,}, "<")
  .to('#span24', { color: '#000000', onReverseComplete: notAnimating,}, "<")
  .to('#span25', { color: '#000000', onReverseComplete: notAnimating,}, "<")
  .to('#span26', { color: '#000000', onReverseComplete: notAnimating,}, "<")
  .to('#span27', { color: '#000000', onReverseComplete: notAnimating,}, "<")
  .to('#span28', { color: '#000000', onReverseComplete: notAnimating,}, "<")
  .to('#span29', { color: '#000000', onReverseComplete: notAnimating,}, "<")
  .to('#span30', { color: '#000000', onReverseComplete: notAnimating,}, "<")
  .to('#span31', { color: '#000000', onReverseComplete: notAnimating,}, "<")
  .to('#span32', { color: '#000000', onReverseComplete: notAnimating,}, "<")
  .to('#span33', { color: '#000000', onReverseComplete: notAnimating,}, "<")
  .to('#span34', { color: '#000000', onReverseComplete: notAnimating,}, "<")
  .to('#span35', { color: '#000000', onReverseComplete: notAnimating,}, "<")
  .to('#span36', { color: '#000000', onReverseComplete: notAnimating,}, "<")
  .to('#span37', { color: '#000000', onReverseComplete: notAnimating,}, "<")
  .to('#span38', { color: '#000000', onReverseComplete: notAnimating,}, "<")
  .to('#span39', { color: '#000000', onReverseComplete: notAnimating,}, "<")
  .to('#span40', { color: '#000000', onReverseComplete: notAnimating,}, "<")
  .to('#span41', { color: '#000000', onReverseComplete: notAnimating,}, "<")
  .to('#span42', { color: '#000000', onReverseComplete: notAnimating,}, "<")
  .to('#span43', { color: '#000000', onReverseComplete: notAnimating,}, "<")
  .to('#span44', { color: '#000000', onReverseComplete: notAnimating,}, "<")
  .fromTo('.frame',  {
    rotate: 90,
    xPercent: -80,
 
},{
    rotate: 45,
    xPercent: -40,
    onReverseComplete: notAnimating,
},"<")


   .to('.formulario-team',  {
    yPercent: -20,
    onReverseComplete: notAnimating,
})
.fromTo('.frame',  {
    rotate: 45,
    xPercent: -40,
 
},{
    rotate: 0,
    xPercent: 0,
    onReverseComplete: notAnimating,
},"<")

.to('#span45', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span46', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span47', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span48', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span49', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span50', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span51', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span52', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span53', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span54', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span55', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span56', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span57', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span58', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span59', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span60', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span61', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span62', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span63', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span64', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span65', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span66', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span67', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span68', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span69', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span70', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span71', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span72', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span73', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span74', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span75', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span76', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span77', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span78', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span79', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span80', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span81', { color: '#000000', onReverseComplete: notAnimating }, "<")
  .to('#span82', { color: '#000000', onComplete: notAnimating })
  

  .to('.formulario-team', { yPercent: -100, onReverseComplete: notAnimating })
 
  .fromTo('footer',  {
    yPercent: 100,
    opacity:0
},{
    yPercent: 0,
    opacity:1,
    onReverseComplete: notAnimating,
    onComplete: notAnimating
},"<")
.fromTo('#footer-svg',  {
    rotate: 90,
    xPercent: -80,
 
},{
    xPercent: 0,
    rotate:0,
    onReverseComplete: notAnimating,
    onComplete: notAnimating
},"<")
    function scrollListener(index, direction) {
        if (index > maxIndex || index < 0) return;
        
        if (direction == -1) {
            headerTimeline.play();
            gsap.to('.navbar > #hero-section', {
                yPercent: -100,
                opacity: 0,
                duration: 1,
            })
        }
        else if (direction == 1) {
            headerTimeline.tweenTo(0);
            gsap.to('.navbar > #hero-section', {
                yPercent: 0,
                opacity: 1,
                duration: 2,
            })
            
        }
        console.log(index)
        isAnimating()
        scrollTimeline.timeScale(0.75).tweenTo(index);
        currentIndex = index;
    }

    const observer = Observer.create({
        target: window,
        type: 'wheel, touch, scroll',
        preventDefault: true,
        onDown: () => !animating && scrollListener(currentIndex - 1, 1),
        onUp: () => !animating && scrollListener(currentIndex + 1, -1),
        wheelSpeed: -1
    })
    
})

useEffect(()=>{
    register();
    const swiperEl = document.querySelector('.journey-slider');
    console.log(swiperEl)
  // swiper parameters
  const swiperParams = {
    autoplay: {
        delay: 0, // No hay retraso entre las transiciones para dar la impresión de movimiento continuo
        disableOnInteraction: false, // El autoplay no se detendrá al interactuar con el slider
      },
      speed: 15000, // Velocidad lenta para que el movimiento sea suave y continuo
      loop: true,
      // Configuración para que el swiper se mueva sin parar

      centeredSlides: true,
      breakpoints: {
          180: {
              spaceBetween: 20,
              slidesPerView: 1.15,
              centeredSlides: false,
              allowTouchMove: true,
          },
          480: {
            spaceBetween: 50,
            slidesPerView: 2.25,
            allowTouchMove: true,
        },
        1080: {
            spaceBetween: 20,
            slidesPerView: 4,
            allowTouchMove: true,
        },
        1360: {
            spaceBetween:65,
            slidesPerView: 4,
        },
        1920: {
            spaceBetween:65,
            slidesPerView: 5,
        },
  
      }
  };
  
  Object.assign(swiperEl, swiperParams);
  swiperEl.initialize();
  
  

  
  }
  ,[])

  useEffect(()=>{
    register();
    const swiperEl = document.querySelector('.journey-slider2');
    console.log(swiperEl)
  // swiper parameters
  const swiperParams = {
      speed: 2000, // Velocidad lenta para que el movimiento sea suave y continuo
      loop: true,

      breakpoints: {
          180: {
              spaceBetween: 20,
              slidesPerView: 1.15,
              centeredSlides: false,
              allowTouchMove: true,
          },
          480: {
            spaceBetween: 50,
            slidesPerView: 2.25,
            allowTouchMove: true,
        },
        1080: {
            spaceBetween:0,
            slidesPerView: 5,
        },
  
      }
  };
  
  Object.assign(swiperEl, swiperParams);
  swiperEl.initialize();
  
  

  
  }
  ,[])

  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
const [buttonClass, setButtonClass] = useState('play-button'); // Asume que 'play-button' es tu clase inicial


  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
        setButtonClass('pause-button'); // Asume que 'pause-button' es la clase cuando el video está en reproducción
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
        setButtonClass('play-button'); // Restablece a la clase inicial cuando el video está pausado
      }
    }
  };

  const divIds = [];
  for (let i = 1; i <= 6; i++) {
      for (let j = 1; j <= 3; j++) {
          divIds.push(`bg-${i}${j}`);
      }
  }

  const [activeDivId, setActiveDivId] = useState('bg-61');

  useEffect(() => {
      const interval = setInterval(() => {
          // Generar un índice aleatorio para seleccionar un nuevo div activo
          const nextActiveDivIndex = Math.floor(Math.random() * divIds.length);
          setActiveDivId(divIds[nextActiveDivIndex]);
      }, 2000); // Cambiar cada 2 segundos

      // Limpiar el intervalo cuando el componente se desmonte
      return () => clearInterval(interval);
  }, []);

  return (
    <>
    <Navbar/>
    <main>
    <a className="btn button-fixed" href="contact.html">
            GET A QUOTE
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M11.5 0.999999C11.5 0.723857 11.2761 0.499999 11 0.499999L6.5 0.5C6.22386 0.499999 6 0.723857 6 0.999999C6 1.27614 6.22386 1.5 6.5 1.5L10.5 1.5L10.5 5.5C10.5 5.77614 10.7239 6 11 6C11.2761 6 11.5 5.77614 11.5 5.5L11.5 0.999999ZM1.35355 11.3536L11.3536 1.35355L10.6464 0.646446L0.646447 10.6464L1.35355 11.3536Z" fill="white"/>
            </svg>
        </a>
        <div className="section-lineas-bg">
            <div className="lineas-bg">
                {[1, 2, 3, 4, 5, 6].map(num => (
                    <div key={num} className="linea-bg-child" id={`bg-${num}`}>
                        {[1, 2, 3].map(index => (
                            <div
                                key={index}
                                id={`bg-${num}${index}`}
                                className={activeDivId === `bg-${num}${index}` ? 'div-activo' : ''}
                            ></div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    <section  className="section section-father">
            <div className="section-hero">
            <img src={bg} alt="background-image"/>
                <div className="padre-info">
                <div className="informacion-hero">
                <h1 id="h1-title">LIFTEX VERTICAL <br/> BUILDING EXPANSION</h1>
                </div>
                <div className="informacion2-hero">
                    <div className="informacion1-div2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <g clipPath="url(#clip0_624_997)">
                      <path d="M29.991 15.4553C29.9878 15.4221 29.9812 15.3893 29.9712 15.3574C29.9617 15.3253 29.949 15.2941 29.9331 15.2646C29.9258 15.251 29.9247 15.2357 29.916 15.2226C29.9068 15.2089 29.8926 15.2017 29.8823 15.1892C29.7988 15.0868 29.6779 15.0221 29.5464 15.0094C29.5311 15.0054 29.5155 15.0023 29.4999 15H20V0.49998C20 0.48416 19.9924 0.470801 19.991 0.455332C19.9878 0.422109 19.9812 0.389297 19.9712 0.357422C19.9618 0.325254 19.9491 0.294082 19.9332 0.264551C19.9258 0.250957 19.9247 0.235723 19.916 0.222598C19.9068 0.20877 19.8924 0.201445 19.8821 0.188848C19.8404 0.138164 19.7895 0.095918 19.7319 0.0644531C19.6736 0.0341602 19.6101 0.0153516 19.5447 0.00902344C19.5292 0.00761719 19.5159 0 19.5 0H15.5C15.4849 0 15.4722 0.00732422 15.4574 0.00861328C15.3902 0.0154102 15.3248 0.0350391 15.265 0.0665625C15.2513 0.0740039 15.2358 0.0751172 15.2226 0.0840234L0.222656 10.084C0.208828 10.0932 0.201562 10.1075 0.188965 10.1178C0.162598 10.1392 0.138574 10.1633 0.117305 10.1897C0.0563672 10.265 0.0188672 10.3566 0.00949219 10.453C0.00550781 10.4685 0.00234375 10.4842 0 10.5V29.5C0 29.7762 0.223828 30 0.49998 30H14.5H14.5001H14.5004C14.5596 29.9987 14.618 29.9869 14.673 29.9651C14.69 29.9582 14.7067 29.9504 14.7229 29.9416C14.7415 29.9342 14.7597 29.9257 14.7773 29.916L29.7773 19.916C29.7911 19.9068 29.7984 19.8924 29.8109 19.8821C29.8614 19.8407 29.9034 19.79 29.9348 19.7328C29.965 19.675 29.9839 19.6119 29.9904 19.547C29.9944 19.5315 29.9976 19.5158 29.9999 19.5V15.5C30 15.4842 29.9924 15.4708 29.991 15.4553ZM15.6514 1.00002H17.8487L4.34865 10H2.15139L15.6514 1.00002ZM19 1.43426V15.2324L4.99998 24.5658V10.7676L19 1.43426ZM14 29H1.00002V11H4.00002V25.5C4.00002 25.5158 4.00758 25.5292 4.00904 25.5446C4.01607 25.6113 4.0357 25.6761 4.06687 25.7354C4.0742 25.749 4.07531 25.7643 4.08404 25.7773C4.09916 25.7978 4.1158 25.817 4.13391 25.8349C4.14135 25.843 4.14727 25.8518 4.15518 25.8594C4.19555 25.898 4.24225 25.9295 4.29322 25.9525C4.304 25.9574 4.31496 25.9607 4.32615 25.9649C4.38135 25.9867 4.44 25.9986 4.49936 25.9999L4.50012 26H14.0001V29H14ZM14.3486 25H6.15135L19.6513 16H27.8486L14.3486 25ZM29 19.2324L15 28.5657V25.7675L29 16.4342V19.2324Z" fill="black"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_624_997">
                        <rect width="30" height="30" fill="white"/>
                      </clipPath>
                    </defs>
                      </svg>
                      <p>
                    Specialists in adding cubic footage and operational capacity without costly relocations or new construction.
                      </p>
                    </div>
                    <div className="informacion2-div2">
                        <span></span>
                        <p>Scroll</p>
                    </div>
                </div>
            </div>
            </div>
            <div className="section2-hero">
                <img src={bg2} alt="background-image"/>
                    <div className="padre-info">
                    <div className="informacion-hero">
                    <h1 id="h1-make">Make Every Lift Point <br/> a Steel Telescope </h1>
                    <p id="h2-makep">We convert or replace existing internal
                        building support columns into 'telescopes' that extend upwards.</p>
                    </div>
                    
                </div>

                </div>
        </section>
        <section   className="section section-benefits">
            <div className="intro-benefits">
                <h2 id="h2-liftex">The LIFTEX Benefits.</h2>
                <p id="p-liftex">Our building expansion experts will.</p>
                <a className="btn" href="contact.html">
                    GET A QUOTE
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M11.5 0.999999C11.5 0.723857 11.2761 0.499999 11 0.499999L6.5 0.5C6.22386 0.499999 6 0.723857 6 0.999999C6 1.27614 6.22386 1.5 6.5 1.5L10.5 1.5L10.5 5.5C10.5 5.77614 10.7239 6 11 6C11.2761 6 11.5 5.77614 11.5 5.5L11.5 0.999999ZM1.35355 11.3536L11.3536 1.35355L10.6464 0.646446L0.646447 10.6464L1.35355 11.3536Z" fill="white"/>
                    </svg>
                </a>
            </div>
            <div className="divs-benefits">
                <div id="benefits-1">
                    <img src={imagen1} alt="imagen1"/>
                    <h2>Tremendous Savings</h2>
                    <p>Raising an existing roof can be more cost-effective than new construction or demolishing and rebuilding, or even moving an entire operation to a different existing building.</p>
                </div>
                <div id="benefits-2">
                    <img src={imagen3} alt="imagen2"/>
                    <h2>Expand Fast</h2>
                    <p>Roof lifting may take as little as ⅓ of the time needed for new construction, meeting your business’s needs compared to completely upending business operations.</p>
                </div>
                <div id="benefits-3">
                    <h2>Maximize Efficiently</h2>
                    <p>Get the most from your existing assets and unlock up to 3x more usable space. Spend less time and money versus relocation, rebuilding, or new construction.</p>
                    <img src={imagen2} alt="imagen3"/>
                    
                </div>
            </div>
        </section>
        <section   className="section section-videos">
            <swiper-container id='journey-slider' class="journey-slider" init="false"> 
                <swiper-slide class="journey-slide">
                    <img src={Sw1} alt="journey_slide" loading="lazy"/>
                </swiper-slide>
                <swiper-slide class="journey-slide">
                    <img src={Sw2} alt="journey_slide" loading="lazy"/>
                </swiper-slide>
                <swiper-slide class="journey-slide">
                    <img src={Sw3} alt="journey_slide" loading="lazy"/>
                </swiper-slide>
                <swiper-slide class="journey-slide">
                    <img src={Sw4} alt="journey_slide" loading="lazy"/>
                </swiper-slide>
                <swiper-slide class="journey-slide">
                    <img src={Sw5} alt="journey_slide" loading="lazy"/>
                </swiper-slide>
                <swiper-slide class="journey-slide">
                    <img src={Sw1} alt="journey_slide" loading="lazy"/>
                </swiper-slide>
                <swiper-slide class="journey-slide">
                    <img src={Sw2} alt="journey_slide" loading="lazy"/>
                </swiper-slide>
                <swiper-slide class="journey-slide">
                    <img src={Sw3} alt="journey_slide" loading="lazy"/>
                </swiper-slide>
                <swiper-slide class="journey-slide">
                    <img src={Sw4} alt="journey_slide" loading="lazy"/>
                </swiper-slide>
                <swiper-slide class="journey-slide">
                    <img src={Sw5} alt="journey_slide" loading="lazy"/>
                </swiper-slide>
            </swiper-container>
            <div className='div-video-btn'>
                <div className='div-video-btn33'>
                    <div className='div-center-hero'>
                        <div className={buttonClass} >
                            <svg className={`elemento-rotante`}  width="283" height="278" viewBox="0 0 283 278" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="135" cy="139" r="120" stroke="white" stroke-width="2"/>
<path d="M262.526 85.5495L270.729 82.9548L271.542 85.5254C271.755 86.1978 271.876 86.8089 271.906 87.3588C271.938 87.9169 271.819 88.3965 271.549 88.7976C271.29 89.2043 270.82 89.5152 270.139 89.7305C269.467 89.9431 268.904 89.9589 268.45 89.7778C268.006 89.6024 267.637 89.2771 267.343 88.802C267.059 88.3325 266.811 87.7616 266.598 87.0892L266.151 85.6748L262.891 86.7056L262.526 85.5495ZM267.147 85.3597L267.625 86.8725C267.753 87.2743 267.895 87.626 268.054 87.9277C268.212 88.2293 268.424 88.442 268.689 88.5657C268.964 88.6951 269.323 88.6898 269.766 88.5497C270.217 88.4071 270.518 88.2037 270.669 87.9395C270.822 87.6834 270.881 87.3852 270.846 87.0446C270.81 86.7041 270.729 86.3329 270.602 85.9311L270.123 84.4183L267.147 85.3597Z" fill="white"/>
<path d="M267.952 103.642L276.45 102.214L276.651 103.409L269.183 104.664L269.951 109.232L268.92 109.405L267.952 103.642Z" fill="white"/>
<path d="M270.684 120.641L279.414 123.601L279.457 124.955L270.935 128.455L270.893 127.165L272.755 126.447L272.629 122.528L270.725 121.931L270.684 120.641ZM273.685 122.868L273.787 126.04L278.21 124.311L273.685 122.868Z" fill="white"/>
<path d="M270.837 141.859L274.16 142.21L279.734 139.673L279.594 140.994L275.199 142.929L279.093 145.728L278.954 147.049L274.032 143.416L270.71 143.064L270.837 141.859Z" fill="white"/>
<path d="M266.308 168.979L274.473 171.733L274.086 172.882L266.911 170.462L265.431 174.85L264.441 174.516L266.308 168.979Z" fill="white"/>
<path d="M260.595 185.1L261.457 185.511L260.935 186.606L266.99 189.493L267.511 188.399L268.373 188.809L266.807 192.093L265.946 191.682L266.468 190.588L260.413 187.7L259.891 188.795L259.029 188.384L260.595 185.1Z" fill="white"/>
<path d="M254.215 198.268L261.483 202.898L258.474 207.62L257.593 207.058L259.95 203.359L257.741 201.952L255.384 205.651L254.503 205.09L256.86 201.39L253.563 199.29L254.215 198.268Z" fill="white"/>
<path d="M242.962 214.981L248.743 219.871L250.593 217.684L251.39 218.359L246.909 223.658L246.111 222.983L247.96 220.797L242.179 215.907L242.962 214.981Z" fill="white"/>
<path d="M232.576 226.923L238.353 233.316L234.017 237.234L233.317 236.459L236.753 233.354L234.997 231.411L232.461 233.703L231.76 232.928L234.297 230.636L232.377 228.511L228.941 231.616L228.24 230.84L232.576 226.923Z" fill="white"/>
<path d="M219.695 238.455L219.562 243.901L224.372 245.694L223.175 246.504L219.535 245.15L219.435 249.033L218.227 249.849L218.355 244.718L213.251 242.812L214.459 241.995L218.393 243.462L218.487 239.271L219.695 238.455Z" fill="white"/>
<path d="M190.897 255.32L196.752 262.299L195.512 262.776L190.745 256.899L191.143 264.46L189.903 264.938L189.573 255.83L190.897 255.32Z" fill="white"/>
<path d="M175.669 260.857L175.899 261.783L174.722 262.075L176.337 268.586L177.514 268.294L177.744 269.221L174.213 270.096L173.983 269.17L175.16 268.878L173.545 262.367L172.368 262.659L172.139 261.733L175.669 260.857Z" fill="white"/>
<path d="M161.413 264.364L162.375 272.927L160.042 273.189C159.358 273.266 158.726 273.263 158.146 273.181C157.558 273.109 157.036 272.934 156.581 272.656C156.126 272.378 155.751 271.974 155.458 271.445C155.166 270.924 154.974 270.257 154.883 269.445C154.791 268.625 154.829 267.924 154.998 267.343C155.167 266.77 155.442 266.293 155.824 265.913C156.206 265.541 156.675 265.25 157.231 265.041C157.78 264.841 158.396 264.702 159.08 264.626L161.413 264.364ZM160.322 265.512L159.219 265.635C158.775 265.685 158.352 265.767 157.949 265.882C157.539 266.006 157.183 266.193 156.883 266.443C156.574 266.703 156.351 267.061 156.212 267.518C156.065 267.984 156.032 268.581 156.114 269.307C156.195 270.034 156.359 270.6 156.603 271.005C156.84 271.42 157.137 271.715 157.494 271.891C157.844 272.077 158.232 272.181 158.659 272.202C159.078 272.233 159.509 272.223 159.954 272.173L161.056 272.05L160.322 265.512Z" fill="white"/>
<path d="M140.804 266.309L140.533 274.922L134.692 274.738L134.725 273.694L139.354 273.839L139.436 271.222L136.019 271.114L136.052 270.07L139.469 270.178L139.559 267.315L134.931 267.169L134.964 266.125L140.804 266.309Z" fill="white"/>
<path d="M119.431 264.828C120.243 264.975 120.912 265.289 121.437 265.768C121.96 266.257 122.327 266.861 122.537 267.58C122.738 268.307 122.76 269.098 122.606 269.953C122.451 270.807 122.153 271.531 121.714 272.125C121.264 272.725 120.709 273.157 120.05 273.422C119.388 273.696 118.651 273.759 117.839 273.612C117.018 273.463 116.346 273.145 115.823 272.656C115.298 272.177 114.934 271.578 114.733 270.859C114.521 270.148 114.492 269.365 114.647 268.51C114.802 267.656 115.105 266.924 115.556 266.315C115.997 265.714 116.548 265.276 117.21 265.002C117.87 264.737 118.61 264.679 119.431 264.828ZM119.249 265.831C118.733 265.737 118.244 265.784 117.781 265.971C117.311 266.157 116.908 266.477 116.572 266.932C116.234 267.395 115.999 267.995 115.865 268.731C115.734 269.459 115.745 270.095 115.9 270.638C116.053 271.191 116.319 271.632 116.696 271.963C117.063 272.3 117.505 272.515 118.021 272.609C118.528 272.701 119.018 272.654 119.488 272.469C119.949 272.29 120.348 271.969 120.685 271.506C121.021 271.051 121.255 270.46 121.387 269.732C121.52 268.996 121.51 268.351 121.357 267.799C121.202 267.255 120.941 266.815 120.574 266.477C120.198 266.138 119.757 265.923 119.249 265.831Z" fill="white"/>
                            </svg>
                            <button   onClick={togglePlay} >
                <svg width="24" height="33" viewBox="0 0 24 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.354492 32.5241V0.346191L23.3387 16.4841L0.354492 32.5241Z" fill="white"/>
            </svg>
                            </button>
                            </div>
                        </div>
                    <video  ref={videoRef}  className="hero-video"   playsInline loop>
                          <source src={video} type="video/mp4" />

                    </video>
                </div>
                <a className="btn btn-section-videos" href="contact.html">
                GET A QUOTE
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M11.5 0.999999C11.5 0.723857 11.2761 0.499999 11 0.499999L6.5 0.5C6.22386 0.499999 6 0.723857 6 0.999999C6 1.27614 6.22386 1.5 6.5 1.5L10.5 1.5L10.5 5.5C10.5 5.77614 10.7239 6 11 6C11.2761 6 11.5 5.77614 11.5 5.5L11.5 0.999999ZM1.35355 11.3536L11.3536 1.35355L10.6464 0.646446L0.646447 10.6464L1.35355 11.3536Z" fill="white"/>
                </svg>
                </a>
            </div>
            <div className='bg-section-video'></div>
        </section>
        <section   className="section members-team">
            <div className='members-team-div1'>
                <h2>Our Team</h2>
            </div>
            <div className='members-team-div2'>
                <swiper-container id='journey-slider2' class="journey-slider2" init="false"> 
                <swiper-slide id='slide1' class="journey-slide">
                    <div>
                        <img src={imagen14} alt="imagen18" />
                        <div className='info-slide'>
                            <h3>John Bernauer </h3>
                            <h6>President</h6>
                            <p>
                            John has been with LIFTEX for over 21 years and is in awe of how the roof raising industry has evolved over time. He is passionate about roof lifting and overcoming the unique challenges that each project brings. At work his priorities are safety first and timeliness.
                            </p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide id='slide2' class="journey-slide">
                    <div>
                        <img src={imagen15} alt="imagen17" />
                        <div className='info-slide'>
                            <h3>Doug Spender Jr. </h3>
                            <h6>Vice President</h6>
                            <p>
                            Doug Jr. has spent half of his life working diligently in LIFTEX Roof Lifting. Starting as a shop assistant and working up to Director, he has learned that if you treat your team like family, and go above and beyond for your clients, success will follow you anywhere.
                            </p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide id='slide3' class="journey-slide">
                    <div>
                        <img src={imagen16} alt="imagen16" />
                        <div className='info-slide'>
                            <h3>Sandy D’Emidio</h3>
                            <h6>Vice President, Structural Steel</h6>
                            <p>
                            The embodiment of a hard work mentality while remaining eased and approachable, Sandy values being punctual and setting the tone for others to follow. He’s seen every facet of LIFTEX Roof Lifting in his 17 years in the company, and is proud of what LIFTEX has accomplished as well as where they’re going.
                            </p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide id='slide4' class="journey-slide">
                    <div>
                        <img src={imagen17} alt="imagen15" />
                        <div className='info-slide'>
                            <h3>Salvatore Dispenziere</h3>
                            <h6>Chairman and Chief Financial Officer</h6>
                            <p>
                            A career CPA, Sal began working with LIFTEX Roof Lifting 25 years ago, helping expand the reach of the business and improving operations. His passion for construction and charity drives him to work hard every day and deliver results beyond client expectations.
                            </p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide id='slide5' class="journey-slide">
                    <div>
                        <img src={imagen18} alt="imagen14" />
                        <div className='info-slide'>
                            <h3>Brian Vreeland </h3>
                            <h6>Director of Sales</h6>
                            <p>
                            A veteran of the oil and energy industry, Brian has a wealth of hands-on experience in the field of commercial construction. He knows that when a team like LIFTEX has conviction and alignment on a company mission, they will achieve anything.
                            </p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide class="journey-slide">
                    <div>
                        <img src={imagen19} alt="imagen19" />
                        <div className='info-slide'>
                            <h3>Matt Devito</h3>
                            <h6>Lead Estimator, Project Manager</h6>
                            <p>
                            Hand-picked to join the LIFTEX team, Matt started out bidding projects and has grown into design and project management, also serving as the prime client contact on projects. He’s dedicated to revamping and modernizing the business in every aspect as we plan for the future.
                            </p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide class="journey-slide">
                    <div>
                        <img src={imagen20} alt="imagen19" />
                        <div className='info-slide'>
                            <h3>Tim Brown, P.E.</h3>
                            <h6>Structural Engineer</h6>
                            <p>
                            Born and raised on a dairy farm in Huntington County, Pennsylvania, Tim Brown has always been familiar with the virtues of hard work and determination. His formative years on the farm instilled in him a deep appreciation for the value of perseverance and ingenuity—traits that have significantly shaped his career.
                            </p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide class="journey-slide">
                    <div>
                        <img src={imagen21} alt="imagen21" />
                        <div className='info-slide'>
                            <h3>Holly Luciano</h3>
                            <h6>Controller</h6>
                            <p>
                            Holly joined LIFTEX in 2019 when she saw an opportunity to aim her dedication to the advancement of roof lifting in the commercial real estate industry. Holly’s expertise makes her an instrumental figure in the LIFTEX mission of revolutionizing the way people approach commercial real estate development.
                            </p>
                        </div>
                    </div>
                </swiper-slide>
                </swiper-container>
                <img className='pos-abs' src={dragSignal} alt="dragSignal" />
            </div>
        </section>
        <section className="section info-team">
        <div id='team1' className='class-info-team'>
            <img src={imagen4} alt="imagen4" />
            <div className='class-info-team-div'>
                <h2>Fortify The <br /> Building Perimeter</h2>
                <p>We install telescoping columns at the building perimeter or new steel beams to support wall-bearing steel.</p>
                <div className='class-info-team-div2'>
                    <div className='class-info-team-div3'>
                        <div>
                            <img src={Grop1} alt="Grop1" />
                            <h3>Separate and Lift the Roof</h3>
                        </div>
                        <p>The edges of the roof are separated, and we raise the roof! Typically, an hour per foot, one section of roof at a time.</p>
                    </div>
                    <div className='class-info-team-div3'>
                        <div>
                            
                            <img src={Grop2} alt="Grop2" />
                            <h3>Structural Re-Support</h3>
                        </div>
                        <p>Additional structural steel to support and
                        brace the taller building. Finally, we close the
                        open space between the previous roof and
                        the existing wall.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div  id='team2' className='class-info-team'>
            <img id='team2-img' src={imagen41} alt="imagen41" />
            <div id='team2-p' className='class-info-team-div'>
                <h2>Install Hydraulics and Hardware</h2>
                <p>Our proprietary hydraulic system is installed at each lift point.</p>
            </div>
        </div>
        </section>
        <section  className="section formulario-team">
            <div className='formulario-team-div'>
                <div className='formulario-team1'>
                <img className='frame' src={frame} alt="frame" />
                <h1>Let’s talk today</h1>
                <form action="">
                    <div className='formulario-team-div1'>
                        <div>
                            <input type="text" placeholder="Your Name" />
                        </div>
                        <div>
                            <input type="text" placeholder="Email*" />
                        </div>
                    </div>
                    <div className='formulario-team-div1'>
                        <div>
                            <input type="text" placeholder="Phone number*" />
                        </div>
                        <div>
                            <input type="text" placeholder="Company" />
                        </div>
                    </div>
                    <div className='formulario-team-div1'>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Let us know your requirement...'></textarea>
                    </div>
                    <button>
                        Send Message
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                        <path d="M11 0.999999C11 0.723857 10.7761 0.499999 10.5 0.499999L6 0.5C5.72386 0.499999 5.5 0.723857 5.5 0.999999C5.5 1.27614 5.72386 1.5 6 1.5L10 1.5L10 5.5C10 5.77614 10.2239 6 10.5 6C10.7761 6 11 5.77614 11 5.5L11 0.999999ZM0.853553 11.3536L10.8536 1.35355L10.1464 0.646446L0.146447 10.6464L0.853553 11.3536Z" fill="white"/>
                        </svg>
                    </button>
                </form>
                </div>
                <div className='formulario-team2'>
                <h3>
  <span id="span1">C</span><span id="span2">a</span><span id="span3">l</span><span id="span4">l</span><span id="span5"> </span>
  <span id="span6">L</span><span id="span7">I</span><span id="span8">F</span><span id="span9">T</span><span id="span10">E</span>
  <span id="span11">X</span><span id="span12"> </span><span id="span13">n</span><span id="span14">o</span><span id="span15">w</span>
  <span id="span16"> </span><span id="span17">t</span><span id="span18">o</span><span id="span19"> </span><span id="span20">l</span>
  <span id="span21">e</span><span id="span22">a</span><span id="span23">r</span><span id="span24">n</span><span id="span25"> </span>
  <span id="span26">m</span><span id="span27">o</span><span id="span28">r</span><span id="span29">e</span><span id="span30"> </span>
  <span id="span31">a</span><span id="span32">b</span><span id="span33">o</span><span id="span34">u</span><span id="span35">t</span>
  <span id="span36"> </span><span id="span37">v</span><span id="span38">e</span><span id="span39">r</span><span id="span40">t</span>
  <span id="span41">i</span><span id="span42">c</span><span id="span43">a</span><span id="span44">l</span><span id="span45"> </span>
  <span id="span46">b</span><span id="span47">u</span><span id="span48">i</span><span id="span49">l</span><span id="span50">d</span>
  <span id="span51">i</span><span id="span52">n</span><span id="span53">g</span><span id="span54"> </span><span id="span55">e</span>
  <span id="span56">x</span><span id="span57">p</span><span id="span58">a</span><span id="span59">n</span><span id="span60">s</span>
  <span id="span61">i</span><span id="span62">o</span><span id="span63">n</span><span id="span64"> </span><span id="span65">f</span>
  <span id="span66">o</span><span id="span67">r</span><span id="span68"> </span><span id="span69">y</span><span id="span70">o</span>
  <span id="span71">u</span><span id="span72">r</span><span id="span73"> </span><span id="span74">p</span><span id="span75">r</span>
  <span id="span76">o</span><span id="span77">p</span><span id="span78">e</span><span id="span79">r</span><span id="span80">t</span>
  <span id="span81">y</span><span id="span82">.</span>
</h3>

                </div>
            </div>
        </section>
        <Footer />
    </main>
    </>
  );
}

export default Home;
