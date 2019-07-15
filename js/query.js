var $window = $(window);
var iphone = $('#iphone');
var col1 = $('#col1');
var container2 = $("#container2");
var col2 = $('#col2');
var col3 = $('#col3');
var col4 = $('#col4');
var city1 = $('#city1');
var city2 = $('#city2');
var city3 = $('#city3');
var city4 = $('#city4');
var sign1 = $("#sign1");
var sign2 = $('#sign2');
var sign3 = $('#sign3');
var rev1 = $("#rev1");
var rev2 = $("#rev2");
var rev3 = $("#rev3");

function isScrolledIntoView(elem, $window) {
    var docViewTop = $window.scrollTop();
    // console.log(docViewTop);
    var docViewBottom = docViewTop + $window.height();

    var elemTop = elem.offset().top;
    var elemBottom = elemTop + elem.height();

    return ((elemTop >= docViewTop) && (elemBottom <= docViewBottom));
}
$(document).on("scroll", function () {
    var propertyObject = {
        'fontsize': '500px', 'left': '200px'
    }
    if ($window.scrollTop() >= container2.offset().top) {
        var ul = $("#top");
        var logo = $(".logo");


        // ul.css({
        //     "background-color": "black",
        //     "width": "100%",
        //     "position": "fixed",
        //     "z-index": "1000000"
        // });
        var link = $('#link');
        // link.css({
        //     "color": "white"
        // })

        // document.getElementById("link").css({
        //     "color": "black",
        // })
        ul.addClass("b");
        link.addClass("a");
        logo.addClass("c");


        // ul.setAttribute("style", "background-color:white", "width:100%");
        // link.setAttribute("style", "color:black");
    }
    else {
        var ul = $("#top");
        ul.removeClass("b");
        var link = $('#link');
        link.removeClass("a");
        var logo = $(".logo");
        logo.removeClass("c")

    }

    if (isScrolledIntoView(iphone, $window)) {
        iphone.addClass("animated fadeInUp")
    }
    if (isScrolledIntoView(col1, $window)) {
        col1.addClass("animated fadeIn")
    }
    if (isScrolledIntoView(col2, $window)) {
        col2.addClass("animated fadeIn")
    }
    if (isScrolledIntoView(col3, $window)) {
        col3.addClass("animated fadeIn")
    }
    if (isScrolledIntoView(col4, $window)) {
        col4.addClass("animated fadeIn")
    }
    if (isScrolledIntoView(city1, $window)) {
        city1.addClass("animated fadeIn")
    }
    if (isScrolledIntoView(city2, $window)) {
        city2.addClass("animated fadeIn")
    }
    if (isScrolledIntoView(city3, $window)) {
        city3.addClass("animated fadeIn")
    }
    if (isScrolledIntoView(city4, $window)) {
        city4.addClass("animated fadeIn")
    }
    if (isScrolledIntoView(sign1, $window)) {
        sign1.addClass("animated pulse")
    }
    if (isScrolledIntoView(sign2, $window)) {
        sign2.addClass("animated pulse")
        sign3.addClass("animated pulse")
    }

    if (isScrolledIntoView(rev1, $window)) {
        rev1.addClass("animated fadeInUp")
    }
    if (isScrolledIntoView(rev2, $window)) {
        rev2.addClass("animated fadeInDown")
    }
    if (isScrolledIntoView(rev3, $window)) {
        rev3.addClass("animated fadeInUp")
    }

});