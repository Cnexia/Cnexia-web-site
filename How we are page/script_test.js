document.addEventListener('DOMContentLoaded', function () {
    const svg = document.getElementById('moving-svg');
    const contentHolders = document.querySelectorAll('.content_holder');

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        const svgPosition = svg.getBoundingClientRect();
        const offset = 50; // Adjust this offset as needed

        contentHolders.forEach(function (contentHolder) {
            const holderPosition = contentHolder.getBoundingClientRect();

            if (holderPosition.top <= offset && holderPosition.bottom >= offset) {
                // Move the SVG relative to the content holder
                svg.style.top = (holderPosition.top - svgPosition.top + offset) + 'px';
            }
        });
    });
});
