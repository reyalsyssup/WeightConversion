var slot1 = document.querySelector("#nav-grams");
var slot2 = document.querySelector("#nav-litres");
var slot3 = document.querySelector("#nav-decilitres");
var slot4 = document.querySelector("#nav-pounds");
var slot5 = document.querySelector("#nav-tbs");
var slot6 = document.querySelector("#nav-tsp");

var slot1Display = document.querySelector(".slot1 p");
var slot2Display = document.querySelector(".slot2 p");
var slot3Display = document.querySelector(".slot3 p");
var slot4Display = document.querySelector(".slot4 p");
var slot5Display = document.querySelector(".slot5 p");
var slot6Display = document.querySelector(".slot6 p");

var input = document.querySelector("#num-input");

var selected = slot1;

var lis = document.querySelectorAll("li");
for(var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
        selected.classList.remove("selected");
        selected = this;
        selected.classList.add("selected");
        conversion(input);
    });
}

input.addEventListener("change", function() {
    conversion(this);
});

function conversion(obj) {
    if(selected.id === slot1.id) {
        gramsDisplay.textContent = obj.value * 1;
        kilosDisplay.textContent = obj.value / 1000;
        poundsDisplay.textContent = (obj.value / 453.59237);
        usTonnesDisplay.textContent = (obj.value / 907184.74);
        metricTonnesDisplay.textContent = (obj.value / 1000000);
    }
}