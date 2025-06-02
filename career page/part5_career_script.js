function toggleContentHolder(container) {
    // Get the qt_content_holder within the clicked container
    var contentHolder = container.nextElementSibling;

    // Get the arrow within the clicked container
    var arrow = container.querySelector('.nav_arrow');

    // Check if the content holder is already active
    var isActive = contentHolder.classList.contains('active');

    // Hide all content holders and deactivate all arrows
    hideAllContentHolders();
    deactivateAllArrows();

    // If the content holder is not active, toggle the "active" class for the clicked content holder and arrow
    if (!isActive) {
        contentHolder.classList.toggle('active');
        arrow.classList.toggle('active');
    }
}

function hideAllContentHolders() {
    // Get all elements with class "qt_content_holder" and remove the "active" class
    var allContentHolders = document.querySelectorAll('.qt_content_holder');
    allContentHolders.forEach(function (contentHolder) {
        contentHolder.classList.remove('active');
    });
}

function deactivateAllArrows() {
    // Get all elements with class "nav_arrow" and remove the "active" class
    var allArrows = document.querySelectorAll('.nav_arrow');
    allArrows.forEach(function (arrow) {
        arrow.classList.remove('active');
    });
}
