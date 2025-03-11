document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');

    if (!cookieBanner || !acceptButton) {
        console.error("Cookiebanner-elementen niet gevonden!");
        return;
    }

    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.style.display = 'block';
    }

    acceptButton.addEventListener('click', function() {
        cookieBanner.style.display = 'none';
        localStorage.setItem('cookiesAccepted', 'true');
    });
});
