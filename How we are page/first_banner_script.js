function updateTextBasedOnScreenSize() {
    const dynamicTextContainer = document.getElementById('dynamicTextContainer');
    const screenSize = window.innerWidth;

    if (screenSize < 450) {
        dynamicTextContainer.innerHTML = 'Faites<br>un pas<br> en avant';
    } else {
        dynamicTextContainer.innerHTML = 'Faites un pas<br>en avant'; // Clear the text if the screen size is 450px or larger
    }
}

// Initial check and apply appropriate text
updateTextBasedOnScreenSize();

// Add listener for changes in window size
window.addEventListener('resize', updateTextBasedOnScreenSize);