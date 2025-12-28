import { potensiData } from "@/data/potensi";
import PotensiCard from "./PotensiCard";
import { useSlideIn } from "@/hooks/useSlideIn";

export default function PotensiList() {
  const title = useSlideIn("up");

  // 🔥 ID TERBESAR DI DEPAN
  const sortedPotensi = [...potensiData].sort((a, b) => b.id - a.id);

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
            Potensi Desa
          </h2>
          <p className="mt-2 text-sm text-slate-600 md:text-base">
            Daftar potensi unggulan yang dimiliki Desa
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedPotensi.map((item) => (
            <PotensiCard key={item.id} potensi={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
