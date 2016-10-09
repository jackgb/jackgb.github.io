$(document).ready(function () {
var count = $('.mySlidesL').length;
$("#total").text(count);
$('.mySlidesL:gt(0)').hide();

var $slides = $('.mySlidesL');

$slides.click(function () {
    var $current = $(this);
    if ($current.is($slides.last())) {
        $("#current").text("1");
        $current.hide();
        $slides.first().show();
    }
    else {
        $("#current").text($current.next().index()+1);
        $current.hide().next().show();
    }
});
});
