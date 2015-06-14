window.onload = function () {
    var headerHeight = document.getElementsByTagName("header")[0].offsetHeight;
    var content = document.getElementsByClassName("site-content");
    var link = document.querySelectorAll(".link span");

    document.addEventListener("scroll", function(){

        if(window.scrollY > headerHeight)
        {
            document.querySelector(".nav-front-page ul").style.display = "none";
        }
        else
        {
            document.querySelector(".nav-front-page ul").style.display = "block";
        }

        for(i=0 ; i < link.length ; i++)
        {
            link[i].style.transform = "";
        }

        for(i=0 ; i < content.length && window.scrollY >= content[i].offsetTop ; i++)
        {
            link[i].style.transform = "rotateX(90deg)";
            for(j=0; j < link.length && j!=i; j++)
            {
                link[j].style.transform = "";
            }
        }

    });

}
