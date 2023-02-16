// Get elements
let button_gamburger = document.querySelector(".nav-bar__gamburger");
let checkbox = document.querySelector(".nav-bar__checkbox");
let nav_menu = document.querySelector(".nav-menu");
let nav_list = document.querySelector(".nav-list");
let figures = document.querySelector(".figures");
let cofficent = 0
if(window.innerWidth <= 850) {
    cofficent = 0.7;
}
if(window.innerWidth <= 450) {
    cofficent = 0.5;
}
if(window.innerWidth > 850){
    cofficent = 1
}
for (const element of figures.children) {
    element.style.width = element.clientWidth * cofficent + "px";
    element.style.height = element.clientHeight * cofficent + "px";
}
let nav_menu_list = nav_menu.firstChild
// Create elements 
let list_element = nav_list.firstElementChild.cloneNode(true)
console.log(list_element)
// Actions
for (const element of nav_list.children) {
    let list_element = element.cloneNode(true)
    nav_menu_list.appendChild(list_element)
}
button_gamburger.addEventListener("click", () => {
    if (checkbox.checked == true) {
        nav_menu.style.width = "100%";
        nav_menu.style.opacity = "1";
    }
    else {
        nav_menu.style.opacity = "0";
        nav_menu.style.width = "0%";
    }
})
