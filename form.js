document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("pendaftaranEkskul");
    const submitBtn = form.querySelector(".submit-btn-neon");

    form.addEventListener("submit", function (e) {
        // 1. Mengambil nilai input
        const nisn = document.getElementById("nisn").value;
        const whatsapp = document.getElementById("whatsapp").value;

        // 2. Validasi NISN (Harus tepat 10 digit angka)
        if (nisn.length !== 10) {
            e.preventDefault(); // Batalkan pengiriman form
            alert("⚠️ Waduh, NISN harus tepat 10 digit ya!");
            return;
        }

        // 3. Validasi Nomor WhatsApp (Minimal 10 digit, maksimal 13 digit)
        if (whatsapp.length < 10 || whatsapp.length > 13) {
            e.preventDefault();
            alert("⚠️ Pastikan nomor WhatsApp kamu sudah benar (10-13 digit)!");
            return;
        }

        // 4. INTERACTIVE BACKEND LOADING STATE
        // Jika validasi lolos, ubah tampilan tombol sebelum data terkirim ke server
        submitBtn.disabled = true;
        submitBtn.style.background = "#555";
        submitBtn.style.boxShadow = "none";
        submitBtn.innerHTML = `<span class="spinner"></span> Mengirim Data...`;
    });
});