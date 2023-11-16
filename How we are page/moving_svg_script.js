        // Select the SVG
        const svg = document.getElementById('moving-svg');

        // Select all elements with class starting with "prt5_content_holder"
        const contentHolders = document.querySelectorAll('[class^="prt5_content_holder"]');

        // Store the Y positions for each content holder based on screen size
        let contentHolderPositions = {};

        function updateContentHolderPositions(screenSize) {
            if (screenSize === 'small') {
                contentHolderPositions = {
                  N1: 70,
                  N2: 300,
                  N3: 510,
                  N4: 715,
                  N5: 930,
                };
            } else {
                contentHolderPositions = {
                    N1: 50,
                    N2: 290,
                    N3: 490,
                    N4: 710,
                    N5: 930,
                };
            }
        }

        function applyScript(screenSize) {
            updateContentHolderPositions(screenSize);

            contentHolders.forEach((contentHolder, index) => {
                const className = contentHolder.className;
                const positionY = contentHolderPositions[className.split(' ')[1]];

                contentHolder.addEventListener('mouseenter', () => {
                    // Move the SVG to the specific Y position
                    svg.style.transform = `translateY(${positionY}px)`;
                    isHovering = true;
                });

                contentHolder.addEventListener('mouseleave', () => {
                    if (!isHovering) {
                        // Reset the SVG position when the mouse leaves and no content holder is hovered
                        svg.style.transform = 'translateY(0)';
                    }
                });
            });

            // Add an event listener to reset the SVG when the mouse leaves the entire container
            document.getElementById('container').addEventListener('mouseleave', () => {
                isHovering = false;
                svg.style.transform = 'translateY(0)';
            });
        }

        // Define the media query for screen size under 850px
        const mediaQueryUnder850 = window.matchMedia('(max-width: 849px)');

        // Initial check and apply appropriate script
        applyScript(mediaQueryUnder850.matches ? 'small' : 'large');

        // Add listener for changes in media query
        mediaQueryUnder850.addListener((mq) => {
            applyScript(mq.matches ? 'small' : 'large');
        });