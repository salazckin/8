$(function () {

    var galScroll;
    //      PRELOADER

    $(window).on('load', function () {
        var $pre = $('.pre-loader');
        $pre.delay(350).fadeOut('slow');

        loadedMenuScroll();
    });

    //   header-section HEIGHT

    var windowHeight = $(window).innerHeight();
    function setHeight() {
        windowHeight = $(window).innerHeight();
        $('.header-section').css('height', windowHeight);
        $('.map-slide').css('height', windowHeight);
        $('#gallery').css('height', windowHeight);
    }

    if(window.addEventListener) {
        window.addEventListener('orientationchange', setHeight);
    }
    $(window).resize(setHeight).trigger('resize');


    //     HEADER  scroll

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0){
            $('.header').addClass('move');
        }else {
            $('.header').removeClass('move');
        }
    });

    //     btn-scrollNext

    $('.btn-scrollNext').on('click', function (e) {
        e.preventDefault();
        var idscroll = $(this).attr('href');
        $.scrollTo(idscroll, 500);
        return false;
    });

    //     MAIN-MENU

    $('.btn-menu').on('click', function (e) {
        e.preventDefault();
        $('.main-menu').toggleClass('open-menu');
        $('.map-slide').removeClass('show');
        $('.gallery__w').removeClass('show');

        $('header').removeClass('move-imp');
        $body.removeAttr('style');
        $('.wrapper').removeAttr('style');

        scrollMenu();
    });

    $('.logo-btn').on('click',function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
        $('.map-slide').removeClass('show');
        $('.gallery__w').removeClass('show');
        $('.main-menu').toggleClass('open-menu');

        $('header').removeClass('move-imp');
        $body.removeAttr('style');
        $('.wrapper').removeAttr('style');
    });

    var $mainMenu = $('.main-menu');
    function scrollMenu(){
        if($mainMenu.hasClass('open-menu')){
            scrTop = $(window).scrollTop();
            windowHeight = $(window).innerHeight();

            $body.css({'overflow':'hidden'});
            $('.wrapper').css({'max-height': windowHeight});
            $('header').addClass('move-imp');

        }else{
            $body.removeAttr('style');
            $('.wrapper').removeAttr('style');
            $('header').removeClass('move-imp')
                .addClass('move');
            setTimeout(function(){
                $('html,body').animate({scrollTop: scrTop},0,function(){
                    $('header').removeClass('move-imp');
                });
            },5);
        }
    }


    var menuScroll;
    function loadedMenuScroll() {
        if(menuScroll) {
            menuScroll.destroy();
            menuScroll = null;
        }
        menuScroll = new IScroll('.main-menu',{
            "click": true
        });
        console.log('>>>');
    }

    $(window).on("resize",function(){
        loadedMenuScroll();
    });


    $('.logo a').on('click', function(e){
        e.preventDefault();
        $('.main-menu').removeClass('open-menu');
        $('.map-slide').removeClass('show');
        $('.gallery__w').removeClass('show');
    });

    /*$('#mainMenu li').on('click', function(){
        $('.main-menu').toggleClass('open-menu');
        scrollMenu();
    });

    $('#mainMenu li ul li').on('click', function(){
        $('.main-menu').toggleClass('open-menu');
        scrollMenu();
    });*/

    //     NAV-SITE

    $('#mainMenu').on('click','a[href^="#m"]',function (e) {
        e.preventDefault();
        var _this = $(this),
            target = this.hash,
            $target = $(target);

        $('.main-menu').removeClass('open-menu');
        $('header').removeClass('move-imp');
        $body.removeAttr('style');
        $('.wrapper').removeAttr('style');
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });


    //  btn PopUp in MENU

    $('#mapPopUp').on('click',function (e) {
        e.preventDefault();
        $('.map-slide').addClass('show');
        $('.main-menu').removeClass('open-menu');
        $('header').addClass('move-imp');
        $body.removeAttr('style');
        $('.wrapper').removeAttr('style');
    });

    $('#galleryPopUp').on('click',function (e) {
        e.preventDefault();
        $('.gallery__w').toggleClass('show');
        $('.main-menu').removeClass('open-menu');
        $('header').addClass('move-imp');
        $body.removeAttr('style');
        $('.wrapper').removeAttr('style');
    });

    //     btn-POP-UP (map & gallery)

    var $map = $('.map-slide'),
        $gallery =$('.gallery__w'),
        $body = $('body'),
        scrTop = 0;

    function scrollMap(){
        if($map.hasClass('show')){
            scrTop = $(window).scrollTop();
            windowHeight = $(window).innerHeight();

            setTimeout(function(){
                $('html,body').animate({scrollTop: 0},0,function(){
                    $('header').addClass('move-imp');
                });

            },100);

            $body.css({'position':'absolute','height': windowHeight, 'overflow':'hidden'});
            $('.wrapper').css({'max-height': windowHeight});

        }else{
            $body.removeAttr('style');
            $('.wrapper').removeAttr('style');
            $('html,body').animate({scrollTop: scrTop},0,function(){
                $('header').removeClass('move-imp');
            });
        }
    }

    function scrollGallery(){
        if($gallery.hasClass('show')){
            scrTop = $(window).scrollTop();
            console.log('>> >> >!!!> ', $(window).scrollTop());
            windowHeight = $(window).innerHeight();

            setTimeout(function(){
                $('html,body').animate({scrollTop: 0},0,function(){
                    $('header').addClass('move-imp');
                });
            },100);


            $body.css({'position':'absolute','height': windowHeight, 'overflow':'hidden'});
            $('.wrapper').css({'max-height': windowHeight});
            setTimeout(function(){
                loaded();
            },50);


        }else{
            $body.removeAttr('style');
            $('.wrapper').removeAttr('style');
            $('html,body').animate({scrollTop: scrTop},0,function(){
                $('header').removeClass('move-imp');
            });
        }
    }


    $('.btn-map').on('click', function (e) {
        e.preventDefault();
        $map.toggleClass('show');

            scrollMap();

    });

    $('.btn-gallery').on('click', function(e){
        e.preventDefault();
        $gallery.toggleClass('show');
        scrollGallery();
    });

    $('.btn-slideCl').on('click', function (e) {
        e.preventDefault();
        $map.removeClass('show');
        $gallery.removeClass('show');
        scrollGallery();
        scrollMap();
    });



         //     GALLERY

    var api;

    jQuery(document).ready(function(){
        api = $("#gallery").unitegallery();

        api.on("resize", function(){
            setTimeout(function(){
                loaded();
            },800);
        });
    });


    function loaded() {
        if(galScroll) {
            galScroll.destroy();
            galScroll = null;
        }
        galScroll = new IScroll('#galleryScroll',{
            "click": true
        });
        console.log('>>>');
    }

    $(window).on("resize",function(){
        loaded();
    });


    //      TABS FORM

    $('.discountForm__w').each(function(i,formWrap) {

        var _form = $(formWrap).find('form');

        $(formWrap).on('click','.form-controls li:not(.disabled)', function () {
            var item = $(this),
                contentItem = _form.find('ul li'),
                itemPosition = item.index();

            contentItem.eq(itemPosition)
                .addClass('active')
                .siblings()
                .removeClass('active');

            item.addClass('active')
                .siblings()
                .removeClass('active');
        });

        _form.on('click', '.btn-form_next', function(){
            var item = $(this).closest('li').next(),
                contentItem = $(formWrap).find('.form-controls li'),
                itemPosition = item.index();

            contentItem.eq(itemPosition)
                .addClass('active')
                .siblings()
                .removeClass('active');

            item.addClass('active')
                .siblings()
                .removeClass('active');
        });

    });

    //      bind events

    var $header = $('.header');

    $(document)
        .on('focus', '.rfield', function(e) {
            $header.addClass('fixheader');
        })
        .on('blur', '.rfield', function(e) {
            $header.removeClass('fixheader');
        });

                          // MAP

            google.maps.event.addDomListener(window, 'load', init);
        var map;
        function init() {
            var mapOptions = {
                center: new google.maps.LatLng(55.7786344,37.6232152),
                zoom: 15,
                zoomControl: false,
                disableDoubleClickZoom: false,
                mapTypeControl: false,
                scaleControl: false,
                scrollwheel: true,
                panControl: false,
                streetViewControl: false,
                draggable : true,
                overviewMapControl: false,
                overviewMapControlOptions: {
                    opened: false
                },
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [ { "featureType": "landscape", "elementType": "labels", "stylers": [ { "visibility": "off" } ] },
                    { "featureType": "transit", "elementType": "labels", "stylers": [ { "visibility": "off" } ] },
                    { "featureType": "poi", "elementType": "labels", "stylers": [ { "visibility": "off" } ] },
                    { "featureType": "water", "elementType": "labels", "stylers": [ { "visibility": "off" } ] },
                    { "featureType": "road", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] },
                    { "stylers": [ { "hue": "#00aaff" }, { "saturation": -100 }, { "gamma": 1 }, { "lightness": 0 } ] },
                    { "featureType": "road", "elementType": "labels.text.fill", "stylers": [ { "visibility": "on" }, { "lightness": 24 } ] },
                    { "featureType": "road", "elementType": "geometry", "stylers": [ { "lightness": 57 } ] } ]
            };
            var mapElement = document.getElementById('map');
            var map = new google.maps.Map(mapElement, mapOptions);

            var locations = [
                ['�������', 'undefined', '', 'undefined', 'undefined', 55.7786344,37.6232152, 'solid-pin-red.png']
            ];
            for (i = 0; i < locations.length; i++) {
                if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
                if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}

                marker = new google.maps.Marker({
                    icon: new google.maps.MarkerImage('img/Contacts/Marker.svg',
                        null, null, null, new google.maps.Size(30,40)),
                    position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                    map: map,
                    desc: description
                });

                $('#mapPopUp').on('click',function (e) {
                    map.setOptions({
                        center: new google.maps.LatLng(55.7786344,37.6232152)
                    });
                });

                $('.btn-map').on('click', function (e) {
                    map.setOptions({
                        center: new google.maps.LatLng(55.7786344,37.6232152)
                    });
                });

                var currCenter = map.getCenter();

                $(window).on("resize",function(){
                    console.log('111');
                    setTimeout(function(){
                        map.setOptions({
                            center: currCenter
                        });
                    },100);

                });

                link = '';     }

        }

                 //    formValidation


    $('.discountForm').each(function(){
        var form = $(this),
            fieldName = form.find('.name'),
            fieldNumber = form.find('.number'),
            btnNext = form.find('.btn-form_next'),
            btnSend = form.find('.btn-form_send');

        form.find('.rfield').addClass('empty_field');

        function checkInput(){
            fieldName.each(function(){
                if($(this).val() != ''){
                    $(this).removeClass('empty_field');
                } else {
                    $(this).addClass('empty_field');
                }
            });

            fieldNumber.each(function(){
                if($(this).val() != ''){
                    $(this).removeClass('empty_field');
                }else{
                    $(this).addClass('empty_field');
                }
            });
        }

        function lightEmpty(){
            form.css({'border-color':'#bd1e2c'});
            setTimeout(function(){
                form.removeAttr('style');
            },500);
        }

        function sizeEmptyName(){
            fieldName.val( $.trim(fieldName.val()) );
            checkInput();
            var sizeEmptyName = form.find('.first .empty_field').size();
            if(sizeEmptyName > 0){
                if(btnNext.hasClass('disabled')){
                    return false
                } else {
                    btnNext.addClass('disabled');
                }
            } else {
                btnNext.removeClass('disabled');
            }
        }

        function sizeEmptyNumber(){
            checkInput();
            var sizeEmptyNumber = form.find('.second .empty_field').size();
            if(sizeEmptyNumber > 0){
                if(btnSend.hasClass('disabled')){
                    return false
                } else {
                    btnSend.addClass('disabled')
                }
            } else {
                btnSend.removeClass('disabled')
            }

        }

        btnNext.on('click', function(){
            sizeEmptyName();
            if($(this).hasClass('disabled')){
                lightEmpty();
                return false
            }
        });

        form.on('click', '.btn-form_send', function(){
            sizeEmptyNumber();
            if($(this).hasClass('disabled')){
                lightEmpty();
                return false
            }if(btnNext.hasClass('disabled')){
                lightEmpty();
                return false
            }else{
                console.log('>>>');
                var form_data = form.serialize(),
                    resultBlock = form.find(".result-messages__w"),
                    resultMessage = form.find(".result-messages p");
                $.ajax({
                    type: "POST",
                    url: "/email.php",
                    data: form_data
                }).done(function() {
                    resultBlock.slideDown(500);
                    resultMessage.html("Ваше сообщение отправлено!");
                    setTimeout(function(){
                        resultBlock.slideUp();
                        form [0].reset();
                        form.find('li:first-child')
                            .addClass('active')
                            .siblings()
                            .removeClass('active');
                    },2500);
                }).fail(function() {
                    resultBlock.slideDown(500);
                    resultMessage.html("Возникла ошибка!");
                    setTimeout(function(){
                        resultBlock.slideUp();
                    },2500);
                });
            }
        });

        fieldNumber.bind("change keyup input click", function() {
            if (this.value.match(/[^0-9]/g)) {
                this.value = this.value.replace(/[^0-9]/g, '');
            }
        });
    });

                 //    BLOCK-ANIMATIONS


    var timeout;
    $(window).scroll(function(){
        clearTimeout(timeout);

        timeout = setTimeout(function(){

            $('.portfolio-section').each(function(){
                var el = $(this);
                var wh = $(window).height(),
                    scrlTop = $(window).scrollTop(),
                    offsetTop = el.offset().top;

                if ( (scrlTop + wh) >= offsetTop) {
                    el.find('.portfolio__info')
                        .addClass('animate-load');
                    el.find('.portfolio-list__item')
                        .addClass('animate-load');
                }
            });

            $('.products-item').each(function(){
                var el = $(this);
                var wh = $(window).height(),
                    scrlTop = $(window).scrollTop(),
                    offsetTop = el.offset().top;

                if ( (scrlTop + wh) >= offsetTop) {
                    el.addClass('animate-load');
                }
            });

            $('.news-section').each(function(){
                var el = $(this);
                var wh = $(window).height(),
                    scrlTop = $(window).scrollTop(),
                    offsetTop = el.offset().top;

                if ( (scrlTop + wh) >= offsetTop) {
                    el.find('.news-section__i').addClass('animate-load');
                }
            });

             $('.contacts-section').each(function(){
                var el = $(this);
                var wh = $(window).height(),
                    scrlTop = $(window).scrollTop(),
                    offsetTop = el.offset().top;

                if ( (scrlTop + wh) >= offsetTop) {
                    el.find('h2').addClass('animate-load');
                    el.find('.contacts-list__item').addClass('animate-load');
                    el.find('.btn__w').addClass('animate-load');
                }
            })
        }, 100);

    });

    $(document).ready(function (){
        setTimeout(function(){

            $('.header-section').each(function(){
                var el = $(this);
                var wh = $(window).height(),
                    scrlTop = $(window).scrollTop(),
                    offsetTop = el.offset().top;

                if ( (scrlTop + wh) >= offsetTop) {
                    el.find('.header-img__w').addClass('animate-load');
                    el.find('.header-section__i').addClass('animate-load');
                }
            })
        }, 850);
    });

});