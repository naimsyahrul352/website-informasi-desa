import { useSlideIn } from "@/hooks/useSlideIn";
import sejarah from "@/assets/img/sejarah.png";

export default function SejarahDesa() {
  const image = useSlideIn("up");
  const content = useSlideIn("up", 150);

  return (
    <section className="bg-white pt-6 pb-16">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        {/* Judul */}
        <h2 className="mb-8 text-center text-xl font-bold text-slate-800 md:text-3xl">
          Sejarah Desa
        </h2>

        {/* Foto Desa */}
        <div
          ref={image.ref}
          className={`overflow-hidden rounded-xl shadow-lg ${image.className}`}
          style={image.style}
        >
          <img
            src={sejarah}
            alt="Foto Desa"
            className="h-[220px] w-full object-cover md:h-[360px]"
            loading="lazy"
          />
        </div>

        {/* Konten */}
        <div
          ref={content.ref}
          className={`mt-8 text-justify text-sm leading-relaxed text-slate-700 md:text-base ${content.className}`}
          style={content.style}
        >
          <p className="mb-4">
            Desa Sukamaju merupakan salah satu desa yang memiliki perjalanan
            sejarah panjang dalam perkembangan pemerintahan dan kehidupan sosial
            masyarakatnya. Berdasarkan catatan para sesepuh desa, Sukamaju
            awalnya merupakan wilayah hutan dan lahan pertanian yang mulai
            dibuka oleh para pendatang pada awal abad ke-19.
          </p>

          <p className="mb-4">
            Seiring berjalannya waktu, wilayah ini berkembang menjadi sebuah
            permukiman tetap yang kemudian ditetapkan sebagai desa. Nama
            Sukamaju melambangkan harapan masyarakat agar desa ini senantiasa
            mengalami kemajuan dalam berbagai bidang kehidupan.
          </p>

          <p className="mb-4">
            Setelah kemerdekaan Republik Indonesia, Desa Sukamaju terus
            mengalami perubahan signifikan, mulai dari pembenahan sistem
            pemerintahan desa hingga pembangunan infrastruktur dan pelayanan
            publik.
          </p>

          <p>
            Hingga saat ini, Desa Sukamaju berkomitmen menjadi desa modern yang
            transparan, inovatif, dan tetap menjaga nilai budaya serta sejarah
            yang diwariskan oleh para pendahulu.
          </p>
        </div>
      </div>
    </section>
  );
}
