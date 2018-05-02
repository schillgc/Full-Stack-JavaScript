/*
* flickr js
*
* Copyright (c) 2016 Gavin Schilling Marketing
* Licensed under the GNU Affero General Public License
* 
*/

$(document).ready(() => {
  $("button").click(function() {
    $("button").removeClass("selected");
    $(this).addClass("selected");
    const flickrAPI =
      "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    const animal = $(this).text();
    const flickrOptions = {
      tags: animal,
      format: "json"
    }; // end flickrOptions
    function displayPhotos(data) {
      let photoHTML = "<ul>";
      $.each(data.items, (i, photo) => {
        photoHTML += "<li class='grid-25 tablet-grid-50'>";
        photoHTML += `<a href='${photo.link}' class='image'>`;
        photoHTML += `<img src='${photo.media.m}'></a></li>`;
      }); // end each function
      photoHTML += "</ul>";
      $("#photos").html(photoHTML);
    } // end displayPhotos
    $.getJSON(flickrAPI, flickrOptions, displayPhotos);
  }); //end click
}); //end ready
