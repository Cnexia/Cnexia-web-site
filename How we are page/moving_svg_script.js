      // Select the SVG
      const svg = document.getElementById('moving-svg');

      // Select all elements with class starting with "prt5_content_holder"
      const contentHolders = document.querySelectorAll('[class^="prt5_content_holder"]');
      
      // Store the Y positions for each content holder
      const contentHolderPositions = {
        N1: 50,
        N2: 290, // Adjust the Y position as needed
        N3: 480, // Adjust the Y position as needed
        N4: 650, // Adjust the Y position as needed
        N5: 850, // Adjust the Y position as needed
      };
      
      let isHovering = false; // Track if the mouse is hovering
      
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