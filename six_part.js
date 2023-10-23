$(document).ready(function() {
    let currentCard = 1; // Track the currently displayed card

    // Function to show the specified card and hide others
    function showCard(cardNumber) {
      $('.prt6_card').hide();
      $(`#card${cardNumber}`).show();
    }

    // Function to show the next card
    function showNextCard() {
      currentCard = currentCard % 3 + 1; // Loop back to 1 when on the last card
      showCard(currentCard);
    }

    // Function to show the previous card
    function showPrevCard() {
      currentCard = currentCard - 1 > 0 ? currentCard - 1 : 3; // Loop back to 3 when on the first card
      showCard(currentCard);
    }

    // Attach click handlers to the navigation buttons
    $('.nav_left_btn').click(function() {
      showPrevCard();
    });

    $('.nav_right_btn').click(function() {
      showNextCard();
    });

    // Function to handle responsive layout
    function handleResponsiveLayout() {
      if ($(window).width() <= 768) {
        // Screen width is 768px or less
        $('.navigation-btns').show(); // Show the navigation buttons
        $('.prt6_card').hide(); // Hide all cards
        showCard(currentCard); // Show the currently selected card
      } else {
        // Screen width is greater than 768px
        $('.navigation-btns').hide(); // Hide the navigation buttons
        $('.prt6_card').show(); // Show all cards
      }
    }

    // Handle initial layout and window resize
    handleResponsiveLayout();
    $(window).resize(handleResponsiveLayout);
  });