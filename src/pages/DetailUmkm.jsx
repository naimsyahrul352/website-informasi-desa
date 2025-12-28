import { useParams, Link } from "react-router-dom";
import { umkmData } from "@/data/umkm";

export default function DetailUmkm() {
  const { id } = useParams();
  const umkm = umkmData.find((u) => u.id === Number(id));

  if (!umkm) {
    return (
      <p className="p-10 text-center text-slate-600">
        Data UMKM tidak ditemukan
      </p>
    );
  }

  const shareWhatsapp = () => {
    const url = window.location.href;
    const text = `🏪 *${umkm.nama}*\n\nAlamat:\n${umkm.alamat}\n\nLihat detail:\n${url}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section className="bg-white pt-6 pb-20">
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        {/* ACTION */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            to="/umkm"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
          >
            <i className="bi bi-arrow-left"></i>
            Kembali
          </Link>

          <button
            onClick={shareWhatsapp}
            className="inline-flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
          >
            <i className="bi bi-whatsapp"></i>
            Share
          </button>
        </div>

        <h1 className="mb-2 text-xl font-bold text-slate-800 md:text-3xl">
          {umkm.nama}
        </h1>

        <p className="mb-6 flex items-center gap-2 text-sm text-slate-500">
          <i className="bi bi-geo-alt"></i>
          {umkm.alamat}
        </p>

        <img
          src={umkm.gambar}
          alt={umkm.nama}
          className="mb-6 w-full rounded-xl object-cover"
        />

        <p className="mb-8 whitespace-pre-line text-justify text-sm leading-relaxed text-slate-700 md:text-base">
          {umkm.deskripsi}
        </p>

        {/* PRODUK */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-slate-800">
            Produk yang Dijual
          </h3>

          <ul className="space-y-3">
            {umkm.produk.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 text-sm"
              >
                <span className="font-medium text-slate-700">{item.nama}</span>
                <span className="font-semibold text-blue-600">
                  {item.harga}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
