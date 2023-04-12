
$(document).ready(function() {
		var w=$(window).outerWidth();
		var h=$(window).outerHeight();
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf("MSIE ");
		var isMobile = {Android: function() {return navigator.userAgent.match(/Android/i);},BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},Windows: function() {return navigator.userAgent.match(/IEMobile/i);},any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}};
	function isIE() {
		ua = navigator.userAgent;
		var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
		return is_ie; 
	}
	if(isIE()){
		$('body').addClass('ie');
	}
	if(isMobile.any()){
		$('body').addClass('touch');
	}
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
if (isMobile.any()) { }

if (location.hash) {
	var hsh = location.hash.replace('#', '');
	if ($('.popup-' + hsh).length > 0) {
		popupOpen(hsh);
	} else if ($('div.' + hsh).length > 0) {
		$('body,html').animate({ scrollTop: $('div.' + hsh).offset().top, }, 500, function () { });
	}
}
//ZOOM==================================================================================================
if ($('.gallery').length > 0) {
	baguetteBox.run('.gallery', {
		// Custom options
	});
}
//BURGER==================================================================================================
let iconMenu = document.querySelector(".icon-menu");
let body = document.querySelector("body");
let menuBody = document.querySelector(".menu__body");
if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		iconMenu.classList.toggle("active");
		body.classList.toggle("lock");
		menuBody.classList.toggle("active");
	});
}

//FULLSCREEN==============================================================================================
function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();

//TABS=====================================================================================================
$('body').on('click', '.tab__navitem', function (event) {
	var eq = $(this).index();
	if ($(this).hasClass('parent')) {
		var eq = $(this).parent().index();
	}
	if (!$(this).hasClass('active')) {
		$(this).closest('.tabs').find('.tab__navitem').removeClass('active');
		$(this).addClass('active');
		$(this).closest('.tabs').find('.tab__item').removeClass('active').eq(eq).addClass('active');
		if ($(this).closest('.tabs').find('.slick-slider').length > 0) {
			$(this).closest('.tabs').find('.slick-slider').slick('setPosition');
		}
	}
});

//SPOLLERS==================================================================================================
$.each($('.spoller.active'), function (index, val) {
	$(this).next().show();
});
$('body').on('click', '.spoller', function (event) {
	if ($(this).hasClass('mob') && !isMobile.any()) {
		return false;
	}
	if ($(this).hasClass('closeall') && !$(this).hasClass('active')) {
		$.each($(this).closest('.spollers').find('.spoller'), function (index, val) {
			$(this).removeClass('active');
			$(this).next().slideUp(300);
		});
	}
	$(this).toggleClass('active').next().slideToggle(300, function (index, val) {
		if ($(this).parent().find('.slick-slider').length > 0) {
			$(this).parent().find('.slick-slider').slick('setPosition');
		}
	});
	return false;
});
//PRELOADER=================================================================================================
document.body.onload = function () {
	setTimeout(function () {
		var preloader = document.getElementById('page-preloader');
		if (!preloader.classList.contains('done')) {
			preloader.classList.add('done');
		}
	}, 1000)
}
//Nicescroll=================================================================================================
$(function () {
	if (window.innerWidth > 768) {
		$("body").niceScroll({
			cursorcolor: "#57B8FF",
			cursoropacitymin: 1,
			cursorborder: "0px solid #fff",
			zindex: "50",
		});
	}
});
//Scroll-Top================================================================================================
$('.back-to-top').click(function () {
	$('body,html').animate({ scrollTop: 0 }, 800); // 800 - Скорость анимации
});

$(window).scroll(function () { // Отслеживаем начало прокрутки
	let scrolled = $(window).scrollTop(); // Вычисляем сколько было прокручено.

	if (scrolled > 350) { // Если высота прокрутки больше 350 - показываем кнопку
		$('.back-to-top').addClass('active');
	} else {
		$('.back-to-top').removeClass('active');
	}
});
//==========================================================================================================
//SLIDERS
if ($('.mainslider').length > 0) {
	$('.mainslider').slick({
		//autoplay: true,
		infinite: false,
		dots: true,
		arrows: true,
		accessibility: false,
		slidesToShow: 3,
		autoplaySpeed: 3000,
		//asNavFor:'',
		//appendDots:
		//appendArrows:$('.mainslider-arrows .container'),
		nextArrow: '<button type="button" class="slick-next"><i class="bx bx-right-arrow-circle"></i></button>',
		prevArrow: '<button type="button" class="slick-prev"><i class="bx bx-right-arrow-circle"></i></button>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 479.98,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			}
		]
	});
}
/*


// SLIDER ON MOBILE
if($('.reviews-object__items').length>0){
		let slider=$('.reviews-object__items');
	function reviews_object(){
		slider.slick({
			dots: true,
			arrows: false,
			accessibility:false,
			slidesToShow:1,
			autoplaySpeed: 3000,
			//asNavFor:'',
			//appendDots:
			//appendArrows:$('.mainslider-arrows .container'),
			nextArrow:'<button type="button" class="slick-next ic-arrow"></button>',
			prevArrow:'<button type="button" class="slick-prev ic-arrow"></button>',
			responsive: [{
				breakpoint: 9999,
				settings:'unslick'
			},{
				breakpoint: 768,
				settings: {
					
				}
			}]
		});
	}
		reviews_object();
	$(window).resize(function(event) {
			var w=$(this).outerWidth();
		if(w<768 && !slider.hasClass('slick-initialized')){
			reviews_object();
		}
	});
}


//SLICK FIX
function slick_fix(slider){
	//SET OPTIONS
	//$('.progress__slider').slick('slickSetOption',{autoplay:false},true);
		var sltoshow=slider.get(0).slick.options.slidesToShow;
		var all=slider.find('.slick-slide').length;
		var allactive=slider.find('.slick-slide').not('.slick-cloned').length;
	slider.on('beforeChange', function(event,slick,currentSlide,nextSlide){
		if(nextSlide==0){
				var ind=all-allactive;
			if(sltoshow==1){
				slider.find('.slick-slide').eq(ind).addClass('active');
			}else{
				sliderfix(slider,ind);
			}
		}
		if(nextSlide==allactive-1){
			if(sltoshow==1){
				slider.find('.slick-slide').eq(0).addClass('active');
			}else{
				sliderfix(slider,sltoshow-1);
			}
		}
		//DIRECTION
		if (currentSlide === 0 && nextSlide === slick.$slides.length - 1) {
			direction = 'prev';
		}else if(nextSlide > currentSlide || (currentSlide === (slick.$slides.length - 1) && nextSlide === 0 )) {
			direction = 'next';
		}else{
			direction = 'prev';
		}
		//console.log(direction);
	});
	slider.on('afterChange', function(event, slick, currentSlide){
		slider.find('.slick-slide').removeClass('active');
	});
	function sliderfix(slider,v){
		for (var i=0; i < sltoshow; i++) {
				var n=v+i;
			slider.find('.slick-slide').eq(n).addClass('active');
		}
	}
}
*/
/*
if($('.newsmodule-slider').length>0){
	//Опция
	$('.newsmodule-slider').get(0).slick.options.slidesToShow

	$('.newsmodule-items-item').click(function(event) {
		$('.newsmodule-items-item').removeClass('active');
		$(this).addClass('active');
		$('.newsmodule-slider').slick('goTo',$(this).index());
	});
	$('.newsmodule-navigator-info span').eq(1).html($('.newsmodule-items-item').length);
	
	$('.newsmodule-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.newsmodule-navigator-info span').eq(0).html(nextSlide+1);
	});
	$('.newsmodule-slider').on('afterChange', function(event, slick, currentSlide){
		$('.newsmodule-navigator-info span').eq(0).html(currentSlide+1);
	});
	$('.newsmodule-navigator__arrow.fa-angle-left').click(function(event) {
		$('.newsmodule-slider').slick('slickPrev');
	});
	$('.newsmodule-navigator__arrow.fa-angle-right').click(function(event) {
		$('.newsmodule-slider').slick('slickNext');
	});
}
*/
//POPUP
$('.pl').click(function(event) {
	var pl=$(this).attr('href').replace('#','');
	var v=$(this).data('vid');
popupOpen(pl,v);
return false;
});
function popupOpen(pl,v){
$('.popup').removeClass('active').hide();
if(!$('.header-menu').hasClass('active')){
	$('body').data('scroll',$(window).scrollTop());
}
if(!isMobile.any()){
	$('body').css({paddingRight:$(window).outerWidth()-$('.wrapper').outerWidth()}).addClass('lock');
	$('.pdb').css({paddingRight:$(window).outerWidth()-$('.wrapper').outerWidth()});
}else{
	setTimeout(function() {
		$('body').addClass('lock');
	},300);
}
history.pushState('', '', '#'+pl);
if(v!='' && v!=null){
	$('.popup-'+pl+' .popup-video__value').html('<iframe src="https://www.youtube.com/embed/'+v+'?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>');
}
$('.popup-'+pl).fadeIn(300).delay(300).addClass('active');

if($('.popup-'+pl).find('.slick-slider').length>0){
	$('.popup-'+pl).find('.slick-slider').slick('setPosition');
}
}
function openPopupById(popup_id){
$('#'+popup_id).fadeIn(300).delay(300).addClass('active');
}
function popupClose(){
$('.popup').removeClass('active').fadeOut(300);
if(!$('.header-menu').hasClass('active')){
	if(!isMobile.any()){
		setTimeout(function() {
			$('body').css({paddingRight:0});
			$('.pdb').css({paddingRight:0});
		},200);
		setTimeout(function() {
			$('body').removeClass('lock');
			$('body,html').scrollTop(parseInt($('body').data('scroll')));
		},200);
	}else{
		$('body').removeClass('lock');
		$('body,html').scrollTop(parseInt($('body').data('scroll')));
	}
}
$('.popup-video__value').html('');

history.pushState('', '', window.location.href.split('#')[0]);
}
$('.popup-close,.popup__close').click(function(event) {
popupClose();
return false;
});
$('.popup').click(function(e) {
if (!$(e.target).is(".popup>.popup-table>.cell *") || $(e.target).is(".popup-close") || $(e.target).is(".popup__close")) {
	popupClose();
	return false;
}
});
$(document).on('keydown',function(e) {
if(e.which==27){
	popupClose();
}
});

});
