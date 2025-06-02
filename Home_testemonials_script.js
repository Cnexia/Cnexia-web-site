document.addEventListener("DOMContentLoaded", function () {
<<<<<<< HEAD
  const leftNavButton = document.querySelector(".prt7_nav.left");
  const rightNavButton = document.querySelector(".prt7_nav.right");

  const testimonials = [
    {
      imageSrc:
        "https://assets.phenompeople.com/CareerConnectResources/prod/CNEXEMEA/images/Achraf_final_pic-1696417930252.png",
      text: "J'ai rejoint Cnexia en 2019 comme Responsable Formation, avec pour mission de constituer une équipe passionnée et de développer des programmes sur mesure pour nos talents. Aujourd'hui, en tant que Directeur des Opérations, je pilote les équipes avec rigueur et innovation, tout en optimisant les processus pour relever de nouveaux défis.",
      name: "Achraf T",
      role: "Directeur des Opérations",
    },
    // {
    //     imageSrc: "https://assets.phenompeople.com/CareerConnectResources/prod/CNEXEMEA/images/Wassel_final_pic-1696417979047.png",
    //     text: "Mon aventure chez Cnexia a débuté en 2019 en tant que conseiller client. Ensuite j’ai occupé le poste de «Quality Analyst», qui m’a permis d’être rapidement promu «Team Manager». Actuellement j’occupe le poste «Compensation Analyst», qui est une nouvelle aventure pour moi, et je suis enthousiaste à l'idée de contribuer à la croissance de notre société.",
    //     name: "Wassel E",
    //     role: "Compensation Analyst",
    // },
    // Add more testimonials as needed
  ];

  let currentTestimonialIndex = 0;
  let intervalId;

  function showTestimonial(index) {
    const testimonial = testimonials[index];
    if (testimonial) {
      const testImagesElement = document.querySelector(".test_imag");
      const testContentElement = document.querySelector(".test_content");

      // Fade out the elements
      testImagesElement.style.opacity = 0;
      testContentElement.style.opacity = 0;

      setTimeout(() => {
        // Update the background image of .test_images
        const testImageElement = document.querySelector(".test_imag");
        testImageElement.style.backgroundImage = `url('${testimonial.imageSrc}')`;

        // Update the content inside .test_content
        testContentElement.innerHTML = `
=======
    const leftNavButton = document.querySelector(".prt7_nav.left");
    const rightNavButton = document.querySelector(".prt7_nav.right");

    const testimonials = [
        {
            imageSrc: "https://assets.phenompeople.com/CareerConnectResources/prod/CNEXEMEA/images/Achraf_final_pic-1696417930252.png",
            text: "J'ai rejoint Cnexia en 2019 comme Responsable Formation, avec pour mission de constituer une équipe passionnée et de développer des programmes sur mesure pour nos talents. Aujourd'hui, en tant que Directeur des Opérations, je pilote les équipes avec rigueur et innovation, tout en optimisant les processus pour relever de nouveaux défis.",
            name: "Achraf T",
            role: "Directeur des Opérations",
        },
        {
            imageSrc: "https://assets.phenompeople.com/CareerConnectResources/prod/CNEXEMEA/images/Wassel_final_pic-1696417979047.png",
            text: "Mon aventure chez Cnexia a débuté en 2019 en tant que conseiller client. Ensuite j’ai occupé le poste de «Quality Analyst», qui m’a permis d’être rapidement promu «Team Manager». Actuellement j’occupe le poste «Compensation Analyst», qui est une nouvelle aventure pour moi, et je suis enthousiaste à l'idée de contribuer à la croissance de notre société.",
            name: "Wassel E",
            role: "Compensation Analyst",
        },
        // Add more testimonials as needed
    ];

    let currentTestimonialIndex = 0;
    let intervalId;

        function showTestimonial(index) {
        const testimonial = testimonials[index];
        if (testimonial) {
            const testImagesElement = document.querySelector(".test_imag");
            const testContentElement = document.querySelector(".test_content");
            

            // Fade out the elements
            testImagesElement.style.opacity = 0;
            testContentElement.style.opacity = 0;
            

            setTimeout(() => {
            // Update the background image of .test_images
            const testImageElement = document.querySelector(".test_imag");
            testImageElement.style.backgroundImage = `url('${testimonial.imageSrc}')`;

            // Update the content inside .test_content
            testContentElement.innerHTML = `
>>>>>>> 7301c0eaae4c1706f9a88b1a09c11326dc297638
                <div class="test_text">
                    <p>${testimonial.text}</p>
                </div>
                <div class="test_nomination">
                    <p>
                        <span>${testimonial.name}</span><br>
                        <span style="color: #03B585; font-weight: 400">${testimonial.role}</span>
                    </p>
                </div>
            `;

<<<<<<< HEAD
        // Fade in the elements
        testImagesElement.style.opacity = 1;
        testContentElement.style.opacity = 1;
      }, 150); // Adjust the delay as needed
    }
  }

  function startAutoSwitch() {
    intervalId = setInterval(function () {
      currentTestimonialIndex++;
      if (currentTestimonialIndex >= testimonials.length) {
        currentTestimonialIndex = 0;
      }
      showTestimonial(currentTestimonialIndex);
    }, 5000); // Adjust the interval (in milliseconds) as needed
  }

  function stopAutoSwitch() {
    clearInterval(intervalId);
  }

  // Show the initial testimonial
  showTestimonial(currentTestimonialIndex);

  // Handle left navigation button click
  leftNavButton.addEventListener("click", function () {
    currentTestimonialIndex--;
    if (currentTestimonialIndex < 0) {
      currentTestimonialIndex = testimonials.length - 1;
    }
    showTestimonial(currentTestimonialIndex);
    stopAutoSwitch(); // Stop auto-switch when manually navigating
  });

  // Handle right navigation button click
  rightNavButton.addEventListener("click", function () {
    currentTestimonialIndex++;
    if (currentTestimonialIndex >= testimonials.length) {
      currentTestimonialIndex = 0;
    }
    showTestimonial(currentTestimonialIndex);
    stopAutoSwitch(); // Stop auto-switch when manually navigating
  });

  // Start auto-switching initially
  startAutoSwitch();
});
=======
            // Fade in the elements
            testImagesElement.style.opacity = 1;
            testContentElement.style.opacity = 1;
            
            }, 150); // Adjust the delay as needed
        }
        }


    function startAutoSwitch() {
        intervalId = setInterval(function () {
            currentTestimonialIndex++;
            if (currentTestimonialIndex >= testimonials.length) {
                currentTestimonialIndex = 0;
            }
            showTestimonial(currentTestimonialIndex);
        }, 5000); // Adjust the interval (in milliseconds) as needed
    }

    function stopAutoSwitch() {
        clearInterval(intervalId);
    }

    // Show the initial testimonial
    showTestimonial(currentTestimonialIndex);

    // Handle left navigation button click
    leftNavButton.addEventListener("click", function () {
        currentTestimonialIndex--;
        if (currentTestimonialIndex < 0) {
            currentTestimonialIndex = testimonials.length - 1;
        }
        showTestimonial(currentTestimonialIndex);
        stopAutoSwitch(); // Stop auto-switch when manually navigating
    });

    // Handle right navigation button click
    rightNavButton.addEventListener("click", function () {
        currentTestimonialIndex++;
        if (currentTestimonialIndex >= testimonials.length) {
            currentTestimonialIndex = 0;
        }
        showTestimonial(currentTestimonialIndex);
        stopAutoSwitch(); // Stop auto-switch when manually navigating
    });

    // Start auto-switching initially
    startAutoSwitch();
});

>>>>>>> 7301c0eaae4c1706f9a88b1a09c11326dc297638
