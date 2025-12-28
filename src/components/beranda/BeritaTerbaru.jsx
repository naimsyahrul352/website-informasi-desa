import { Link } from "react-router-dom";
import { beritaData } from "@/data/berita";

export default function BeritaTerbaru() {
  const latestBerita = [...beritaData].sort((a, b) => b.id - a.id).slice(0, 3);

  return (
    <section id="berita-terbaru" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 md:px-6">
        {/* MOBILE: Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 [-webkit-overflow-scrolling:touch]">
            {latestBerita.map((item) => (
              <article
                key={item.id}
                className="min-w-[260px] overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm"
              >
                <Link
                  to={`/berita/${item.id}`}
                  state={{ from: "home" }}
                  className="block"
                >
                  <img
                    src={item.gambar}
                    alt={item.judul}
                    className="h-36 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-slate-800 line-clamp-2">
                      {item.judul}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                      {item.tanggal}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>

        {/* DESKTOP: Grid */}
        <div className="hidden gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
          {latestBerita.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm"
            >
              <Link
                to={`/berita/${item.id}`}
                state={{ from: "home" }}
                className="block"
              >
                <img
                  src={item.gambar}
                  alt={item.judul}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-slate-800 line-clamp-2">
                    {item.judul}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">{item.tanggal}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
