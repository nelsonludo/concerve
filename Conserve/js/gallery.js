
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 0) {
            $(".sections").css({"opacity" : "1"})
        }
        else {
            $("#about").css({"opacity" : "0"})
        }
        if($(this).scrollTop() > 0) {
            $("#about").css({"opacity" : "1"})
        }
        else {
            $("#about").css({"opacity" : "0"})
        }
        if($(this).scrollTop() > 350) {
            $("#projects").css({"opacity" : "1"})
        }
        else {
            $("#projects").css({"opacity" : "0"})
        }
        if($(this).scrollTop() > 800) {
            $("#news").css({"opacity" : "1"})
        }
        else {
            $("#news").css({"opacity" : "0"})
        }
        if($(this).scrollTop() > 1100) {
            $("#resources").css({"opacity" : "1"})
        }
        else {
            $("#resources").css({"opacity" : "0"})
        }
    })
})
