document.addEventListener("DOMContentLoaded", function () {
    const leftNavButton = document.querySelector(".prt7_nav_btn_left");
    const rightNavButton = document.querySelector(".prt7_nav_btn_right");

    const myimages = [
      {
        imageSrc: "https://assets.phenompeople.com/CareerConnectResources/prod/CNEXEMEA/images/IMG_00091-1698658710568.jpg",
      },
      {
        imageSrc: "https://assets.phenompeople.com/CareerConnectResources/prod/CNEXEMEA/images/IMG_01341-1698658712415.jpg",
      },
      {
        imageSrc: "https://assets.phenompeople.com/CareerConnectResources/prod/CNEXEMEA/images/IMG_02331-1698658713817.jpg",
      },
      {
        imageSrc: "https://assets.phenompeople.com/CareerConnectResources/prod/CNEXEMEA/images/fsdsdfsvxcvzsg-16502948787961-1698658708676.jpg",
      },
      // Add more images as needed
    ];

    let currentImageIndex = 0;
    let intervalId;

    function showImage(index) {
      const myimage = myimages[index];
      if (myimage) {
        const prt7Layer1 = document.querySelector(".prt7_layer1");

        // Update the background image of .prt7_layer1
        prt7Layer1.style.backgroundImage = `url('${myimage.imageSrc}')`;

        // Automatically switch to the next image
        startAutoSwitch();
      }
    }

    function startAutoSwitch() {
      intervalId = setInterval(function () {
        currentImageIndex++;
        if (currentImageIndex >= myimages.length) {
          currentImageIndex = 0;
        }
        showImage(currentImageIndex);
      }, 5000); // Adjust the interval (in milliseconds) as needed
    }

    function stopAutoSwitch() {
      clearInterval(intervalId);
    }

    // Show the initial image
    showImage(currentImageIndex);

    // Handle left navigation button click
    leftNavButton.addEventListener("click", function () {
      currentImageIndex--;
      if (currentImageIndex < 0) {
        currentImageIndex = myimages.length - 1;
      }
      showImage(currentImageIndex);
      stopAutoSwitch(); // Stop auto-switch when manually navigating
    });

    // Handle right navigation button click
    rightNavButton.addEventListener("click", function () {
      currentImageIndex++;
      if (currentImageIndex >= myimages.length) {
        currentImageIndex = 0;
      }
      showImage(currentImageIndex);
      stopAutoSwitch(); // Stop auto-switch when manually navigating
    });
  });