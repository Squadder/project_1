function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

   // Get all the nav links and sub nav links
 let navLinks = document.querySelectorAll(".nav-link");
 let subNavLinks = document.querySelectorAll(".sub-nav-link");
 
 // Add click event listeners to each nav link
 navLinks.forEach((navLink) => {
   navLink.addEventListener("click", (e) => {
     // Prevent the default behavior of the link
     e.preventDefault();
     // Toggle the active class on the clicked link
     navLink.classList.toggle("active");
   });
 });
 
 // Add click event listeners to each sub nav link
 subNavLinks.forEach((subNavLink) => {
   subNavLink.addEventListener("click", (e) => {
     // Prevent the default behavior of the link
     e.preventDefault();
     // Toggle the active class on the clicked link
     subNavLink.classList.toggle("active");
   });
 });
 

