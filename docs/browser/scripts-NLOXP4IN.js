function myFunction(){document.getElementById("myDropdown").classList.toggle("show"),document.getElementById("filterBtn").classList.toggle("btn-border")}window.addEventListener("click",function(e){if(!document.getElementById("myDropdown").contains(e.target)&&!e.target.matches(".dropbtn")){var n=document.getElementsByClassName("dropdown-content"),t;for(t=0;t<n.length;t++){var s=n[t];s.classList.contains("show")&&s.classList.remove("show")}var o=document.getElementById("filterBtn");o.classList.contains("btn-border")&&o.classList.toggle("btn-border")}});function ShowFunction(){document.getElementById("resume").classList.toggle("show")}
