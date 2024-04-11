/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("filterBtn").classList.toggle("btn-border");
}

// Close the dropdown menu if the user clicks outside of it
window.addEventListener('click', function(event){   
  if (!document.getElementById('myDropdown').contains(event.target)){
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
      var active = document.getElementById("filterBtn");
      if(active.classList.contains('btn-border')) {
        active.classList.toggle('btn-border');
      }
    }
  }
});