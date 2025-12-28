import { useParams, Link } from "react-router-dom";
import { potensiData } from "@/data/potensi";

export default function DetailPotensi() {
  const { id } = useParams();
  const potensi = potensiData.find((p) => p.id === Number(id));

  if (!potensi) {
    return (
      <p className="p-10 text-center text-slate-600">
        Data potensi tidak ditemukan
      </p>
    );
  }

  const shareWhatsapp = () => {
    const url = window.location.href;
    const text = `🌾 *${potensi.nama}*\n\nLokasi:\n${potensi.alamat}\n\n${url}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section className="bg-white pt-6 pb-20">
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        {/* ACTION */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            to="/potensi"
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
          {potensi.nama}
        </h1>

        <p className="mb-6 flex items-center gap-2 text-sm text-slate-500">
          <i className="bi bi-geo-alt"></i>
          {potensi.alamat}
        </p>

        <img
          src={potensi.gambar}
          alt={potensi.nama}
          className="mb-6 w-full rounded-xl object-cover"
        />

        <p className="whitespace-pre-line text-justify text-sm leading-relaxed text-slate-700 md:text-base">
          {potensi.deskripsi}
        </p>
      </div>
    </section>
  );
}
