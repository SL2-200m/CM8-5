 
        document.addEventListener('DOMContentLoaded', function() {
            // --- "Show more/less" functionality for filters ---
            const toggles = document.querySelectorAll('.filter-toggle');

            toggles.forEach(toggle => {
                toggle.addEventListener('click', () => {
                    const targetId = toggle.dataset.target;
                    let itemsToShow, listItems;
                    
                    if (targetId === 'category-types') {
                        listItems = toggle.previousElementSibling.querySelectorAll('li');
                        itemsToShow = [3, 4]; // indices of items to toggle
                    } else if (targetId === 'attraction-types') {
                        listItems = toggle.previousElementSibling.querySelectorAll('li');
                        itemsToShow = [7, 8, 9, 10]; // indices of items to toggle
                    }

                    if (listItems && itemsToShow) {
                        itemsToShow.forEach(index => {
                           listItems[index].classList.toggle('hidden-filter');
                        });

                        // Update toggle text and icon
                        if (toggle.textContent.includes('Show more')) {
                            toggle.innerHTML = 'Show less <i class="fa-solid fa-chevron-up"></i>';
                        } else {
                            toggle.innerHTML = 'Show more <i class="fa-solid fa-chevron-down"></i>';
                        }
                    }
                });
            });

            // Initialize the attraction types to "Show less" state
            const attractionToggle = document.querySelector('.filter-toggle[data-target="attraction-types"]');
            if (attractionToggle) {
                const listItems = attractionToggle.previousElementSibling.querySelectorAll('li');
                const itemsToHide = [7, 8, 9, 10];
                itemsToHide.forEach(index => listItems[index].classList.add('hidden-filter'));
                attractionToggle.innerHTML = 'Show more <i class="fa-solid fa-chevron-down"></i>';
            }


            // --- Pop-up Dismiss functionality ---
            const offerPopup = document.getElementById('offer-popup');
            const dismissBtn = document.getElementById('offer-dismiss-btn');
            const closeBtn = document.getElementById('offer-close-btn');

            function dismissPopup() {
                offerPopup.classList.add('hidden');
            }

            dismissBtn.addEventListener('click', dismissPopup);
            closeBtn.addEventListener('click', dismissPopup);
        });