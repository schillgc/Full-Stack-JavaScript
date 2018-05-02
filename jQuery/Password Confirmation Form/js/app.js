/*
* app js
*
* Copyright (c) 2016 Gavin Schilling Marketing
* Licensed under the GNU Affero General Public License
* 
*/

//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately
let color = $(".selected").css("background-color");
const $canvas = $("canvas");
const context = $canvas[0].getContext("2d");
let lastEvent;
let mouseDown = false;

//When clicking on control list items
$(".controls").on("click", "li", function() {
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
  //Select clicked element
  $(this).addClass("selected"); 
  //Cashe current color
  color = $(this).css("background-color");
});

//When "New Color" is pressed
$("#revealColorSelect").click(() => {
  //Show color select or hide the color selected
  changeColor();
  $("#colorSelect").toggle();
});

//Update the new color span
function changeColor() {
  const r = $("#red").val();
  const g = $("#green").val();
  const b = $("#blue").val();
  $("#newColor").css("background-color", `rgb(${r}, ${g}, ${b})`);
}

//When color sliders change
$("input[type=range]").change(changeColor);
  
//When "Add Color" is pressed
$("#addNewColor").click(() => {
  //Append the color to the controls ul;
  const $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  //Select new color
  $newColor.click();
});

//On mouse events on the canvas
$canvas.mousedown(e => {
  lastEvent = e;
  mouseDown = true;
}).mousemove(e => {
  //Draw lines
  if(mouseDown) {
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
  }
}).mouseup(() => {
  mouseDown = false;
}).mouseleave(() => {
  $canvas.mouseup();
});
