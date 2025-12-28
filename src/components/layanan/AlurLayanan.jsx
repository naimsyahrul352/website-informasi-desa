import { useState } from "react";
import { useSlideIn } from "@/hooks/useSlideIn";

const dataLayanan = [
  {
    nama: "Pengurusan Surat Keterangan",
    alur: [
      "Datang ke Kantor Desa pada jam operasional",
      "Mengambil nomor antrean layanan",
      "Menyerahkan berkas persyaratan",
      "Verifikasi oleh petugas desa",
      "Surat diproses dan ditandatangani",
      "Surat dapat diambil di loket pelayanan",
    ],
  },
  {
    nama: "Pengurusan Administrasi Kependudukan",
    alur: [
      "Datang langsung ke Kantor Desa",
      "Membawa dokumen pendukung",
      "Pemeriksaan berkas oleh petugas",
      "Penginputan data",
      "Pengajuan diteruskan ke instansi terkait",
    ],
  },
  {
    nama: "Pengajuan Bantuan Sosial",
    alur: [
      "Konsultasi dengan petugas desa",
      "Pendataan calon penerima",
      "Verifikasi lapangan",
      "Penetapan penerima bantuan",
      "Penyaluran bantuan sesuai ketentuan",
    ],
  },
  {
    nama: "Pelayanan Pengaduan Masyarakat",
    alur: [
      "Datang ke Kantor Desa",
      "Menyampaikan pengaduan secara langsung",
      "Pencatatan pengaduan",
      "Tindak lanjut oleh pihak terkait",
      "Penyampaian hasil kepada masyarakat",
    ],
  },
];

export default function AlurLayanan() {
  const [active, setActive] = useState(0);
  const title = useSlideIn("up");

  return (
    <section className="bg-white pt-6 pb-16">
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        {/* Judul */}
        <h2
          ref={title.ref}
          className={`mb-4 text-center text-lg font-bold text-slate-800 md:text-3xl ${title.className}`}
          style={title.style}
        >
          Alur Pelayanan Desa
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-slate-600 md:text-base">
          Seluruh layanan desa dilaksanakan secara langsung (offline) di Kantor
          Desa sesuai dengan ketentuan yang berlaku.
        </p>

        {/* Accordion */}
        <div className="space-y-3">
          {dataLayanan.map((layanan, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-slate-200"
            >
              {/* Header */}
              <button
                onClick={() => setActive(active === index ? null : index)}
                className="flex w-full items-center justify-between bg-slate-50 px-4 py-3 text-left text-sm font-semibold text-slate-800 md:text-base"
              >
                {layanan.nama}
                <i
                  className={`bi bi-chevron-down transition-transform ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Content */}
              <div
                className={`transition-all duration-300 ${
                  active === index ? "max-h-96" : "max-h-0"
                } overflow-hidden`}
              >
                <ol className="list-decimal space-y-2 px-6 py-4 text-sm text-slate-700 md:text-base">
                  {layanan.alur.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
