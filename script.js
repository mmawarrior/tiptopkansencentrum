document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const overlay = document.getElementById("overlay");
    const menuLinks = document.querySelectorAll(".mobile-menu ul li a");

    // ✅ Toggle menu en overlay
    menuToggle.addEventListener("click", function (event) {
        event.stopPropagation();
        mobileMenu.classList.toggle("active");
        menuToggle.classList.toggle("open");
        overlay.style.display = mobileMenu.classList.contains("active") ? "block" : "none";
    });

    // ✅ Sluit menu bij klik op een link
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            mobileMenu.classList.remove("active");
            menuToggle.classList.remove("open");
            overlay.style.display = "none";
        });
    });

    // ✅ Sluit menu als je op de overlay klikt
    overlay.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
        menuToggle.classList.remove("open");
        overlay.style.display = "none";
    });

    // ✅ 🔥 Fix: Sluit menu bij resize naar desktop
    window.addEventListener("resize", function () {
        if (window.innerWidth > 900) { // Als scherm > 900px (desktop)
            mobileMenu.classList.remove("active");
            menuToggle.classList.remove("open");
            overlay.style.display = "none";
        }
    });
});
