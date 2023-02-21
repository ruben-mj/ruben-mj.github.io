
AOS.init({
    duration: 1200
});

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

$(".progress-bar").each(function () {
    each_bar_width = $(this).attr('aria-valuenow');
    $(this).width(each_bar_width + '%');
});

function getYear() {
    var today = new Date();
    var yyyy = today.getFullYear();
    document.getElementById("copyright").innerHTML = "&copy;" + yyyy + " - Pulsar Project"
};
