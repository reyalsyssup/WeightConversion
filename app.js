var gramsNavBtn = document.querySelector("#nav-grams");
var kilosNavBtn = document.querySelector("#nav-kilos");
var poundsNavBtn = document.querySelector("#nav-pounds");
var usTonneNavBtn = document.querySelector("#nav-l-tonnes");
var metricTonneNavBtn = document.querySelector("#nav-s-tonnes");

var gramsDisplay = document.querySelector("#grams");
var kilosDisplay = document.querySelector("#kilos");
var poundsDisplay = document.querySelector("#pounds");
var usTonnesDisplay = document.querySelector("#l-tonne");
var metricTonnesDisplay = document.querySelector("#s-tonne");

var input = document.querySelector("#num-input");

var selected = gramsNavBtn;

var lis = document.querySelectorAll("li");
for(var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
        if(this.id === gramsNavBtn.id) {
            newTab(this);
        } else if(this.id === kilosNavBtn.id) {
            newTab(this);
        } else if(this.id === poundsNavBtn.id) {
            newTab(this);
        } else if(this.id === usTonneNavBtn.id) {
            newTab(this);
        } else if(this.id === metricTonneNavBtn.id) {
            newTab(this);
        }
    });
}

function newTab(obj) {
    selected.classList.remove("selected");
    selected = obj;
    selected.classList.add("selected");
    conversion(input);
}

input.addEventListener("change", function() {
    console.log("input");
    conversion(this);
});

function conversion(obj) {
    if(selected.id === gramsNavBtn.id) {
        gramsDisplay.textContent = obj.value * 1;
        kilosDisplay.textContent = obj.value / 1000;
        poundsDisplay.textContent = (obj.value / 453.59237);
        usTonnesDisplay.textContent = (obj.value / 907184.74);
        metricTonnesDisplay.textContent = (obj.value / 1000000);
    }

    if(selected.id === kilosNavBtn.id) {
        gramsDisplay.textContent = obj.value * 1000;
        kilosDisplay.textContent = obj.value * 1;
        poundsDisplay.textContent = (obj.value * 2.20462);
        usTonnesDisplay.textContent = (obj.value / 907.18474);
        metricTonnesDisplay.textContent = (obj.value / 1000);
    }

    if(selected.id === poundsNavBtn.id) {
        gramsDisplay.textContent = obj.value * 453.592;
        kilosDisplay.textContent = obj.value / 2.205;
        poundsDisplay.textContent = (obj.value * 1);
        usTonnesDisplay.textContent = (obj.value / 2000);
        metricTonnesDisplay.textContent = (obj.value / 2205);
    }

    if(selected.id === usTonneNavBtn.id) {
        gramsDisplay.textContent = obj.value * 1016047;
        kilosDisplay.textContent = obj.value * 907;
        poundsDisplay.textContent = (obj.value * 2000);
        usTonnesDisplay.textContent = (obj.value * 1);
        metricTonnesDisplay.textContent = (obj.value / 1.102);
    }

    if(selected.id === metricTonneNavBtn.id) {
        gramsDisplay.textContent = obj.value * 1000000;
        kilosDisplay.textContent = obj.value * 1000;
        poundsDisplay.textContent = (obj.value * 2204.62);
        usTonnesDisplay.textContent = (obj.value * 1.10230999994555);
        metricTonnesDisplay.textContent = (obj.value * 1);
    }
}