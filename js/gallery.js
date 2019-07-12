$(window).on('load', function () {
	$('.gallery__photos').masonry({
        itemSelector: '.photo',
        transitionDuration: '0.8s',
        gutter: 30
    });
});
var masonryUpdate = function() {
    setTimeout(function() {
        $('.gallery__photos').masonry();
    }, 1000);
}
$(document).on('click', masonryUpdate);
$(document).ajaxComplete(masonryUpdate);
