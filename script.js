function openInvitation() {
    const overlay = document.getElementById("overlay");
    const music = document.getElementById("music");

    overlay.style.display = "none";

    music.volume = 0.5;
    music.play().catch(() => {});

    document.querySelectorAll(".hidden").forEach(el => {
        el.classList.remove("hidden");
    });

    animateOnScroll();
}

function animateOnScroll() {
    const elements = document.querySelectorAll(".animate");

    function check() {
        const trigger = window.innerHeight * 0.85;

        elements.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < trigger) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", check);
    check();
}

function toggleMusic() {
    const music = document.getElementById("music");
    music.paused ? music.play() : music.pause();
}
