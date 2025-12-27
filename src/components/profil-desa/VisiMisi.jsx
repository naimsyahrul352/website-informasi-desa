import { useSlideIn } from "@/hooks/useSlideIn";

export default function VisiMisi() {
  const visi = useSlideIn("up");
  const misi = useSlideIn("up", 150);

  return (
    <section className="bg-white pt-6 pb-16">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        {/* Judul */}
        <h2 className="mb-8 text-center text-lg font-bold text-slate-800 sm:text-xl md:mb-10 md:text-3xl">
          Visi & Misi Desa
        </h2>

        {/* Grid: mobile tetap 2 kolom */}
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {/* Visi */}
          <div
            ref={visi.ref}
            className={`rounded-lg border border-slate-200 bg-slate-50 p-3 md:rounded-xl md:p-6 ${visi.className}`}
            style={visi.style}
          >
            <h3 className="mb-2 text-sm font-semibold text-blue-900 md:mb-4 md:text-lg">
              Visi
            </h3>
            <p className="text-justify text-xs leading-relaxed text-slate-700 md:text-base">
              Terwujudnya Desa Sukamaju sebagai desa yang maju, mandiri, dan
              sejahtera melalui tata kelola pemerintahan yang transparan,
              partisipatif, serta berbasis teknologi informasi dengan tetap
              menjunjung tinggi nilai budaya dan kearifan lokal.
            </p>
          </div>

          {/* Misi */}
          <div
            ref={misi.ref}
            className={`rounded-lg border border-slate-200 bg-slate-50 p-3 md:rounded-xl md:p-6 ${misi.className}`}
            style={misi.style}
          >
            <h3 className="mb-2 text-sm font-semibold text-blue-900 md:mb-4 md:text-lg">
              Misi
            </h3>
            <ul className="list-inside list-disc space-y-1 text-xs leading-relaxed text-slate-700 md:space-y-3 md:text-base">
              <li>Meningkatkan kualitas pelayanan publik.</li>
              <li>Mendorong partisipasi aktif masyarakat.</li>
              <li>Pengembangan UMKM dan potensi desa.</li>
              <li>Peningkatan SDM yang berdaya saing.</li>
              <li>Optimalisasi teknologi informasi.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
