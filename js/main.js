$(function (){
	
	
	//Sliders
		$('.header__slider').slick({
			dots: true,
			slidesToShow: 1,
		    slidesToScroll: 1,
		    autoplay: true,
		    autoplaySpeed: 2300,
		});

		$('.fpart').slick({
			dots: true,
			slidesToShow: 1,
		    slidesToScroll: 1,
		    autoplay: true,
		    autoplaySpeed: 2500,
		});

		$('.secpart').slick({
			dots: true,
			slidesToShow: 1,
		    slidesToScroll: 1,
		    autoplay: true,
		    autoplaySpeed: 2500,
		});

	//Hamburger
	$('.header__menu').click(function(){
		$('.header__drop-down').css('display', 'block');
	});

	$('.menu__close').click(function(){
		$('.header__drop-down').css('display', 'none');
	});
});