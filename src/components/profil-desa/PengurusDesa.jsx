import { useSlideIn } from "@/hooks/useSlideIn";

const pengurus = [
  {
    nama: "Ahmad Fauzi",
    jabatan: "Kepala Desa",
    foto: "https://images.unsplash.com/photo-1603415526960-f7e0328d07d9?q=80&w=800&auto=format&fit=crop",
  },
  {
    nama: "Siti Aminah",
    jabatan: "Sekretaris Desa",
    foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
  },
  {
    nama: "Budi Santoso",
    jabatan: "Kaur Pemerintahan",
    foto: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2e?q=80&w=800&auto=format&fit=crop",
  },
  {
    nama: "Dewi Lestari",
    jabatan: "Kaur Keuangan",
    foto: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop",
  },
  {
    nama: "Rizky Pratama",
    jabatan: "Kaur Perencanaan",
    foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
  },
];

export default function PengurusDesa() {
  const title = useSlideIn("up");

  return (
    <section className="bg-slate-50 pt-6 pb-16">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        {/* Judul */}
        <h2
          ref={title.ref}
          className={`mb-8 text-center text-lg font-bold text-slate-800 md:text-3xl ${title.className}`}
          style={title.style}
        >
          Pengurus Desa
        </h2>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4">
            {pengurus.map((item, i) => (
              <div
                key={i}
                className="min-w-[160px] rounded-xl bg-white shadow-sm"
              >
                <img
                  src={item.foto}
                  alt={item.nama}
                  className="h-44 w-full rounded-t-xl object-cover"
                  loading="lazy"
                />
                <div className="p-3 text-center">
                  <p className="text-sm font-semibold text-slate-800">
                    {item.nama}
                  </p>
                  <p className="mt-1 text-xs text-blue-700">{item.jabatan}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-5 md:gap-6">
          {pengurus.map((item, i) => (
            <div
              key={i}
              className="rounded-xl bg-white shadow-sm transition hover:-translate-y-1"
            >
              <img
                src={item.foto}
                alt={item.nama}
                className="h-56 w-full rounded-t-xl object-cover"
                loading="lazy"
              />
              <div className="p-4 text-center">
                <p className="font-semibold text-slate-800">{item.nama}</p>
                <p className="mt-1 text-sm text-blue-700">{item.jabatan}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
