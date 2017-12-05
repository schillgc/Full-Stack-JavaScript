/*
* app js
*
* Copyright (c) 2016 Gavin Schilling Marketing
* Licensed under the GNU Affero General Public License
* 
*/

//Prevent spoilerphobes from seeing spoilers
//Solution: Hide spoilers and reveal them through user interaction

//1. Hide spoiler
$(".spoiler span").slideToggle("fast");
//2. Add a button
$(".spoiler").append("<button>Reveal Spoiler!</button>");
//3. When button pressed
$("button").click(function(){
  //3.1 Show spoiler
	$(this).prev().show(); 
	//3.2 Get rid of button
	$(this).remove();
});