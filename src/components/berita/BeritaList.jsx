import { beritaData } from "@/data/berita";
import BeritaCard from "./BeritaCard";
import { useSlideIn } from "@/hooks/useSlideIn";

export default function BeritaList() {
  const title = useSlideIn("up");

  // 🔥 SORT: ID TERBESAR DI DEPAN
  const sortedBerita = [...beritaData].sort((a, b) => b.id - a.id);

  return (
    <section className="bg-slate-50 pt-6 pb-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        {/* JUDUL */}
        <div
          ref={title.ref}
          className={`mb-10 text-center ${title.className}`}
          style={title.style}
        >
          <h2 className="text-xl font-bold text-slate-800 md:text-3xl">
            Berita Desa
          </h2>
          <p className="mt-2 text-sm text-slate-600 md:text-base">
            Informasi dan kegiatan terbaru Pemerintah Desa
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedBerita.map((item) => (
            <BeritaCard key={item.id} berita={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
