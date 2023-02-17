let figures = document.querySelector(".figures");
let cofficent = 0
console.log(document.body.clientWidth)
if (document.body.clientWidth <= 850 && document.body.clientWidth > 450) {
    cofficent = 0.8;
}
else if (document.body.clientWidth <= 450) {
    cofficent = 0.4;
}
else {
    cofficent = 1;
}
for (const element of figures.children) {
    element.style.width = element.clientWidth * cofficent + "px";
    element.style.height = element.clientHeight * cofficent + "px";
}