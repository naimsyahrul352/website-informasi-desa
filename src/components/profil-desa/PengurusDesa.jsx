import { useSlideIn } from "@/hooks/useSlideIn";
import orang1 from "@/assets/img/orang1.png";
import orang2 from "@/assets/img/orang2.png";
import orang3 from "@/assets/img/orang3.png";
import orang4 from "@/assets/img/orang4.png";

const pengurus = [
  {
    nama: "Ahmad Fauzi",
    jabatan: "Kepala Desa",
    foto: orang1,
  },
  {
    nama: "Siti Aminah",
    jabatan: "Sekretaris Desa",
    foto: orang4,
  },
  {
    nama: "Budi Santoso",
    jabatan: "Kaur Pemerintahan",
    foto: orang2,
  },
  {
    nama: "Dewi Lestari",
    jabatan: "Kaur Keuangan",
    foto: orang4,
  },
  {
    nama: "Rizky Pratama",
    jabatan: "Kaur Perencanaan",
    foto: orang3,
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
