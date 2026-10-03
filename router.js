// ==========================================
// LOAD CSS HALAMAN
// ==========================================

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


// ==========================================
// LOAD JS HALAMAN
// ==========================================

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


    // Tunggu sampai JS selesai dimuat

    return new Promise(
        (resolve, reject) => {

            script.onload = resolve;

            script.onerror = reject;

            document.body.appendChild(
                script
            );

        }
    );

}


// ==========================================
// LOAD HALAMAN
// ==========================================

async function loadPage(page) {

    try {

        // Ambil HTML halaman

        const response =
            await fetch(
                "pages/" + page + ".html"
            );


        if (!response.ok) {

            throw new Error(
                "Halaman tidak ditemukan"
            );

        }


        // Ambil isi HTML

        const html =
            await response.text();


        // Masukkan HTML ke content

        document.getElementById("content")
            .innerHTML = html;


        // Load CSS halaman

        loadPageCSS(page);


        // Load JS halaman
        // Tunggu sampai selesai dimuat

        await loadPageJS(page);


        // ==========================================
        // TUTUP MENU
        // ==========================================

        const menu =
            document.getElementById(
                "menu"
            );


        if (menu) {

            const offcanvas =
                bootstrap.Offcanvas
                    .getInstance(menu);


            if (offcanvas) {

                offcanvas.hide();

            }

        }


        // ==========================================
        // SCROLL KE ATAS
        // ==========================================

        window.scrollTo(
            0,
            0
        );


    } catch (error) {

        console.error(error);


        document.getElementById(
            "content"
        ).innerHTML = `

            <div class="text-center py-5">

                <i
                    class="bi bi-exclamation-circle"
                    style="font-size:50px;"
                ></i>

                <h3 class="mt-3">
                    Halaman Belum Dibuat
                </h3>

                <p class="text-muted">
                    Halaman yang Anda buka
                    belum tersedia.
                </p>

            </div>

        `;

    }

}


// ==========================================
// ROUTER
// ==========================================

function router() {

    let page =
        location.hash.replace(
            "#",
            ""
        );


    // Jika tidak ada hash,
    // buka halaman home

    if (page === "") {

        page = "home/home";

    }


    loadPage(page);

}


// ==========================================
// EVENT ROUTER
// ==========================================

window.addEventListener(
    "hashchange",
    router
);


window.addEventListener(
    "load",
    router
);
