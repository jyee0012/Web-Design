(function ($) {
    var $w = $(window),
        minHeight = 400; // or whatever is required

    // initialize header height
    $('.page-header').css('height', Math.max($w.height(), minHeight) + 'px');

    // initiate page events
    $(document).ready(function () {
        // watch for scroll to adjust header height
        $(window).on('resize', function (e) {
            $('.page-header').css('height', Math.max($w.height(), minHeight) + 'px');
        });
    });
}(jQuery));
