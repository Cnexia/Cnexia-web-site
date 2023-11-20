const svg = document.getElementById('moving-svg');
const contentHolders = document.querySelectorAll('[class^="prt5_content_holder"]');
let contentHolderPositions = {};
let prevScrollY = 0;

function updateContentHolderPositions(screenSize) {
    if (screenSize === 'small') {
        contentHolderPositions = {
            N1: 400,
            N2: 300,
            N3: 510,
            N4: 715,
            N5: 930,
        };
    } else {
        contentHolderPositions = {
            N1: 40,
            N2: 290,
            N3: 490,
            N4: 710,
            N5: 930,
        };
    }
}

function applyScript(screenSize) {
    updateContentHolderPositions(screenSize);

    const container = document.getElementById('container5');
    const containerHeight = container.clientHeight;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY - container.offsetTop;

        // Check if the screen size is less than 849px
        if (screenSize === 'small') {
            const activeContentHolder = Array.from(contentHolders).find((contentHolder) => {
                const className = contentHolder.className;
                const positionY = contentHolderPositions[className.split(' ')[1]];

                return scrollY >= positionY && scrollY < positionY + containerHeight;
            });

            if (activeContentHolder) {
                const className = activeContentHolder.className;
                const positionY = contentHolderPositions[className.split(' ')[1]];
                
                // Calculate the progress of the scroll within the active content holder
                const progress = (scrollY - positionY) / containerHeight;

                // Use the progress to smoothly move the SVG
                svg.style.transform = `translateY(${progress * 300}px)`;
            }
        }

        prevScrollY = scrollY;
    });
}

const mediaQueryUnder850 = window.matchMedia('(max-width: 849px)');

applyScript(mediaQueryUnder850.matches ? 'small' : 'large');

mediaQueryUnder850.addListener((mq) => {
    applyScript(mq.matches ? 'small' : 'large');
});