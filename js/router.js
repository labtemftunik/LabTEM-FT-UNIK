function loadPageCSS(page) {

    // Hapus CSS halaman sebelumnya

    const oldCSS =
        document.getElementById("pageCSS");

    if (oldCSS) {

        oldCSS.remove();

    }


    // Ambil nama folder

    const folder =
        page.split("/")[0];


    // Buat link CSS

    const link =
        document.createElement("link");

    link.id = "pageCSS";

    link.rel = "stylesheet";

    link.href =
        "css/" + folder + ".css";


    document.head.appendChild(link);

}
function loadPageJS(page) {

// Hapus JS halaman sebelumnya

const oldJS =
    document.getElementById("pageJS");

if (oldJS) {
    oldJS.remove();
}


// Ambil nama folder

const folder =
    page.split("/")[0];


// Buat script

const script =
    document.createElement("script");

script.id = "pageJS";

script.src =
    "js/" + folder + ".js";


document.body.appendChild(script);

}
async function loadPage(page) {

    try {

        const response =
            await fetch("pages/" + page + ".html");


        if (!response.ok) {

            throw new Error(
                "Halaman tidak ditemukan"
            );

        }


        const html =
            await response.text();


        document.getElementById("content")
            .innerHTML = html;

        loadPageCSS(page);
        loadPageJS(page);

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

                    interval: 2000,

                    pause: "hover",

                    wrap: true

                }
            );

        }



        // ==========================================
        // PENCARIAN MODUL
        // ==========================================

        const searchModul =
            document.getElementById(
                "searchModul"
            );


        const filterButtons =
            document.querySelectorAll(
                ".filter-btn"
            );


        const modulCards =
            document.querySelectorAll(
                ".modul-card"
            );


        const modulEmpty =
            document.getElementById(
                "modulEmpty"
            );


        let currentFilter = "all";


        function filterModul() {

            const keyword =
                searchModul.value
                    .toLowerCase()
                    .trim();


            let visibleCount = 0;


            modulCards.forEach(
                card => {

                    const title =
                        card.dataset.title
                            .toLowerCase();


                    const semester =
                        card.dataset.semester;


                    const matchSearch =
                        title.includes(
                            keyword
                        );


                    const matchFilter =
                        currentFilter === "all" ||
                        semester === currentFilter;


                    if (
                        matchSearch &&
                        matchFilter
                    ) {

                        card.style.display =
                            "";

                        visibleCount++;

                    } else {

                        card.style.display =
                            "none";

                    }

                }
            );


            // Tampilkan pesan
            // jika tidak ada hasil

            if (visibleCount === 0) {

                if (modulEmpty) {

                    modulEmpty.style.display =
                        "block";

                }

            } else {

                if (modulEmpty) {

                    modulEmpty.style.display =
                        "none";

                }

            }

        }



        // ==========================================
        // INPUT PENCARIAN
        // ==========================================

        if (searchModul) {

            searchModul.addEventListener(
                "input",
                filterModul
            );

        }



        // ==========================================
        // FILTER SEMESTER
        // ==========================================

        filterButtons.forEach(
            button => {

                button.addEventListener(
                    "click",
                    function () {


                        // Hapus active
                        // dari semua tombol

                        filterButtons.forEach(
                            btn => {

                                btn.classList
                                    .remove(
                                        "active"
                                    );

                            }
                        );


                        // Aktifkan tombol
                        // yang diklik

                        this.classList.add(
                            "active"
                        );


                        // Ambil semester

                        currentFilter =
                            this.dataset.filter;


                        // Jalankan filter

                        filterModul();

                    }
                );

            }
        );



        // ==========================================
        // TUTUP MENU
        // ==========================================

        const menu =
            document.getElementById(
                "menu"
            );


        const offcanvas =
            bootstrap.Offcanvas
                .getInstance(menu);


        if (offcanvas) {

            offcanvas.hide();

        }



        // ==========================================
        // SCROLL KE ATAS
        // ==========================================

        window.scrollTo(
            0,
            0
        );


    } catch (error) {


        document.getElementById(
            "content"
        ).innerHTML = `

            <div class="text-center py-5">

                <i
                    class="bi bi-exclamation-circle"
                    style="font-size:50px;">
                </i>

                <h3 class="mt-3">
                    Halaman Belum Dibuat
                </h3>

                <p class="text-muted">
                    Halaman yang Anda buka
                    belum tersedia.
                </p>

            </div>

        `;


        console.error(error);

    }

}



function router() {


    let page =
        location.hash.replace(
            "#",
            ""
        );


    if (page === "") {

        page = "home/home";

    }


    loadPage(page);

}



window.addEventListener(
    "hashchange",
    router
);


window.addEventListener(
    "load",
    router
);