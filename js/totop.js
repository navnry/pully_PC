
$(window).scroll(function () {

    if ($(document).scrollTop() > 700) {
        $("#toTop").fadeIn()
    } else{
        $("#toTop").fadeOut()
    }
})

$("#toTop").click(function () {
    $('html , body').animate({scrollTop: 0}, 500);
});
