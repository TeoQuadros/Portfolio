
        document.addEventListener('DOMContentLoaded', () => {
            const scrollToTopBtn = document.getElementById('ScrollBtn');
            const scrollThreshold = 200; // Show button after scrolling 200px

            window.onscroll = function () { scrollFunction() };

            function scrollFunction() {
                if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
                    scrollToTopBtn.style.display = "block";
                    scrollToTopBtn.style.opacity = "1"; // Make it appear
                } else {
                    scrollToTopBtn.style.display = "none"; // Hide it completely
                    scrollToTopBtn.style.opacity = "0"; // Make it disappear
                }
            }

            scrollToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth' // This creates the visual, smooth scroll
                });
            });
        });


  