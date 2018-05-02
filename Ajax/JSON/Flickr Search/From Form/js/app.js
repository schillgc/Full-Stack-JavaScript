"use strict";

/*
* app js
*
* Copyright (c) 2016 Gavin Schilling Marketing
* Licensed under the GNU Affero General Public License
* 
*/

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var $submitButton = $("#submit");
    var $searchField = $("#search");

    $searchField.prop("disabled", true);
    $submitButton.attr("disabled", true).val("Searching ...");
    // the AJAX part
    var flickerAPI =
      "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var flickrOptions = {
      tags: $searchField.val(),
      format: "json"
    };

    function displayPhotos(data) {
      var photoHTML = "<ul>";
      $.each(data.items, function(i, photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += "</ul>";
      $("#photos").html(photoHTML);
      $searchField.prop("disabled", false);
      $submitButton.attr("disabled", false).val("Search");
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
  }); // end click
}); // end ready
