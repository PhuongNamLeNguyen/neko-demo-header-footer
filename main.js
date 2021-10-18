const $  = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function toggleIconBars() {
    $('.fas.fa-bars').classList.toggle('menu-bar-active');
    $('.fas.fa-times').classList.toggle('times-bar-active');
    $('.side-navbar').classList.toggle('side-navbar-active');
    $('.navbar-blur').classList.toggle('navbar-blur-active');
};

const bookTableOfContentItem = $$('.book-tableOfContent-item');
const fasRightIcon = $$('.fas.fa-chevron-right.fas-down');
const bookTableOfContentDetails = $$('.book-tableOfContent-details');

bookTableOfContentItem.forEach((bookTableOfContentEach, index) => {
    const fasDownIcon = fasRightIcon[index];
    const bookTableOfContentDetail = bookTableOfContentDetails[index];

    bookTableOfContentEach.onclick = function() {
        this.classList.toggle('book-tableOfContent-item-active');
        fasDownIcon.classList.toggle('fas-down-active');
        bookTableOfContentDetail.classList.toggle('book-tableOfContent-details-active');
    }
})