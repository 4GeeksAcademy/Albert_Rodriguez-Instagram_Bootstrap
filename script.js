document.addEventListener('DOMContentLoaded', function() {
    // Step 1: Select the elements
    let showFeedRadio = document.getElementById('show-feed');
    let showGalleryRadio = document.getElementById('show-gallery');
    let feedContainer = document.querySelector('.feed-container');
    let galleryView = document.getElementById('gallery-view');

    // Step 2: Add event listeners
    showFeedRadio.addEventListener('change', toggleView);
    showGalleryRadio.addEventListener('change', toggleView);

    // Step 3: Toggle function
    function toggleView() {
        if (showFeedRadio.checked) {
            feedContainer.style.display = 'block';
            galleryView.style.display = 'none';
        } else if (showGalleryRadio.checked) {
            feedContainer.style.display = 'none';
            galleryView.style.display = 'block';
        }
    }

    // Initial setup: Just to make sure the views match the default selected radio
    toggleView();
});
