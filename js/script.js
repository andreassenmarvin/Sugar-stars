$(function () {
    $("#cart-info").click(function () {
        $(".cart").toggle();
    })

    $("#clear-cart").click(function() {
        $(".cart").hide();
    })

    $("#checkout-cart").click(function() {
        alert("Thank you for shopping with us!");
        $(".cart").hide();
    })
})