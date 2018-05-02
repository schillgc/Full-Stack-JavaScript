/*
* app js
*
* Copyright (c) 2016 Gavin Schilling Marketing
* Licensed under the GNU Affero General Public License
* 
*/

//Problem: User when clicking on images goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

const $overlay = $('<div id="overlay"></div>');
const $image = $("<img>");
const $caption = $("<p></p>");

//1. Add an image to overlay
$overlay.append($image);

//2. Add the overlay
$("body").append($overlay);
  
  //2.2 Add a caption to overlay
  $overlay.append($caption);



//3. Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  const imageLocation = $(this).attr("href");
  //3.1 Update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  //3.2 Show the overlay
  $overlay.show();
  //3.3 Get child's alt attribute and set caption
  const captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

//4. When overlay is clicked
$overlay.click(() => {
  //4.1 Hide the overlay
  $overlay.hide();
});
