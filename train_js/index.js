//$(".custom-container").css({"left":"0%"}).animate({"left":"1111%"}, "20000");

$(document).ready(function(){
    

    let totalwidth = $(window).width();
    let leftcounter = -5;
    while(leftcounter < totalwidth){
        let a = document.createElement("div");
        a.style.position = "absolute";
        a.style.bottom = "0px";
        a.style.left = leftcounter + "px";
        a.style.width = "15px";
        a.style.height = "15px";
        a.classList.add("track-blocks");
        a.classList.add("show-together");
        leftcounter += 50;
        $("body").append(a);
    }

 
     
    


});

function hideAndPlay(){

    document.getElementById('audio').play();
    document.querySelector(".startx").remove();
    document.querySelector(".custom-container").classList.remove("show-together");
    document.querySelector(".tracks").classList.remove("show-together");
    //document.querySelectorAll(".track-blocks").classList.remove("show-together");
    $(".track-blocks").each(function(){
        $(this).removeClass("show-together");
    });
}

