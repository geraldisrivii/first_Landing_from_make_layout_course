// Get elements
let button_gamburger = document.querySelector(".nav-bar__gamburger");
let checkbox = document.querySelector(".nav-bar__checkbox");
let nav_menu = document.querySelector(".nav-menu");
let nav_list = document.querySelector(".nav-list");
let nav_menu_list = nav_menu.firstChild
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


// Get weel-2 
let weel_2 = document.querySelector(".weel-2");
let div = document.createElement("div");
for (let index = 0; index < 16; index++) {
    weel_2.append(div.cloneNode())
}