'use strict';

// When user clicks on Opposing Race name, toggle between hiding and showing dropdown content
function raceSelect() {
 document.getElementById('raceList').classList.toggle('show');
}

// Close dropdown menu if the use clicks outside of it
window.onclick = function(event) {
 if (!event.target.matches('.race-button')) {
  var dropdowns = document.getElementsByClassName('race-content');

  for (var i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
 }
}

// Allows viewport to display HTML from other files using UI-Router
var app = angular.module('view', ["ui.router"])
app.config(function($stateProvider, $urlRouterProvider){

  // For any unmatched url, send to /main
  $urlRouterProvider.otherwise("/main")

  $stateProvider
    .state('main', {
      url: "/main",
      templateUrl: "main.html"
    })
})
