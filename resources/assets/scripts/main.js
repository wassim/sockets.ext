(function() {
  'use strict';

  document.getElementById("body").classList.add("test");

  // Add search function
  var options = { valueNames: [ 'space-name', 'space-location','space-category', {name: 'space-speed', attr: 'data-speed'}, 'space-password', 'space-date' ] };
  var spacesList = new List('body', options); // eslint-disable-line

  // Copy password to clipboard
  var clipboard = new Clipboard('.copy-btn'); // eslint-disable-line

  // Handle opening hours 
  var d = new Date();
  var weekday = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");
  var today = weekday[d.getDay()];
  var days = document.querySelectorAll('.space-date .days');
  
  for (var i = 0; i < days.length; i++) {
    var day = days[i].textContent;

    // Wipe days
    // days[i].innerHTML = "";

    // Change status
    if (day.includes(today)) {
      days[i].previousElementSibling.innerHTML = "Ouvert aujourd'hui";
    } else {
      days[i].previousElementSibling.innerHTML = "Fermé aujourd'hui";
      days[i].nextElementSibling.innerHTML = "";
    }
  }

})();