document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');
    const navItems = document.querySelectorAll('.nav-item');

    // Function to load content
    async function loadContent(page) {
        try {
            const response = await fetch(`pages_dash/${page}.html`);
            const html = await response.text();
            content.innerHTML = html;
        } catch (error) {
            console.error('Error loading content:', error);
            content.innerHTML = `<div class="page-content">
                <h2 class="page-title">Error loading content</h2>
                <p>Please try again later.</p>
            </div>`;
        }
    }

    // Function to update active state
    function updateActiveState(activeItem) {
        navItems.forEach(item => item.classList.remove('active'));
        activeItem.classList.add('active');
    }

    // Event listeners for navigation
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.dataset.page;
            updateActiveState(this);
            loadContent(page);
        });
    });

    // Load initial content (Recommended page)
    loadContent('recommended');
}); 