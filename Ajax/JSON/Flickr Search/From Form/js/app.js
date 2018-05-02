/*
* app js
*
* Copyright (c) 2016 Gavin Schilling Marketing
* Licensed under the GNU Affero General Public License
* 
*/

$(document).ready(() => {
  $("form").submit(event => {
    event.preventDefault();
    const $submitButton = $("#submit");
    const $searchField = $("#search");

    $searchField.prop("disabled", true);
    $submitButton.attr("disabled", true).val("Searching ...");
    // the AJAX part
    const flickerAPI =
      "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    const flickrOptions = {
      tags: $searchField.val(),
      format: "json"
    };

    function displayPhotos(data) {
      let photoHTML = "<ul>";
      $.each(data.items, (i, photo) => {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += `<a href="${photo.link}" class="image">`;
        photoHTML += `<img src="${photo.media.m}"></a></li>`;
      }); // end each
      photoHTML += "</ul>";
      $("#photos").html(photoHTML);
      $searchField.prop("disabled", false);
      $submitButton.attr("disabled", false).val("Search");
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
  }); // end click
}); // end ready
