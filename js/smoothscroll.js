// Taken from https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
var $root = $('html, body');

$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);

    return false;
});