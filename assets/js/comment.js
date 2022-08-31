
//Comments


const showContainers = document.querySelectorAll(".show-replies");

showContainers.forEach((btn) =>
    btn.addEventListener("click", (e) => {
        let parentContainer = e.target.closest(".comment-container");
        let _id = parentContainer.id;
        if (_id) {
            let childrenContainer = parentContainer.querySelectorAll(
                `[dataset=${_id}]`
            );
            childrenContainer.forEach((child) => child.classList.toggle("opened"));
        }
    })
);

const replies = document.querySelectorAll(".js-comment");
const modalComment = document.querySelector('.js-modal-comment');
const modalCommentContainer = document.querySelector('.js-modal-comment-container');
const modalCommentClose = document.querySelector('.js-modal-comment-close');


// hàm hiển thị ô để comment
function commentContainer() {
    modalComment.classList.add('open');
}


// hàm ẩn ô để comment
function hideCommentContainer() {
    modalComment.classList.remove('open');
}

for (const reply of replies) {
    reply.addEventListener('click', commentContainer);
}

modalCommentClose.addEventListener('click', hideCommentContainer);

modalComment.addEventListener('click', hideCommentContainer);

modalCommentContainer.addEventListener('click', function (event) {
    event.stopPropagation();
});






