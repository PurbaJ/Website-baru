const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    

};
// klik di luar elemen
const menu = document.querySelector('#hamburger-menu');
const search = document.querySelector('#search-button');
const cart = document.querySelector('#shopping-cart-button')



document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');

    }
    if(!search.contains(e.target) && !searchForm.contains(e.target)){
       searchForm.classList.remove('active');
    }
    if(!cart.contains(e.target) && !shoppingCart.contains(e.target)){
        shoppingCart.classList.remove('active');
     }

});

const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();

};
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();

}
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButton  = document.querySelectorAll('.item-detail-button');


