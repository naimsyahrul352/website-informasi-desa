import { useState } from "react";
import { useSlideIn } from "@/hooks/useSlideIn";

export default function FormPengaduan() {
  const title = useSlideIn("up", 100);

  const [form, setForm] = useState({
    nama: "",
    telepon: "",
    kategori: "",
    pengaduan: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nama || !form.telepon || !form.kategori || !form.pengaduan) {
      alert("Mohon lengkapi seluruh data wajib.");
      return;
    }

    const nomorAdmin = "6281234567890"; // GANTI
    const pesan = `
📢 *PENGADUAN MASYARAKAT*

👤 Nama: ${form.nama}
📞 No HP: ${form.telepon}
📂 Kategori: ${form.kategori}

📝 Isi Pengaduan:
${form.pengaduan}
    `;

    window.open(
      `https://wa.me/${nomorAdmin}?text=${encodeURIComponent(pesan)}`,
      "_blank"
    );
  };

  return (
    <section className="bg-slate-50 pt-6 pb-20">
      <div className="mx-auto max-w-3xl px-6 sm:px-10">
        {/* HEADER */}
        <div
          ref={title.ref}
          className={`mb-8 text-center ${title.className}`}
          style={title.style}
        >
          <h2 className="text-xl font-bold text-slate-800 md:text-3xl">
            Pengaduan Masyarakat
          </h2>
          <p className="mt-2 text-sm text-slate-600 md:text-base">
            Sampaikan keluhan atau aspirasi Anda kepada Pemerintah Desa
          </p>
        </div>

        {/* FORM CARD */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-6 shadow-md md:p-8"
        >
          <div className="space-y-5">
            {/* NAMA */}
            <Field
              label="Nama Lengkap"
              required
              name="nama"
              value={form.nama}
              onChange={handleChange}
              placeholder="Nama sesuai identitas"
            />

            {/* TELEPON */}
            <Field
              label="Nomor Telepon / WhatsApp"
              required
              name="telepon"
              value={form.telepon}
              onChange={handleChange}
              placeholder="08xxxxxxxxxx"
            />

            {/* KATEGORI */}
            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">
                Kategori Pengaduan <span className="text-red-500">*</span>
              </label>
              <select
                name="kategori"
                value={form.kategori}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
              >
                <option value="">Pilih kategori</option>
                <option>Pelayanan Desa</option>
                <option>Infrastruktur</option>
                <option>Administrasi</option>
                <option>Keamanan & Ketertiban</option>
                <option>Lainnya</option>
              </select>
            </div>

            {/* ISI */}
            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">
                Isi Pengaduan <span className="text-red-500">*</span>
              </label>
              <textarea
                name="pengaduan"
                value={form.pengaduan}
                onChange={handleChange}
                rows="4"
                required
                className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
                placeholder="Tuliskan pengaduan secara jelas dan singkat"
              />
            </div>
          </div>

          {/* INFO */}
          <p className="mt-6 text-center text-xs text-slate-500">
            Pengaduan akan dikirim ke WhatsApp resmi Desa
          </p>

          {/* BUTTON */}
          <button
            type="submit"
            className="group mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <i className="bi bi-whatsapp text-lg"></i>
            Kirim Pengaduan
          </button>
        </form>
      </div>
    </section>
  );
}

/* ====== COMPONENT FIELD ====== */
function Field({ label, required, ...props }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-semibold text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        {...props}
        required={required}
        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
}
