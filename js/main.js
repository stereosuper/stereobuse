/////////////////
// DO NOT EDIT //
/////////////////

//
// requestAnimFrame
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            function(callback){
                  window.setTimeout(callback, 1000/60);
            };
 })();

//
// to fix an element on scroll
// note : element should be in absolute position, with a margin-top equal to the desired offset while fixed.
// scrollBegin will set the initial position regardless of 'top' css property. Same with scrollEnd
function fixBloc(id_string, scrollBegin, scrollEnd) {
    var myScroll = $(document).scrollTop();

    if (myScroll >= scrollBegin && myScroll < scrollEnd) {
        $(id_string).css({'position': 'fixed', 'top': 0}).addClass('scrollFixed');
    } else {
        $(id_string).css({'position': 'absolute'}).removeClass('scrollFixed');
        
        if (myScroll < scrollBegin) {
            $(id_string).css("top", scrollBegin+"px");
        } else if (myScroll >= scrollEnd) {
            $(id_string).css("top", scrollEnd+"px");
        }
    }
 }

//
// to add parralax effect between two scroll position and two element positions
function parralaxBaby(id_string, scrollBegin, scrollEnd, topBegin, topEnd) {
    var myScroll = $(document).scrollTop(), calc;

    if (myScroll >= scrollBegin && myScroll < scrollEnd) {
        calc = Math.ceil((topEnd-topBegin)*(myScroll-scrollBegin) / (scrollEnd-scrollBegin)+topBegin);
        $(id_string).css("top", calc+"px");
    } else {
        myScroll < scrollBegin ? $(id_string).css("transform", "translate(0,"+topBegin+"px)") : $(id_string).css("transform", "translate(0,"+topEnd+"px)");
    }
 }

//
// to trigger an element change. Change should be added in css, in the class .className of selected element.
// add css transition for more awesomesss
function goBananas(id_string, scrollBegin, bothways, className) {
     var myScroll = $(document).scrollTop();

    if (myScroll > scrollBegin) {
        if (!$(id_string).hasClass(className)) {
            $(id_string).addClass(className);
        }
    } else {
        if (bothways && $(id_string).hasClass(className)) {
            $(id_string).removeClass(className);
        }
    }
}

//
/////////////////////
// END DO NOT EDIT //
/////////////////////
//
//
 
//
function scrollBehaviors(){
    myScroll = $(document).scrollTop();
    ///////////////
    // EDIT HERE //
    ///////////////
    /* add your desired scroll behaviors here */
    /* ex. fixBloc(".leftBloc",200,1000); */
    /* ex. parralaxBaby(".rightBloc",200,1000,100,150); */
    /* ex. goBananas("header",100,true,"on"); */
    
    requestAnimFrame(function(){
        scrollBehaviors();
    });
}

//
// ready
$(document).ready(function() {
    ///////////////
    // EDIT HERE //
    ///////////////

    /* add your desired reday behaviors here */
    scrollBehaviors();
    
    // show link areas on mouseDown
    $('body').mousedown(function(event) {
        $('body').addClass('showLinks');
    }).mouseup(function(event) {
        $('body').removeClass('showLinks');
    });
});
//
//
//
 