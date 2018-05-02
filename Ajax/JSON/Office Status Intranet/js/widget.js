/*
* widget js
*
* Copyright (c) 2016 Gavin Schilling Marketing
* Licensed under the GNU Affero General Public License
* 
*/

$(document).ready(() => {
  $.getJSON("../data/employees.json", data => {
    let statusHTML = '<ul class="bulleted">';
    $.each(data, (index, employee) => {
      if (employee.inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += `${employee.name}</li>`;
    }); //end each
    statusHTML += "</ul>";
    $("#employeeList").html(statusHTML);
  }); // end getJSON

  $.getJSON("../data/rooms.json", data => {
    let statusHTML = '<ul class="rooms">';
    $.each(data, (index, room) => {
      if (room.available === true) {
        statusHTML += '<li class="empty">';
      } else {
        statusHTML += '<li class="full">';
      }
      statusHTML += `${room.room}</li>`;
    }); //end each
    statusHTML += "</ul>";
    $("#roomList").html(statusHTML);
  }); // end getJSON
}); // end ready
