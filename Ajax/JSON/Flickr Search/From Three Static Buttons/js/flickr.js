"use strict";

/*
* flickr js
*
* Copyright (c) 2016 Gavin Schilling Marketing
* Licensed under the GNU Affero General Public License
* 
*/

$(document).ready(function() {
  $("button").click(function() {
    $("button").removeClass("selected");
    $(this).addClass("selected");
    var flickrAPI =
      "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var animal = $(this).text();
    var flickrOptions = {
      tags: animal,
      format: "json"
    }; // end flickrOptions
    function displayPhotos(data) {
      var photoHTML = "<ul>";
      $.each(data.items, function(i, photo) {
        photoHTML += "<li class='grid-25 tablet-grid-50'>";
        photoHTML += "<a href='" + photo.link + "' class='image'>";
        photoHTML += "<img src='" + photo.media.m + "'></a></li>";
      }); // end each function
      photoHTML += "</ul>";
      $("#photos").html(photoHTML);
    } // end displayPhotos
    $.getJSON(flickrAPI, flickrOptions, displayPhotos);
  }); //end click
}); //end ready
