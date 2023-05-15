/* is_exist() */

jQuery.fn.is_exist = function () {
    return this.length;
};

$(function () {

    // $(".fugu-preloader").fadeOut(500);


    $(window).scroll(function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 200) $('.fugu-go-top').fadeIn('slow');
        if (scrolled < 200) $('.fugu-go-top').fadeOut('slow');
    }); //Click event

    $('.fugu-go-top').click(function () {
        $("html, body").animate({
            scrollTop: "0"
        }, 500);
    });


    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('#sticky-menu').addClass('sticky-menu');
        } else {
            $('#sticky-menu').removeClass('sticky-menu');
        }
    });




    $("#l5-pricing-btn .toggle-btn").on("click", function (e) {
        console.log($(e.target).parent().parent().hasClass("monthly-active"));
        $(e.target).toggleClass("clicked");

        if ($(e.target).parent().parent().hasClass("monthly-active")) {
            $(e.target).parent().parent().removeClass("monthly-active").addClass("yearly-active");
        } else {
            $(e.target).parent().parent().removeClass("yearly-active").addClass("monthly-active");
        }
    });
    $("[data-pricing-trigger]").on("click", function (e) {
        $(e.target).addClass("active").siblings().removeClass("active");
        var target = $(e.target).attr("data-target");
        console.log($(target).attr("data-value-active") == "monthly");

        if ($(target).attr("data-value-active") == "monthly") {
            $(target).attr("data-value-active", "yearly");
        } else {
            $(target).attr("data-value-active", "monthly");
        }
    });




    var wow = new WOW({
        mobile: false,
        // default
        tablet: false
    });
    wow.init();
})(jQuery);