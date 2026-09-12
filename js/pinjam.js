/* ==========================================
PEMINJAMAN ALAT
========================================== */

/* ==========================================
TAMBAH ALAT
========================================== */

function tambahAlat() {

const container =
    document.getElementById("alat-container");

// Jika halaman bukan form peminjaman alat
if (!container) {
    return;
}

const row =
    document.createElement("div");

row.className =
    "item-row alat-row";

row.innerHTML = `

    <div class="form-group">

        <label>
            Nama Alat
        </label>

            <div class="alat-select-wrapper">

                <input
                    type="text"
                    class="alat-select-display"
                    placeholder="Pilih alat"
                    autocomplete="off"
                    readonly>

                <input
                    type="hidden"
                    class="alat-select">

                <i class="bi bi-chevron-down alat-select-icon"></i>

                <div class="alat-dropdown">

                    <div class="alat-search-wrapper">

                        <i class="bi bi-search"></i>

                        <input
                            type="text"
                            class="alat-filter-input"
                            placeholder="Cari alat..."
                            autocomplete="off">

                    </div>

                    <div class="alat-options"></div>

                </div>

            </div>

    </div>


    <div class="form-group jumlah-group">

        <label>
            Jumlah
        </label>

        <input
            type="number"
            class="alat-jumlah"
            min="1"
            value="1"
            required>

    </div>


    <button
        type="button"
        class="btn-remove"
        onclick="hapusItem(this)"
        title="Hapus">

        <i class="bi bi-trash"></i>

    </button>

`;

container.prepend(row);

}

/* ==========================================
TAMBAH KOMPONEN
========================================== */

function tambahKomponen() {

const container =
    document.getElementById(
        "komponen-container"
    );

// Jika halaman bukan form peminjaman
if (!container) {
    return;
}

const row =
    document.createElement("div");

row.className =
    "item-row komponen-row";

row.innerHTML = `

    <div class="form-group">

        <label>
            Nama / Jenis Komponen
        </label>

        <input
            type="text"
            class="komponen-nama"
            placeholder="Contoh: Resistor 1 kΩ"
            required>

    </div>


    <div class="form-group jumlah-group">

        <label>
            Jumlah
        </label>

        <input
            type="number"
            class="komponen-jumlah"
            min="1"
            value="1"
            required>

    </div>


    <button
        type="button"
        class="btn-remove"
        onclick="hapusItem(this)"
        title="Hapus">

        <i class="bi bi-trash"></i>

    </button>

`;

container.prepend(row);

}

/* ==========================================
HAPUS ITEM
========================================== */

function hapusItem(button) {

if (!button) {
    return;
}

const row =
    button.closest(".item-row");

if (row) {
    row.remove();
}

}

/* ==========================================
KEPELUAN PEMINJAMAN
========================================== */

function ubahKeperluan() {

const container =
    document.getElementById(
        "detail-keperluan"
    );

// Jika halaman bukan form peminjaman
if (!container) {
    return;
}

const pilihan =
    document.querySelector(
        'input[name="keperluan"]:checked'
    );


if (!pilihan) {

    container.innerHTML = "";

    return;

}


/* ======================================
   PRAKTIKUM
====================================== */

if (pilihan.value === "Praktikum") {

    container.innerHTML = `

        <div class="form-group">

            <label>
                Nama Praktikum
            </label>

            <select
                id="nama-praktikum"
                required>

                <option value="">
                    Pilih praktikum
                </option>

                <option value="Praktikum Elektronika Diskrit">
                    Praktikum Elektronika Diskrit
                </option>

                <option value="Praktikum Rangkaian Listrik">
                    Praktikum Rangkaian Listrik
                </option>

                <option value="Praktikum Fisika">
                    Praktikum Fisika
                </option>

                <option value="Praktikum Bahasa Pemrograman">
                    Praktikum Bahasa Pemrograman
                </option>
                <option value="Praktikum Teknik Tenaga Listrik">
                    Praktikum Teknik Tenaga Listrik
                </option>
                <option value="Praktikum Elektronika Terintegrasi">
                    Praktikum Elektronika Terintegrasi
                </option>
                <option value="Praktikum Mikrokontroler">
                    Praktikum Mikrokontroler
                </option>
                <option value="Praktikum Elektronika Terapan">
                    Praktikum Elektronika Terapan
                </option>
                <option value="Praktikum Pengantar sistem cerdas">
                    Praktikum Pengantar sistem cerdas
                </option>
                <option value="Praktikum Teknik Tenaga Listrik">
                    Praktikum Teknik Tenaga Listrik
                </option>
                <option value="Praktikum Peralatan Diagnostik">
                    Praktikum Peralatan Diagnostik
                </option>
                <option value="Praktikum Peralatan Lab Klinik">
                    Praktikum Peralatan Lab Klinik
                </option>
                <option value="Praktikum Lainnya">
                    Lainnya
                </option>

            </select>

        </div>

    `;

}


/* ======================================
   PENELITIAN
====================================== */

else if (pilihan.value === "Penelitian") {

    container.innerHTML = `

        <div class="form-group">

            <label>
                Deskripsi Penelitian
            </label>

            <textarea
                id="deskripsi-penelitian"
                rows="4"
                placeholder="Tuliskan deskripsi singkat penelitian..."
                required>
            </textarea>

        </div>

    `;

}


/* ======================================
   LAINNYA
====================================== */

else if (pilihan.value === "Lainnya") {

    container.innerHTML = `

        <div class="form-group">

            <label>
                Deskripsi Kegunaan
            </label>

            <textarea
                id="deskripsi-lainnya"
                rows="4"
                placeholder="Tuliskan kegunaan alat..."
                required>
            </textarea>

        </div>

    `;

}

}

/* ==========================================
SUBMIT PEMINJAMAN
========================================== */

function submitPeminjaman() {

    const namaElement =
        document.getElementById("nama");

    const nimElement =
        document.getElementById("nim");

    const tanggalElement =
        document.getElementById("tanggal-pinjam");


    const nama =
        namaElement
            ? namaElement.value.trim()
            : "";

    const nim =
        nimElement
            ? nimElement.value.trim()
            : "";

    const tanggalPinjam =
        tanggalElement
            ? tanggalElement.value
            : "";


    /* ======================================
       VALIDASI DATA PEMINJAM
    ====================================== */

    if (!nama || !nim || !tanggalPinjam) {

        tampilkanPesan(
            "Mohon lengkapi data peminjam dan tanggal peminjaman.",
            "error"
        );

        return;
    }


    /* ======================================
       AMBIL ALAT
    ====================================== */

    const alat = [];


    document
        .querySelectorAll(".alat-row")
        .forEach(row => {

            const select =
                row.querySelector(".alat-select");

            const jumlahInput =
                row.querySelector(".alat-jumlah");


            const namaAlat =
                select
                    ? select.value
                    : "";


            const jumlah =
                jumlahInput
                    ? Number(jumlahInput.value)
                    : 0;


            if (namaAlat) {

                alat.push({

                    nama: namaAlat,

                    jumlah: jumlah

                });

            }

        });

    /* ======================================
       AMBIL KOMPONEN
    ====================================== */

    const komponen = [];


    document
        .querySelectorAll(".komponen-row")
        .forEach(row => {

            const namaInput =
                row.querySelector(".komponen-nama");

            const jumlahInput =
                row.querySelector(".komponen-jumlah");


            const namaKomponen =
                namaInput
                    ? namaInput.value.trim()
                    : "";


            const jumlah =
                jumlahInput
                    ? Number(jumlahInput.value)
                    : 0;


            if (namaKomponen) {

                komponen.push({

                    nama: namaKomponen,

                    jumlah: jumlah

                });

            }

        });

        if (alat.length === 0 && komponen.length === 0) {

        tampilkanPesan(
            "Minimal pilih satu alat/komponen.",
            "error"
        );

        return;
    }


    /* ======================================
       KEPELUAN
    ====================================== */

    const pilihan =
        document.querySelector(
            'input[name="keperluan"]:checked'
        );


    if (!pilihan) {

        tampilkanPesan(
            "Silakan pilih keperluan peminjaman.",
            "error"
        );

        return;
    }


    let detailKeperluan = "";


    /* ======================================
       PRAKTIKUM
    ====================================== */

    if (pilihan.value === "Praktikum") {

        const praktikum =
            document.getElementById(
                "nama-praktikum"
            );


        if (!praktikum || !praktikum.value) {

            tampilkanPesan(
                "Silakan pilih nama praktikum.",
                "error"
            );

            return;
        }


        detailKeperluan =
            praktikum.value;

    }


    /* ======================================
       PENELITIAN
    ====================================== */

    else if (pilihan.value === "Penelitian") {

        const penelitian =
            document.getElementById(
                "deskripsi-penelitian"
            );


        if (
            !penelitian ||
            !penelitian.value.trim()
        ) {

            tampilkanPesan(
                "Silakan isi deskripsi penelitian.",
                "error"
            );

            return;
        }


        detailKeperluan =
            penelitian.value.trim();

    }


    /* ======================================
       LAINNYA
    ====================================== */

    else if (pilihan.value === "Lainnya") {

        const lainnya =
            document.getElementById(
                "deskripsi-lainnya"
            );


        if (
            !lainnya ||
            !lainnya.value.trim()
        ) {

            tampilkanPesan(
                "Silakan isi deskripsi kegunaan.",
                "error"
            );

            return;
        }


        detailKeperluan =
            lainnya.value.trim();

    }


    /* ======================================
       DATA FINAL
    ====================================== */

    const data = {

        nama: nama,

        nim: nim,

        alat: alat,

        komponen: komponen,

        keperluan: pilihan.value,

        detailKeperluan: detailKeperluan,

        tanggalPinjam: tanggalPinjam,

        status: "Menunggu"

    };


    console.log(
        "DATA YANG DIKIRIM:",
        data
    );


    /* ======================================
       TAMPILKAN MODAL LOADING
    ====================================== */

    tampilkanModalPeminjaman(
        "loading"
    );


    /* ======================================
       KIRIM KE GOOGLE APPS SCRIPT
    ====================================== */

    fetch("https://script.google.com/macros/s/AKfycbzPA9TFqv0wT4bU73jop9Tvzh3flABBkC-8oFXQkJFZ9k5d2XtEbdBtiWRNx1m8G_S0yQ/exec", {

        method: "POST",

        body: JSON.stringify(data)

    })

    .then(response => {

        return response.json();

    })

    .then(result => {

        console.log(
            "RESPON APPS SCRIPT:",
            result
        );


        if (result.success) {

            tampilkanModalPeminjaman(
                "success"
            );

        } else {

            tampilkanModalPeminjaman(
                "error",
                result.message
            );

        }

    })

    .catch(error => {

        console.error(
            "ERROR:",
            error
        );


        tampilkanModalPeminjaman(
            "error",
            "Gagal mengirim data ke server."
        );

    });

}

function tampilkanModalPeminjaman(
    tipe,
    pesanError = ""
) {

    let modal =
        document.getElementById(
            "modal-peminjaman"
        );


    /* ======================================
       BUAT MODAL JIKA BELUM ADA
    ====================================== */

    if (!modal) {

        modal =
            document.createElement("div");

        modal.id =
            "modal-peminjaman";

        document.body.appendChild(modal);

    }


    /* ======================================
       LOADING
    ====================================== */

    if (tipe === "loading") {

        modal.innerHTML = `

            <div class="modal-peminjaman-overlay">

                <div class="modal-peminjaman-box">

                    <div class="modal-loading">

                        <div class="spinner-peminjaman"></div>

                    </div>

                    <h3>Mengajukan...</h3>

                    <p>
                        Data peminjaman sedang dikirim.
                    </p>

                </div>

            </div>

        `;

    }


    /* ======================================
       BERHASIL
    ====================================== */

    else if (tipe === "success") {

        modal.innerHTML = `

            <div class="modal-peminjaman-overlay">

                <div class="modal-peminjaman-box">

                    <div class="success-icon-peminjaman">

                        <i class="bi bi-check-lg"></i>

                    </div>

                    <h3>Sudah Diajukan</h3>

                    <p>
                        Pengajuan peminjaman berhasil dikirim.
                    </p>
                    <button
                        type="button"
                        onclick="kembaliModalPeminjaman()">

                        Tutup

                    </button>

                </div>

            </div>

        `;
    }


    /* ======================================
       ERROR
    ====================================== */

    else {

        modal.innerHTML = `

            <div class="modal-peminjaman-overlay">

                <div class="modal-peminjaman-box">

                    <div class="error-icon-peminjaman">

                        <i class="bi bi-exclamation-lg"></i>

                    </div>

                    <h3>Gagal Mengajukan</h3>

                    <p>
                        ${pesanError || "Terjadi kesalahan."}
                    </p>

                    <button
                        type="button"
                        onclick="tutupModalPeminjaman()">

                        Tutup

                    </button>

                </div>

            </div>

        `;

    }

}
function tutupModalPeminjaman() {

    const modal =
        document.getElementById(
            "modal-peminjaman"
        );

    if (modal) {

        modal.remove();
    }

}
function kembaliModalPeminjaman() {

    const modal =
        document.getElementById(
            "modal-peminjaman"
        );


    if (modal) {

        modal.remove();

    }
    window.location.hash ="#pinjam/pinjam_alat";

}

/* ==========================================
PESAN
========================================== */

function tampilkanPesan(
pesan,
tipe
) {

const element =
    document.getElementById(
        "form-message"
    );


if (!element) {
    return;
}


element.className =
    "form-message " + tipe;


element.innerHTML = `

    <i class="bi ${
        tipe === "success"
            ? "bi-check-circle"
            : "bi-exclamation-circle"
    }"></i>

    ${pesan}

`;

}

/* ==========================================
   DAFTAR ALAT
========================================== */

const daftarAlat = [
    "AVO/Multimeter",
    "Oscilloscope",
    "Function Generator",
    "Power Supply",
    "Tools Kit",
    "Panel Surya",
    "LCR Meter",
    "Eart Tester",
    "Relay Omron",
    "Timer",
    "MCB",
    "Solder",
    "Attractor",
    "Stand Solder",
    "Centrifuge",
    "Magnetic Stirrer",
    "Mikroskop",
];


/* ==========================================
   TAMPILKAN DAFTAR ALAT
========================================== */

function tampilkanDaftarAlat(wrapper, keyword = "") {

    const options =
        wrapper.querySelector(".alat-options");

    if (!options) {
        return;
    }

    options.innerHTML = "";

    const hasil =
        daftarAlat.filter(alat =>
            alat.toLowerCase()
                .includes(keyword.toLowerCase())
        );


    if (hasil.length === 0) {

        options.innerHTML = `
            <div class="alat-tidak-ditemukan">
                Alat tidak ditemukan
            </div>
        `;

        return;
    }


    hasil.forEach(alat => {

        const option =
            document.createElement("div");

        option.className =
            "alat-option";

        option.textContent =
            alat;


        option.addEventListener(
            "mousedown",
            function () {

                const display =
                    wrapper.querySelector(
                        ".alat-select-display"
                    );

                const hidden =
                    wrapper.querySelector(
                        ".alat-select"
                    );

                const filter =
                    wrapper.querySelector(
                        ".alat-filter-input"
                    );


                display.value =
                    alat;

                hidden.value =
                    alat;

                filter.value =
                    "";

                wrapper
                    .classList
                    .remove("open");

            }
        );


        options.appendChild(option);

    });

}


/* ==========================================
   KLIK PILIH ALAT
========================================== */

document.addEventListener(
    "click",
    function (event) {

        const display =
            event.target.closest(
                ".alat-select-display"
            );


        /* ----------------------------------
           KLIK KOLOM ALAT
        ---------------------------------- */

        if (display) {

            const wrapper =
                display.closest(
                    ".alat-select-wrapper"
                );


            /* Tutup dropdown lainnya */

            document
                .querySelectorAll(
                    ".alat-select-wrapper.open"
                )
                .forEach(item => {

                    if (item !== wrapper) {

                        item.classList.remove("open");

                    }

                });


            wrapper.classList.add("open");


            const filter =
                wrapper.querySelector(
                    ".alat-filter-input"
                );


            tampilkanDaftarAlat(
                wrapper,
                ""
            );


            setTimeout(() => {

                filter.focus();

            }, 10);


            return;

        }


        /* ----------------------------------
           KLIK DI LUAR
        ---------------------------------- */

        if (
            !event.target.closest(
                ".alat-select-wrapper"
            )
        ) {

            document
                .querySelectorAll(
                    ".alat-select-wrapper.open"
                )
                .forEach(wrapper => {

                    wrapper.classList.remove(
                        "open"
                    );

                });

        }

    }
);


/* ==========================================
   FILTER PENCARIAN
========================================== */

document.addEventListener(
    "input",
    function (event) {

        if (
            !event.target.classList.contains(
                "alat-filter-input"
            )
        ) {

            return;

        }


        const wrapper =
            event.target.closest(
                ".alat-select-wrapper"
            );


        if (!wrapper) {
            return;
        }


        tampilkanDaftarAlat(
            wrapper,
            event.target.value
        );

    }
);

function ambilAlatSedangDipinjam() {

    const container = document.getElementById("alat-list");

    if (!container) return;

    fetch("https://script.google.com/macros/s/AKfycbzPA9TFqv0wT4bU73jop9Tvzh3flABBkC-8oFXQkJFZ9k5d2XtEbdBtiWRNx1m8G_S0yQ/exec")
        .then(response => response.json())
        .then(result => {

            if (!result.success) {
                throw new Error(result.message);
            }

            tampilkanAlatDipinjam(result.data);

        })
        .catch(error => {

            console.error("Gagal mengambil data alat:", error);

            container.innerHTML = `
                <p>Gagal memuat data alat.</p>
            `;

        });
}


function tampilkanAlatDipinjam(data) {

    const container = document.getElementById("alat-list");

    if (!container) return;

    container.innerHTML = "";

    if (!data || data.length === 0) {

        container.innerHTML = `
            <p>Tidak ada alat yang sedang dipinjam.</p>
        `;

        return;
    }

    data.forEach(function(item) {

        const card = document.createElement("div");

        card.className = "alat-card";

        card.innerHTML = `
            <div class="alat-info">

                <h3>${item.namaAlat}</h3>

                <div class="alat-detail">
                    <span>
                        <i class="bi bi-person"></i>
                        Nama Peminjam
                    </span>
                    <strong>${item.nama}</strong>
                </div>

                <div class="alat-detail">
                    <span>
                        <i class="bi bi-box"></i>
                        Jumlah
                    </span>
                    <strong>${item.jumlah}</strong>
                </div>

                <div class="alat-detail">
                    <span>
                        <i class="bi bi-calendar3"></i>
                        Tanggal Pinjam
                    </span>
                    <strong>${item.tanggalPinjam}</strong>
                </div>

            </div>

            <div class="alat-status">
                <span class="${item.status === "Menunggu" ? "status-menunggu" : "status-dipinjam"}">
                    ${item.status === "Menunggu" ? "Menunggu Konfirmasi" : "Sedang Dipinjam"}
                </span>
            </div>
        `;

        container.appendChild(card);

    });
}

window.addEventListener("hashchange", function () {

    if (location.hash === "#pinjam/pinjam_alat") {

        setTimeout(function () {
            ambilAlatSedangDipinjam();
        }, 100);

    }

});


// Jalankan juga saat pinjam.js pertama kali dimuat

if (location.hash === "#pinjam/pinjam_alat") {

    setTimeout(function () {
        ambilAlatSedangDipinjam();
    }, 100);

}