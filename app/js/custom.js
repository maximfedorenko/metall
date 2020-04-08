// When the user scrolls down from the top of the document, resize the header
window.onscroll = function() {
	scrollFunction();
};

function scrollFunction() {
	
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		//alert('shrink');
		document.getElementsByTagName('header')[0].classList.add('shrink');
		document.body.classList.add("header-shrinked");
	} else {
		//alert('unshrink');
		document.getElementsByTagName('header')[0].classList.remove('shrink');
		document.body.classList.remove("header-shrinked");
	}
}

if (window.jQuery){
	jQuery.noConflict();
	jQuery(document).ready(function($){
		
		$('[type=tel]').mask('+7 (999) 999-99-99');

        WebFont.load({
			google: {
				families: ['Roboto:400,500:cyrillic']
			}
		});

		// navbar dropdown

		$(".navbar-toggler").on("click", function() {
			$(this).attr('aria-expanded', function(index, attr){
				return attr == 'false' ? 'true' : 'false';
			});
			$(".navbar-collapse").toggleClass('show');
			$(this).parent().toggleClass('menu-opened');
		});

		//$(".js-modal-btn").modalVideo({channel:'vimeo'});

		// tabs

		$(".nav-tabs li a").click(function(e){
			e.preventDefault();
			$(".nav-tabs li a").removeClass('active');
			$(this).addClass('active');
			var showIt =  $(this).attr('href');
			$(".tab-pane").hide();
			$('#prev-' + showIt + '-group').show();
			$('#next-' + showIt + '-group').show();
			$(showIt).show();
		});

		$('.responsive-tabs').responsiveTabs({
			accordionOn: ['xs']
		});

		// accordion

		$(".accordion .card-header").click(function() {
			$(this).find('.card-header__icon').toggleClass("minus").parents('.card').toggleClass("active").find('.card-body').slideToggle('fast');
		});

		if(navigator.userAgent.indexOf('Mac') > 0){
			$('body').addClass('mac-os');
			if(navigator.userAgent.indexOf('Safari') > 0)$('body').addClass('safari');
		}

    });
};