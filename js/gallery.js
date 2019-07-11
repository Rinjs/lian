$(window).on('load', function () {
	$('.gallery__photos').masonry({
        itemSelector: '.photo',
        gutter: 30,
        transitionDuration: '0.2s'
    });
});