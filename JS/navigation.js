document.addEventListener('DOMContentLoaded', function() {
      
    const icon = document.getElementById('icon');
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close');

    // Function to open the popup
    function openPopup() {
      popup.style.display = 'block';
    }
 
    // Function to close the popup
    function closePopup() {
      popup.style.display = 'none';
    }

    // Add event listeners
    icon.addEventListener('click', openPopup);
    closeBtn.addEventListener('click', closePopup);
  });