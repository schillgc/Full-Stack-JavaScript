/*
* todos js
*
* Copyright (c) 2016 Gavin Schilling Marketing
* Licensed under the GNU Affero General Public License
* 
*/

'use strict';

angular.module('todoListApp')
.directive('todos', function (){
  return {
    templateUrl: 'templates/todos.html',
    controller: 'mainCtrl',
    replace: true
  }
})