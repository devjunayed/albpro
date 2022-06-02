var rooot = document.querySelector(':root');
var gear = document.getElementById('gear');
var pallete = document.getElementById('pallete');
var cross = document.getElementById('cross');

var redDot = document.querySelector('.r');
var rDotActive = document.querySelector('.rdot-active');
var redOuterDot = document.querySelector('.red-dot');

var greenDot = document.querySelector('.g');
var gDotActive = document.querySelector('.gdot-active');
var greenOuterDot = document.querySelector('.green-dot');

var yellowDot = document.querySelector('.y');
var yDotActive = document.querySelector('.ydot-active');
var yellowOuterDot = document.querySelector('.yellow-dot');

var blackDot = document.querySelector('.b');
var bDotActive = document.querySelector('.bdot-active');
var blackOuterDot = document.querySelector('.black-dot');

var skyblueDot = document.querySelector('.sb');
var sbDotActive = document.querySelector('.sbdot-active');
var skyblueOuterDot = document.querySelector('.skyblue-dot');


gear.addEventListener("click", ()=>{
    pallete.style.display = "flex";
});
cross.addEventListener("click", ()=>{
    pallete.style.display = "none";
})

redDot.addEventListener("click", ()=>{
    redOuterDot.classList.add('rdot-active');
    greenOuterDot.classList.remove('gdot-active');
    yellowOuterDot.classList.remove('ydot-active');
    blackOuterDot.classList.remove('bdot-active');
    skyblueOuterDot.classList.remove('sbdot-active');

    themeChange('red');
})
greenDot.addEventListener("click", ()=>{
    redOuterDot.classList.remove('rdot-active');
    greenOuterDot.classList.add('gdot-active');
    yellowOuterDot.classList.remove('ydot-active');
    blackOuterDot.classList.remove('bdot-active');
    skyblueOuterDot.classList.remove('sbdot-active');

    themeChange('green');
})
yellowDot.addEventListener("click", ()=>{
    redOuterDot.classList.remove('rdot-active');
    greenOuterDot.classList.remove('gdot-active');
    yellowOuterDot.classList.add('ydot-active');
    blackOuterDot.classList.remove('bdot-active');
    skyblueOuterDot.classList.remove('sbdot-active');

    themeChange('#FFBF00');
})
blackDot.addEventListener("click", ()=>{
    redOuterDot.classList.remove('rdot-active');
    greenOuterDot.classList.remove('gdot-active');
    yellowOuterDot.classList.remove('ydot-active');
    blackOuterDot.classList.add('bdot-active');
    skyblueOuterDot.classList.remove('sbdot-active');

    themeChange('black');
})
skyblueDot.addEventListener("click", ()=>{
    redOuterDot.classList.remove('rdot-active');
    greenOuterDot.classList.remove('gdot-active');
    yellowOuterDot.classList.remove('ydot-active');
    blackOuterDot.classList.remove('bdot-active');
    skyblueOuterDot.classList.add('sbdot-active');

    themeChange('#879ceb');
})


function themeChange(clr){
    myFunction_get();
    myFunction_set(clr);
}


function myFunction_get(){
    var getStyle = getComputedStyle(rooot);
}

function myFunction_set(clr){
    rooot.style.setProperty('--primary-color', `${clr}`);
}


// // Get the root element
// var r = document.querySelector(':root');

// // Create a function for getting a variable value
// function myFunction_get() {
//   // Get the styles (properties and values) for the root
//   var rs = getComputedStyle(r);
//   // Alert the value of the --blue variable
//   alert("The value of --blue is: " + rs.getPropertyValue('--blue'));
// }

// // Create a function for setting a variable value
// function myFunction_set() {
//   // Set the value of variable --blue to another value (in this case "lightblue")
//   r.style.setProperty('--blue', 'lightblue');
// }
