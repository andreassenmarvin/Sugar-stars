$(function () {
    $nav = $('#navbar');
    $toggleCollapse = $('.toggle-collapse');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#navbar").css("top", 0);
        }
    })

    $("#cart-info").click(function () {
        $(".cart").toggle();
    })

    $("#clear-cart").click(function () {
        $(".cart").hide();
    })

    $("#checkout-cart").click(function () {
        alert("Thank you for shopping with us!");
        $(".cart").hide();
    })

    $(".newsletter-form").submit(function (event) {
        event.preventDefault();
        alert("Thank you for subscribing!");
        $(".newsletter-form").trigger("reset");
    })
})