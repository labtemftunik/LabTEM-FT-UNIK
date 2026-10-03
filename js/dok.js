// ==========================================
// URL GOOGLE APPS SCRIPT
// ==========================================

(function () {
const MODUL_API_URL =
    "https://script.google.com/macros/s/AKfycbwDCSNlsW4XVC_fcBsBZwOiKAwOZVzkApGrmdW90tqchFMiNnfCVGdtuoloFtvQWmg1iQ/exec";


// ==========================================
// LOAD DATA MODUL
// ==========================================

async function loadModul() {

    const modulGrid =
        document.getElementById("modulGrid");

    const modulEmpty =
        document.getElementById("modulEmpty");

    if (!modulGrid) {
        return;
    }

    try {

        const response =
            await fetch(MODUL_API_URL);

        if (!response.ok) {
            throw new Error(
                "Gagal mengambil data modul"
            );
        }

        const data =
            await response.json();

        console.log("Data modul:", data);

        modulGrid.innerHTML = "";

        if (!data || data.length === 0) {

            if (modulEmpty) {
                modulEmpty.style.display = "block";
            }

            return;
        }

        data.forEach(modul => {

            modulGrid.innerHTML +=
                createModulCard(modul);

        });

        if (modulEmpty) {
            modulEmpty.style.display = "none";
        }

        initModulSearchFilter();

    } catch (error) {

        console.error(
            "ERROR LOAD MODUL:",
            error
        );

        modulGrid.innerHTML = `
            <div class="text-center py-5">
                <i class="bi bi-exclamation-circle fs-1"></i>

                <h5 class="mt-3">
                    Data modul gagal dimuat
                </h5>

                <p class="text-muted">
                    Periksa koneksi atau konfigurasi Google Spreadsheet.
                </p>
            </div>
        `;
    }
}


// ==========================================
// BUAT CARD MODUL
// ==========================================

function createModulCard(modul) {

    const fileId =
        getGoogleDriveFileId(modul.link);

    const viewURL =
        fileId
            ? `https://drive.google.com/file/d/${fileId}/view`
            : modul.link;

    const downloadURL =
        fileId
            ? `https://drive.google.com/uc?export=download&id=${fileId}`
            : modul.link;

    return `
        <div
            class="modul-card"
            data-title="${escapeHTML(modul.mk)}"
            data-semester="${escapeHTML(modul.semester)}"
        >

            <div class="modul-card-body">

                <span class="badge bg-primary mb-2">
                    Semester ${escapeHTML(modul.semester)}
                </span>

                <h5>
                    ${escapeHTML(modul.mk)}
                </h5>

                <p>
                    ${escapeHTML(modul.deskripsi)}
                </p>

                <div class="mt-3">

                    <a
                        href="${viewURL}"
                        target="_blank"
                        class="btn btn-primary btn-sm"
                    >
                        <i class="bi bi-eye"></i>
                        Lihat Modul
                    </a>

                    <a
                        href="${downloadURL}"
                        target="_blank"
                        class="btn btn-outline-primary btn-sm"
                    >
                        <i class="bi bi-download"></i>
                        Download
                    </a>

                </div>

            </div>

        </div>
    `;
}


// ==========================================
// AMBIL FILE ID GOOGLE DRIVE
// ==========================================

function getGoogleDriveFileId(url) {

    if (!url) {
        return "";
    }

    const match =
        url.match(
            /\/d\/([a-zA-Z0-9_-]+)/
        );

    if (match) {
        return match[1];
    }

    const idMatch =
        url.match(
            /[?&]id=([a-zA-Z0-9_-]+)/
        );

    if (idMatch) {
        return idMatch[1];
    }

    return "";
}


// ==========================================
// SEARCH + FILTER
// ==========================================

function initModulSearchFilter() {

    const searchModul =
        document.getElementById("searchModul");

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const modulCards =
        document.querySelectorAll(".modul-card");

    const modulEmpty =
        document.getElementById("modulEmpty");

    let currentFilter = "all";


    function filterModul() {

        const keyword =
            searchModul
                ? searchModul.value
                    .toLowerCase()
                    .trim()
                : "";

        let visibleCount = 0;

        modulCards.forEach(card => {

            const title =
                card.dataset.title
                    .toLowerCase();

            const semester =
                card.dataset.semester;

            const matchSearch =
                title.includes(keyword);

            const matchFilter =
                currentFilter === "all" ||
                semester === currentFilter;

            if (
                matchSearch &&
                matchFilter
            ) {

                card.style.display = "";
                visibleCount++;

            } else {

                card.style.display = "none";

            }

        });

        if (modulEmpty) {

            modulEmpty.style.display =
                visibleCount === 0
                    ? "block"
                    : "none";

        }
    }


    if (searchModul) {

        searchModul.addEventListener(
            "input",
            filterModul
        );

    }


    filterButtons.forEach(button => {

        button.addEventListener(
            "click",
            function () {

                filterButtons.forEach(btn => {

                    btn.classList.remove("active");

                });

                this.classList.add("active");

                currentFilter =
                    this.dataset.filter;

                filterModul();

            }
        );

    });

}


// ==========================================
// ESCAPE HTML
// ==========================================

function escapeHTML(value) {

    if (value === null || value === undefined) {
        return "";
    }

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


// ==========================================
// JALANKAN
// ==========================================

loadModul();
})()