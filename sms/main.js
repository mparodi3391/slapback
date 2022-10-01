window.onload = () => {
    var myNav = document.getElementById("nav");
    var cabecera = document.getElementById("cabecera");
    var cambioDeColor = cabecera.offsetHeight-myNav.offsetHeight-5

    document.documentElement.style.setProperty('--scroll-padding',myNav.offsetHeight-1 +'px')

    window.onscroll = function () {
        "use strict";
        if (document.body.scrollTop >= cambioDeColor || document.documentElement.scrollTop >= cambioDeColor) {
            myNav.classList.add("scroll");
            myNav.classList.remove("navbar");
            myNav.style.top = "0"
            document.getElementById('nav-aparecer').style.display = 'block';
        } else {
            myNav.classList.remove("scroll");
            myNav.classList.add("navbar");
            if (document.body.scrollTop >= myNav.offsetHeight || document.documentElement.scrollTop >= myNav.offsetHeight){
                myNav.style.top = "-60px"
            }
            else{
                myNav.style.top = "0"
                document.getElementById('nav-aparecer').style.display = 'none';
            }
            
        }
    };
}



