document.addEventListener("DOMContentLoaded", function () {
    window.onscroll = function () {
        stickHeader();
    };

    var header = document.querySelector(".sticky-header");
    var sticky = header.offsetTop;

    function stickHeader() {
        if (window.pageYOffset > sticky) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    }
});
