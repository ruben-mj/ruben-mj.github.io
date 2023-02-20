// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

AOS.init({
    duration: 1200
});

// AOS.init({
//     duration: 500,
//     easing: 'ease-out-quart',
//     once: true
// });

$(".skills").addClass("active")
$(".skills .skill .skill-bar span").each(function () {
    $(this).animate({
        "width": $(this).parent().attr("data-bar") + "%"
    }, 1000);
    $(this).append('<b>' + $(this).parent().attr("data-bar") + '%</b>');
});
setTimeout(function () {
    $(".skills .skill .skill-bar span b").animate({ "opacity": "1" }, 1000);
}, 2000);

$(function () {
    $('[data-toggle="tooltip"]').tooltip({ trigger: 'manual' }).tooltip('show');
});



// $( window ).scroll(function() {   
// if($( window ).scrollTop() > 10){  // scroll down abit and get the action   
$(".progress-bar").each(function () {
    each_bar_width = $(this).attr('aria-valuenow');
    $(this).width(each_bar_width + '%');
});
