const detailsElements = document.querySelectorAll(".my-details");

// Add hover behavior to each selected details element
detailsElements.forEach(function(details) {
  details.addEventListener("mouseenter", function() {
    this.setAttribute("open", true);
  });

  details.addEventListener("mouseleave", function() {
    this.removeAttribute("open");
  });
});
