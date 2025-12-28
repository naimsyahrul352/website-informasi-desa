import { useParams, useLocation, useNavigate } from "react-router-dom";
import { beritaData } from "@/data/berita";

export default function DetailBerita() {
  const { id } = useParams();
  const berita = beritaData.find((b) => b.id === Number(id));
  const location = useLocation();
  const navigate = useNavigate();

  if (!berita) {
    return (
      <p className="p-10 text-center text-slate-600">Berita tidak ditemukan</p>
    );
  }

  const shareWhatsapp = () => {
    const url = window.location.href;
    const text = `📰 *${berita.judul}*\n\nBaca selengkapnya di:\n${url}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleBack = () => {
    if (location.state?.from === "home") {
      // dari homepage, kembali ke posisi sebelumnya
      window.history.back();
    } else if (location.state?.from === "berita") {
      // dari halaman /berita, navigasi ke /berita dan scroll ke top
      navigate("/berita", { replace: true });
      window.scrollTo(0, 0);
    } else {
      // default fallback
      navigate(-1);
    }
  };

  return (
    <section className="bg-white pt-6 pb-20">
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        {/* ACTION BAR */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
          >
            <i className="bi bi-arrow-left"></i>
            Kembali
          </button>

          <button
            onClick={shareWhatsapp}
            className="inline-flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
          >
            <i className="bi bi-whatsapp"></i>
            Share
          </button>
        </div>

        {/* CONTENT */}
        <h1 className="mb-2 text-xl font-bold text-slate-800 md:text-3xl">
          {berita.judul}
        </h1>
        <p className="mb-6 text-sm text-slate-500">{berita.tanggal}</p>
        <img
          src={berita.gambar}
          alt={berita.judul}
          className="mb-6 w-full rounded-xl object-cover"
        />
        <p className="whitespace-pre-line text-justify text-sm leading-relaxed text-slate-700 md:text-base">
          {berita.isi}
        </p>
      </div>
    </section>
  );
}
