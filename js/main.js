$(document).ready(function () {
    console.log("Jquery ready")
});

var $cards = $(".project-card");
$cards.attr("data-aos","zoom-in");

var $title = $(".title").attr("data-aos","fade-down")