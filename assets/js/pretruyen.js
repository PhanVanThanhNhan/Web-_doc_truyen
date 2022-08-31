const unfllow = document.querySelector('.follow-btn');
const unliked = document.querySelector('.liked-btn');

let clicked = false;
unfllow.addEventListener('click', () => {
    if (!clicked) {
        clicked = true;
        document.querySelector('.follow-btn').innerHTML = '<i class="ti-heart"></i>BỎ THEO DÕI';
    } else {
        clicked = false;
        document.querySelector('.follow-btn').innerHTML = '<i class="ti-heart"></i>THEO DÕI';
    }
});

unliked.addEventListener('click', () => {
    if (!clicked) {
        clicked = true;
        document.querySelector('.liked-btn').innerHTML = '<i class="ti-thumb-up"></i>BỎ THÍCH';
    } else {
        clicked = false;
        document.querySelector('.liked-btn').innerHTML = '<i class="ti-thumb-up"></i>THÍCH';
    }
});


// Đọc thêm

const parentContainer =  document.querySelector('.description');

parentContainer.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-more-btn');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('Đọc Thêm') ? "Rút Gọn..." : "Đọc Thêm...";

});