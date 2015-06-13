window.onload = function () {
    var headerHeight = document.getElementsByTagName("header")[0].offsetHeight;

    document.addEventListener("scroll", function(){

        if(window.scrollY > headerHeight)
        {
            document.querySelector(".nav-front-page ul").style.display = "none";
        }
        else
        {
            document.querySelector(".nav-front-page ul").style.display = "block";
        }
    })
}
