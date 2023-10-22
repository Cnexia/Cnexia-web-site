document.addEventListener("DOMContentLoaded", function () {
    const dots = document.querySelectorAll(".dot");
    const cards = document.querySelectorAll(".prt6_card");
    let currentIndex = 0;

    // Initialize the first card and dot as active
    cards[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");

    // Swipe left or right to navigate cards
    $(".prt6_cards_container").on("swiperight", function() {
        showCard(currentIndex - 1);
    });

    $(".prt6_cards_container").on("swipeleft", function() {
        showCard(currentIndex + 1);
    });

    // Function to show a specific card
    function showCard(index) {
        if (index < 0) {
            index = cards.length - 1;
        } else if (index >= cards.length) {
            index = 0;
        }

        cards[currentIndex].classList.remove("active");
        dots[currentIndex].classList.remove("active");

        cards[index].classList.add("active");
        dots[index].classList.add("active");

        currentIndex = index;
    }

    // Click event for navigation dots
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showCard(index);
        });
    });
});
