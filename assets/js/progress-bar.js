// Progress bar
document.addEventListener("DOMContentLoaded", function () {
    const progressBarInner = document.querySelector('.bar-long');
    window.addEventListener('scroll', function () {
        let h = document.documentElement;
        let st = h.scrollTop || document.body.scrollTop;
        let sh = h.scrollHeight || document.body.scrollHeight;
        let percent = st / (sh - h.clientHeight) * 100;
        progressBarInner.style.width = percent + "%";
    });
});