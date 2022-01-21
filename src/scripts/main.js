const btntoogle = document.querySelector(".header .toggle");
console.log(btntoogle);
const menu = document.querySelector(".header .nav");
const menuAll = document.querySelector(".header ul li a");



btntoogle && btntoogle.addEventListener("click", showNav);

function showNav() {
    menu && menu.classList.add("show");
}


document.addEventListener('click', function(event) {

    if (!event.target.matches(".header .nav") && !btntoogle.contains(event.target)) {
        closeNav();
    }
});

function closeNav() {
    menu && menu.classList.remove("show");
}
// var links = document.querySelectorAll(".navbar ul a");

// links.forEach(function(value) {
//   value.addEventListener("click", clickHandler);
// });

// function clickHandler(e) {
//   e.preventDefault();
//   var href = this.getAttribute("href");
//   window.scrollTo({
//     top: document.querySelector(href).offsetTop - 130,
//      behavior: 'smooth'
//   });


// document.querySelector(href).scrollIntoView({ 
//   behavior: 'smooth', block: 'start', inline: 'start'
// });
//----------
// var y = document.querySelector(href).getBoundingClientRect().top + window.pageYOffset -130;

// window.scrollTo({top: y, behavior: 'smooth'});

//-------------
// document.querySelector(href).scrollIntoView({
//   behavior: 'smooth',
//   block: 'start'});
// window.scrollBy(0, -130);


//---------

///

// scrollTo(document.querySelector(href), 300);
// }