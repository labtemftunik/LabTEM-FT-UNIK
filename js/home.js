// ==========================================
// CAROUSEL PRAKTIKUM
// ==========================================

const carousel =
    document.getElementById(
        "praktikumCarousel"
    );


if (carousel) {

    new bootstrap.Carousel(
        carousel,
        {

            interval: 3000,

            pause: "hover",

            wrap: true

        }
    );

}