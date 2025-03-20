document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll('[data-role="link"], .back-button');
    links.forEach(function (link) {
        link.addEventListener("click", function (ev) {
            ev.preventDefault();
            let href = this.href; // FIXED
            document.body.style.opacity = 0;
            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });
});
