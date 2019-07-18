var $window = $(window);
var iphone = $('#iphone');
var nav = $('#top');
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
// $window.resize(function () {
//     if ($window.width() <= 751) {
//         nav.addClass("navbar navbar-expand-md bg-dark navbar-dark");
//         document.getElementById("top").innerHTML = `     
//      <img class="logo logo2" src="./images/logo.png">
//     <button class="navbar-toggler btn btn-primary" type="button" data-target="#ul" data-toggle="collapse">
//         <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class=" collapse navbar-collapse" id="ul">
//         <ul class="navbar-nav">

//             <li class=" nav-item">
//                 <a class="nav-link" href="#container2" id="link">
//                     FOOD DELIVERY
//                 </a>
//             </li>
//             <li class=" nav-item">
//                 <a class="nav-link" href="#container3" id="link">
//                     HOW IT WORKS
//                 </a>
//             </li>
//             <li class=" nav-item">
//                 <a class="nav-link" href="#container4" id="link">
//                     OUR CITIES
//                 </a>
//             </li>
//             <li class=" nav-item">
//                 <a class="nav-link" href="#container6" id="link">
//                     SIGN UP
//                 </a>
//             </li>
//         </ul>
//     </div>
// `;


//     } else {
//         nav.removeClass("navbar navbar-expand-md bg-dark navbar-dark");
//         document.getElementById("top").innerHTML = `    
//             <img class="logo" src="./images/logo.png">
//             <ul>

//                 <li>
//                     <a href="#container2" id="link">
//                         FOOD DELIVERY
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#container3" id="link">
//                         HOW IT WORKS
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#container4" id="link">
//                         OUR CITIES
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#container6" id="link">
//                         SIGN UP
//                     </a>
//                 </li>
//             </ul>
//         `;


//     }
// });
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
$(document).on("scroll", function () {
    var propertyObject = {
        'fontsize': '500px', 'left': '200px'
    }
    if ($window.scrollTop() >= container2.offset().top) {
        var ul = $("#top");
        var logo = $(".logo");

        var collapse = $(".normal");

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
        collapse.addClass("collapse");

        // ul.setAttribute("style", "background-color:white", "width:100%");
        // link.setAttribute("style", "color:black");
    }
    else {
        var ul = $("#top");
        ul.removeClass("b");
        var link = $('#link');
        link.removeClass("a");
        var logo = $(".logo");
        logo.removeClass("c");

        var collapse = $(".normal");
        collapse.removeClass("collapse");

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