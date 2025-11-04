gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', function() {

    gsap.from(".hero-title", {
        opacity: 0.1,
        y: 100,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.3
    });

    gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 60,
        duration: 1.2,
        delay: 0.7,
        ease: "power3.out"
    });

    gsap.from(".primary-cta", {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        delay: 1,
        ease: "back.out(2)"
    });

    gsap.utils.toArray(".stat-item").forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: ".stats-section",
                start: "top 80%"
            },
            opacity: 0,
            y: 40,
            delay: i * 0.2,
            duration: 0.8,
            ease: "power2.out"
        });
    });

    gsap.utils.toArray(".product-card").forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%"
            },
            opacity: 0,
            y: 60,
            duration: 0.8,
            ease: "power2.out"
        });
    });

    gsap.utils.toArray(".feature-card").forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: ".features",
                start: "top 75%"
            },
            opacity: 0,
            y: 60,
            delay: i * 0.2,
            duration: 0.8,
            ease: "power2.out"
        });
    });

    gsap.utils.toArray(".testimonial-card").forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: ".testimonials",
                start: "top 75%"
            },
            opacity: 0,
            x: -40,
            delay: i * 0.2,
            duration: 0.8,
            ease: "power2.out"
        });
    });

    gsap.from(".final-cta h2", {
        scrollTrigger: {
            trigger: ".final-cta",
            start: "top 80%"
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out"
    });

    gsap.from(".final-cta-text", {
        scrollTrigger: {
            trigger: ".final-cta",
            start: "top 80%"
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out"
    });

    gsap.from(".final-cta .cta-button", {
        scrollTrigger: {
            trigger: ".final-cta",
            start: "top 80%"
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        delay: 0.4,
        ease: "back.out(2)"
    });
});

const navbar = document.querySelector(".navbar");
if (navbar) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 4px 25px rgba(0, 0, 0, 0.15)";
        } else {
            navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.08)";
        }
    });
}