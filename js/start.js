$(function () {


    //     MAIN-MENU

    $('.btn-menu').on('click', function (e) {
        e.preventDefault();
        $('.main-menu').toggleClass('open-menu');
    });

    $('#mainMenu li').on('click', function(){
        $('.main-menu').toggleClass('open-menu');
        $('#fp-nav')
            .css('display', 'block');
        $('.header')
            .removeClass('menu-white')
            .removeClass('animate-menu');
        $.fn.fullpage.setAllowScrolling(true);
        $.fn.fullpage.setKeyboardScrolling(true);
        $.fn.fullpage.moveSlideLeft();
    });


    $('#mainMenu li ul li').on('click', function(){
        $('.main-menu').toggleClass('open-menu');
        $('#fp-nav')
            .css('display', 'block');
        $('.header')
            .removeClass('menu-white')
            .removeClass('animate-menu');
        $.fn.fullpage.setAllowScrolling(true);
        $.fn.fullpage.setKeyboardScrolling(true);
        $.fn.fullpage.moveSlideLeft();
    });

    $('.logo a').on('click', function(){
        $.fn.fullpage.setAllowScrolling(true);
        $.fn.fullpage.setKeyboardScrolling(true);
        $.fn.fullpage.moveSlideLeft();
        $('.main-menu').removeClass('open-menu');
    });

    //    fullPage

        $('#fullpage').fullpage({
            navigation: true,
            anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
            menu: '#mainMenu',
            loopHorizontal: false,
            fitToSectionDelay: 1000,
            scrollOverflow: true,
            afterRender: function(){
                $(function(){
                    $('.portfolio-wr').slimScroll({
                        alwaysVisible: true
                    });
                });
            },

            onLeave: function(index, nextIndex, direction){

                if(nextIndex == 1){
                    $('.logo')
                        .removeClass('black')
                        .removeClass('red');
                    $('.btn-menu')
                        .removeClass('black');
                    $('.nav-actions')
                        .removeClass('black');
                    $('#fp-nav')
                        .removeClass('black');
                }if(nextIndex == 2){
                    $('.portfolio-list__item')
                        .addClass('show');
                    $('.portfolio__info__text')
                        .addClass('show');
                    $('.portfolio__info')
                        .addClass('show');
                    $('.portfolio__info').find('.btn__w')
                        .addClass('show');
                }if(nextIndex == 3){
                    $('.btn-menu')
                        .removeClass('black');
                    $('.nav-actions')
                        .removeClass('black');
                    $('#fp-nav')
                        .removeClass('black');
                    $('.logo')
                        .addClass('black')
                        .addClass('red');
                    $('.services-section_right')
                        .addClass('show');
                    $('.services-section_left')
                        .addClass('show');
                }if(nextIndex == 4){
                    $('.news-section__i')
                        .addClass('show');
                }if(nextIndex == 5){
                    $('.contacts-list__item')
                        .addClass('show');
                    $('.contacts-section__i')
                        .addClass('show');
                    $('.moveDown')
                        .addClass('dis');
                }else{
                    $('.moveDown')
                        .removeClass('dis');
                }
                if(nextIndex == 2 || nextIndex == 4 || nextIndex == 5){
                    $('.logo')
                        .addClass('black')
                        .addClass('red');
                    $('.btn-menu')
                        .addClass('black');
                    $('.nav-actions')
                        .addClass('black');
                    $('#fp-nav')
                        .addClass('black');
                }
            },

            onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){
                if(index == 2 && slideIndex == 0 && direction == 'right'){
                    $('.header')
                        .addClass('menu-white');
                }
                if(anchorLink == 'secondPage' && slideIndex == 1){
                    $.fancybox.close( true );
                }
                if(anchorLink == 'secondPage' && slideIndex == 1){
                    $.fancybox.close( true );
                }
                if(direction == 'right'){
                    $('#fp-nav')
                        .css('display', 'none');
                    $('.header')
                        .addClass('animate-menu');
                    $('.menu-header')
                        .addClass('menu-header-up');
                    $.fn.fullpage.setAllowScrolling(false);
                    $.fn.fullpage.setKeyboardScrolling(false);
                }else{
                    $('#fp-nav')
                        .css('display', 'block');
                    $('.header')
                        .removeClass('menu-white')
                        .removeClass('animate-menu');
                    $('.menu-header')
                        .removeClass('menu-header-up');
                    $.fn.fullpage.setAllowScrolling(true);
                    $.fn.fullpage.setKeyboardScrolling(true);
                }
            },

            afterLoad: function(anchorLink){

                $.fn.fullpage.setAllowScrolling(false, 'right');
                $.fn.fullpage.setKeyboardScrolling(false, 'right');

                setTimeout(function(){
                    $('.loader').remove();                 // LOADER
                    if(anchorLink == 'firstPage'){
                        $('.header-section__img')
                            .delay(50)
                            .animate({'left':'28%'},1500);
                        //$('.header-section__text')
                        //    .delay(100)
                        //    .addClass('animate-load');
                        $('.header-section__text')
                            .delay(50)
                            .animate({'right': '16%'},2000);
                        $('.moveUp')
                            .addClass('dis');
                    }else{
                        $('.moveUp')
                            .removeClass('dis');
                    }
                    var headerWidth = $('.header-section').width(),
                        headerHeight= $('.header-section').height();
                    $(window).resize(function(){
                        headerWidth = $('.header-section').width();
                        headerHeight= $('.header-section').height();
                    });

                    $('.header-section').on('mousemove', function (e) {
                           var element = $('.header-section__img__w'),
                               xPos = e.pageX,
                               yPos = e.pageY,
                               speed = 0.05,
                               _width = headerWidth,
                               _height= headerHeight,
                               center = {
                                x: _width/2,
                                y: _height/2
                               },
                               coordsX = (center.x - xPos*speed*2) - center.x,
                               coordsY = (center.y - yPos*speed) - center.y;

                        element.css({
                            left: coordsX,
                            top: coordsY
                        });
                    });
                },150);
            }

        });

    //       btn-nextSlide

    $('.btn-nextSlide').on('click', function(e){
        e.preventDefault();
        $.fn.fullpage.moveSlideRight();
    });

    //      btn-slideCl

    $('.btn-slideCl').on('click', function(){
        $.fn.fullpage.moveSlideLeft();
    });
    $('#fp-nav').append($('.nav-actions'));


    $('#moveUp').on('click', function(e){
        e.preventDefault();
        $.fn.fullpage.moveSectionUp();
    });

     $('#moveDown').on('click', function(e){
        e.preventDefault();
         $.fn.fullpage.moveSectionDown();
    });

        //     GALLERY

    $(".fancybox")
        .attr('rel', 'gallery')
        .fancybox({
            nextEffect : 'elastic',
            prevEffect : 'elastic',
            autoCenter : false,
            padding: 0,
            margin: 0,
            fitToView: true,
            afterLoad: function () {
                $.extend(this, {
                    aspectRatio : false,
                    type    : 'html',
                    width   : '100%',
                    height  : '100%',
                    content : '<img class="fancybox-image" src="' + this.href + '" style="display:block;height:auto;width:100%;" />'
                });

            //   autoScroll-img

                $('.fancybox-overlay').each(function(){
                    $(this).find('.fancybox-inner').css({
                        'backface-visibility':'hidden'
                    });
                    $('.fancybox-overlay-fixed').on('mousemove',function(e){
                        var overHeight = $(this).height(),
                            overTop = parseInt($(this).css('top')),
                            cursorY = e.pageY - overTop,
                            innerHeight = $(this).find('.fancybox-image').height(),
                            diff = innerHeight - overHeight,
                            koef = diff / overHeight;
                        //$(".fancybox-overlay")[0].scrollTop = cursorY*koef;
                        trfTop = -(cursorY*koef);

                        $(this).find('.fancybox-image').css({
                            '-webkit-transform': 'translate(0,'+trfTop+'px)',
                            '-moz-transform': 'translate(0,'+trfTop+'px)',
                            '-o-transform': 'translate(0,'+trfTop+'px)',
                            '-ms-transform': 'translate(0,'+trfTop+'px)',
                            'transform': 'translate(0,'+trfTop+'px)'
                        });
                    });
                });

                $('.btn-menu').on('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    $.fancybox.close();
                });

                $('.logo a').on('click', function(e){
                    e.stopPropagation();
                    $.fancybox.close();
                });

            },
            beforeShow: function () {
                $('.fancybox-overlay').slimScroll({
                    height: 'auto'
                });
            }
        });


    //      TABS FORM

    $('.discountForm__w').each(function(i,formWrap) {

        var _form = $(formWrap).find('form');

        _form.on('click', '.btn-form_next', function(){
            var item = $(this).closest('li').next();

            item.addClass('active')
                .siblings()
                .removeClass('active');
        });

    });


    //      TABS Products

    $('.products-list li').on('click', function(){
        var item = $(this),
            contentInfo = $('.products-info > li'),
            contentImg = $('.products-img-list > li'),
            itemPosition = item.index();

        contentInfo.eq(itemPosition)
            .addClass('active')
            .siblings()
            .removeClass('active');

        contentImg.eq(itemPosition)
            .addClass('active')
            .siblings()
            .removeClass('active');

        item.addClass('active')
            .siblings()
            .removeClass('active');
    });

    //      TABS MENU(prod-section)

    $('#subMenu li').on('click', function(){
        var item = $(this),
            contentInfo = $('.products-info > li'),
            contentImg = $('.products-img-list > li'),
            activeIcon = $('.products-list li'),
            itemPosition = item.index();

        contentInfo.eq(itemPosition)
            .addClass('active animated fadeIn')
            .siblings()
            .removeClass('active');

        contentImg.eq(itemPosition)
            .addClass('active')
            .siblings()
            .removeClass('active');

        activeIcon.eq(itemPosition)
            .addClass('active')
            .siblings()
            .removeClass('active');
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
                    { "stylers": [ { "hue": "#00aaff" }, { "saturation": -100 }, { "gamma": 2 }, { "lightness": 0 } ] },
                    { "featureType": "road", "elementType": "labels.text.fill", "stylers": [ { "visibility": "on" }, { "lightness": 24 } ] },
                    { "featureType": "road", "elementType": "geometry", "stylers": [ { "lightness": 57 } ] } ]
            };
            var mapElement = document.getElementById('map');
            var map = new google.maps.Map(mapElement, mapOptions);

            var locations = [
                ['�������', 'undefined', '', 'undefined', 'undefined', 55.7786344,37.6232152, '../img/markers/marker.png']
            ];
            for (i = 0; i < locations.length; i++) {
                if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
                if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}

                var image = new google.maps.MarkerImage('img/Contacts/marker.png',
                    new google.maps.Size(30,44),
                    new google.maps.Point(0, 0),
                    new google.maps.Point(14, 42)
                );

                marker = new google.maps.Marker({
                    icon: image,
                    position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                    map: map,
                    desc: description
                });

                $('.btn-nextSlide').on('click', function(){
                    map.setOptions({
                        center: new google.maps.LatLng(55.7786344,37.6232152)
                    });
                });
                $('.btnMap').on('click', function(){
                    map.setOptions({
                        center: new google.maps.LatLng(55.7786344,37.6232152)
                    });
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
                }else {
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
                        resultBlock.sldideUp();
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

});