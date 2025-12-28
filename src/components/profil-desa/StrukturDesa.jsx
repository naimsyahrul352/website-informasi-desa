import { useSlideIn } from "@/hooks/useSlideIn";
import struktur from "@/assets/img/struktur.png";

export default function StrukturDesa() {
  const image = useSlideIn("up");

  return (
    <section className="bg-slate-50 pt-6 pb-16">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        {/* Judul */}
        <h2 className="mb-8 text-center text-xl font-bold text-slate-800 md:text-3xl">
          Struktur Organisasi Desa
        </h2>

        {/* Foto Struktur */}
        <div
          ref={image.ref}
          className={`overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm ${image.className}`}
          style={image.style}
        >
          <img
            src={struktur}
            alt="Struktur Pengurus Desa"
            className="w-full object-contain"
            loading="lazy"
          />
        </div>

        {/* Keterangan */}
        <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-slate-600 md:text-base">
          Struktur organisasi pemerintahan Desa Sukamaju yang menunjukkan
          susunan kepengurusan dan pembagian tugas dalam menjalankan roda
          pemerintahan desa.
        </p>
      </div>
    </section>
  );
}
