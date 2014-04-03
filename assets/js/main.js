function triggerAnimation() {
	$('.animation').removeClass().addClass('animation');
	$('.active .animation').each(function() {
		$this = $(this);
		$this.addClass($this.attr('data-animation'));
	});
}


$(function() {
	$('.main').onepage_scroll({
		afterMove: triggerAnimation
	});
	
	triggerAnimation();
});