import { Link } from "react-router-dom";
import { beritaData } from "@/data/berita";

export default function BeritaTerbaru() {
  // ambil 3 berita terbaru
  const latestBerita = [...beritaData].sort((a, b) => b.id - a.id).slice(0, 3);

  return (
    <section id="berita-terbaru" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 md:px-6">
        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestBerita.map((item) => (
            <article key={item.id}>
              <Link
                to={`/berita/${item.id}`}
                state={{ from: "home" }} // <-- kirim state asal
                className="block rounded-xl overflow-hidden border border-slate-100 shadow-sm"
              >
                <img
                  src={item.gambar}
                  alt={item.judul}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-slate-800">
                    {item.judul}
                  </h3>
                  <p className="text-xs text-slate-500">{item.tanggal}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
