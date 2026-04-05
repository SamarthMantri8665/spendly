// main.js — students will add JavaScript here as features are built

// How It Works Modal
(function() {
    const modal = document.getElementById('howItWorksModal');
    const openBtn = document.getElementById('howItWorksBtn');
    const closeBtn = document.getElementById('modalCloseBtn');
    const video = document.getElementById('modalVideo');
    const videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';

    if (!modal || !openBtn) return;

    function openModal() {
        modal.classList.add('active');
        video.src = videoUrl;
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        video.src = '';
        document.body.style.overflow = '';
    }

    openBtn.addEventListener('click', function(e) {
        e.preventDefault();
        openModal();
    });

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
})();
