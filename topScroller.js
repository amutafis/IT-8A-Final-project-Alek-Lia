let buttonElement = document.getElementById("toTop");

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        buttonElement.style.display = "block";
    }
    else {
        buttonElement.style.display = "none";
    }
};

function toTop() {
    document.documentElement.scrollTop = 0;
}