import { umkmData } from "@/data/umkm";
import UmkmCard from "./UmkmCard";
import { useSlideIn } from "@/hooks/useSlideIn";

export default function UmkmList() {
  const title = useSlideIn("up");

  // 🔥 ID TERBESAR DI DEPAN
  const sortedUmkm = [...umkmData].sort((a, b) => b.id - a.id);

  return (
    <section className="bg-slate-50 pt-6 pb-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div
          ref={title.ref}
          className={`mb-10 text-center ${title.className}`}
          style={title.style}
        >
          <h2 className="text-xl font-bold text-slate-800 md:text-3xl">
            UMKM Desa
          </h2>
          <p className="mt-2 text-sm text-slate-600 md:text-base">
            Daftar Usaha Mikro Kecil dan Menengah Desa
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedUmkm.map((item) => (
            <UmkmCard key={item.id} umkm={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
