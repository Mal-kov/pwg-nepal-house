import $ from 'jquery';
import 'owl.carousel';
import '@fortawesome/fontawesome-free/js/all.js'
import "@fortawesome/fontawesome-free/css/all.css";
import './style.scss';

$(document).ready(function() {



    // Открытие меню по клику на Гамбургер
    $(document).on('click', '.header_menuHumb', function () {
        $('.header_menuMobile').addClass('mobileMenu--active');
    });

    // Закрытие меню по клику на -  Х Меню
    $(document).on('click', '.menuMobile_btn', function () {
        $('.header_menuMobile').removeClass('mobileMenu--active');
    });

    // Открытие видео на hero-video
    $(document).on('click', '.hero_contentPlay', function () {
        $('#hero_video').addClass('video--active');
    });

    // Закрытие видео на hero-video
    $(document).on('click', '#hero_videoClose', function () {
        $('#hero_video').removeClass('video--active');
    });


     // Открытие видео на 
     $(document).on('click', '#frontPage_video1On', function () {
        $('#frontPage_video1').addClass('video--active');
    });

    // Закрытие видео на 
    $(document).on('click', '#frontPage_video1Off', function () {
        $('#frontPage_video1').removeClass('video--active');
    });

     // Открытие видео на 
     $(document).on('click', '#frontPage_video2On', function () {
        $('#frontPage_video2').addClass('video--active');
    });

    // Закрытие видео на 
    $(document).on('click', '#frontPage_video2Off', function () {
        $('#frontPage_video2').removeClass('video--active');
    });

     // Открытие видео на 
     $(document).on('click', '#frontPage_video3On', function () {
        $('#frontPage_video3').addClass('video--active');
    });

    // Закрытие видео на 
    $(document).on('click', '#frontPage_video3Off', function () {
        $('#frontPage_video3').removeClass('video--active');
    });

     // Открытие видео на 
     $(document).on('click', '#frontPage_video4On', function () {
        $('#frontPage_video4').addClass('video--active');
    });

    // Закрытие видео на 
    $(document).on('click', '#frontPage_video4Off', function () {
        $('#frontPage_video4').removeClass('video--active');
    });

    // Открытие видео на 
    $(document).on('click', '#schools_videoOn', function () {
        $('#schools_video').addClass('video--active');
    });

    // Закрытие видео на 
    $(document).on('click', '#schools_videoOff', function () {
        $('#schools_video').removeClass('video--active');
    });

    // Открытие видео на 
    $(document).on('click', '#singleTour1_videoOn', function () {
        $('#singleTour1_video').addClass('video--active');
    });

    // Закрытие видео на 
    $(document).on('click', '#singleTour1_videoOff', function () {
        $('#singleTour1_video').removeClass('video--active');
    });

    // Открытие видео на 
    $(document).on('click', '#singleTour2_videoOn', function () {
        $('#singleTour2_video').addClass('video--active');
    });

    // Закрытие видео на 
    $(document).on('click', '#singleTour2_videoOff', function () {
        $('#singleTour2_video').removeClass('video--active');
    });


    // $(".extremum-click").click(function () {
    //     $(this).siblings(".extremum-slide").slideToggle("slow");
    //   });

    // $(document)(".extremum-click").click(function () {
    //     $(this).siblings(".extremum-slide").slideToggle("slow");
    // });insiders_itemDesc




    // $(document).on('click', '.moreless-button'), function () {

    //     $('.moretext').slideToggle();

    //     if ($(this)('.moreless-button').text() == "Learn More") {
    //         $(this).text("Learn Less")
    //         $(this)('.moretext').slideToggle()
    //     } else {
    //         $(this).text("Learn More")
    //         $(this)('.moretext').slideToggle()
    //     }
    // };


    $('div.bookTour_adults').on('click', 'span', function(){
        var inp = $('input' , this.parentNode),
            val = +inp.val()||0;
        inp.val(val += this.className == 'adultsMinus' ? val > 0 ? -1: 0: 1);
        var peoples = parseInt(document.getElementById('childrenItem').value);

        var plus = ('.childrenPlus').addEventListener('clik');
        var totalPrice = peoples * 35;
        document.getElementById('adultsTotal').innerHTML = totalPrice;
        
        if (peoples >= 1){
            
            

        } 
        
        // $('adultsTotal').
    });


    // раскрыв и скрытие блоков на странице Инсайдеров
    $(".moreless-button").click(function () {
        $(this).siblings(".moretext").slideToggle("slow");
      });







    $('div.bookTour_children').on('click', 'span', function(){
        var inp = $('input' , this.parentNode),
            val = +inp.val()||0;
        inp.val(val += this.className == 'childrenMinus' ? val > 0 ? -1: 0: 1);
        // var peoples = parseInt(document.getElementById('childrenItem').value);

        // var plus = ('.childrenPlus').addEventListener('clik');
        // var totalPrice = peoples * 35;
        // document.getElementById('adultsTotal').innerHTML = totalPrice;
        
        if (peoples >= 1){
            
            

        } 
        
        // $('adultsTotal').
    });



    // Карусель для главной страницы
    $('#owl_carousel_awards').owlCarousel({
        loop:true,
        margin:10,
        nav: false,
        dots: true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsiveClass:false,
        responsive:{
            0:{
                items:1,
                dots: true
            },
            769:{
                items:2
            }
        }
    });

    // Карусель для главной страницы
    $('#owl_carousel_tours').owlCarousel({
        loop: false,
        margin: 20,
        nav: false,
        dots: false,
        autoplay:false,
        autoplayTimeout:6000,
        autoplayHoverPause:false,
        responsiveClass:false,
        responsive:{
            0:{
                items:1,
                dots: true,
                nav: false,
                loop: true,
                utoplay:true,
                autoplayTimeout:6000,
                autoplayHoverPause:true,
                responsiveClass:true,
    
            },
            981:{
                
                loop:false,
                items:3
            }
            
        }
    });

     // Карусель для главной страницы
     $('#owl_carousel_singleTour').owlCarousel({
        loop:true,
        margin:10,
        nav: false,
        dots: false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                dots: true,
                nav: false
    
            }
            // 767:{
            //     loop:false,
            //     item:2
            // }
            
        }
    });

    

    // Карусель для главной страницы
    $('#owl_carousel_tourSmallScreen').owlCarousel({
        loop:true,
        margin:10,
        nav: false,
        dots: false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsiveClass:true,
        items:1
        // responsive:{
        //     0:{
        //         ,
        //         dots: true,
        //         nav: false
    
        //     }
            // 767:{
            //     loop:false,
            //     item:2
            // }
            
        // }
    });
    
    
})

$(window).scroll(function(){
    if ($(this).scrollTop()>300){
        $('singleTour_bookBlock').fadeIn();
    } else {
        $('singleTour_bookBlock').fadeOut();
    }
});




