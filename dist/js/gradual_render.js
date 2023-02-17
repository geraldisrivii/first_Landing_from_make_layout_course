let third_section_header = document.querySelector(".third-section__header")
let guitar_box = document.querySelector(".guitar-box")
let profile_box = document.querySelector(".profile-box")
let fourth_section = document.querySelector(".fourth-section")
let fifth_section__image = document.querySelector(".fifth-section__image")
let conteiner = document.querySelector(".conteiner")
window.addEventListener('scroll', function () {
    let amount = window.scrollY + window.innerHeight; // for static
    let amount_2 = fifth_section__image.offsetTop + fifth_section__image.parentElement.offsetTop; // for image position
    let amount_3 = fifth_section__image.offsetTop + fifth_section__image.parentElement.offsetTop; // for image position
    console.log(amount_2)
    if (amount > third_section_header.offsetTop) {
        third_section_header.classList.add("rendered")
    }
    if(amount > guitar_box.offsetTop){
        guitar_box.classList.add("rendered")
    }
    if(amount > profile_box.offsetTop){
        profile_box.classList.add("rendered")
    }
    if(amount > fourth_section.offsetTop){
        fourth_section.classList.add("rendered")
    }
    console.log(fifth_section__image.offsetTop)
    if(amount > amount_2){
        fifth_section__image.classList.add("rendered")
    }
    console.log(conteiner.offsetTop)
    if(amount > amount_3){
        conteiner.classList.add("rendered")
    }
}
);