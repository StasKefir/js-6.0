$(document).ready(function(){
    $('.main_btn, .main_btna, a[href="#sheldure"]').click(function(){
        $('.modal').css({ display: "block",
                        position: "absolute",
                        top: "-1000px" });
        $('.modal').animate({top: "+1px" },1000);
        $('.overlay').fadeTo("slow", 1);
    });

    $(".close").click(function(){
        $('.modal').animate({top: "-1000px" },1000);
        $('.overlay').fadeOut("slow", 0);
        $('.modal').css({ display: "none"});
    });
});