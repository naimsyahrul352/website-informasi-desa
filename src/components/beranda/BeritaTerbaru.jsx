export default function BeritaTerbaru() {
  const berita = [
    {
      id: 1,
      judul: "Musyawarah Desa Penetapan Program Kerja 2025",
      tanggal: "12 Januari 2025",
      gambar:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      judul: "Penyaluran Bantuan Sosial Tahap I",
      tanggal: "5 Januari 2025",
      gambar:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      judul: "Gotong Royong Bersih Lingkungan Desa",
      tanggal: "28 Desember 2024",
      gambar:
        "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 md:px-6">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-base font-semibold text-slate-800 sm:text-lg md:text-2xl">
              Berita Terbaru
            </h2>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Informasi dan kegiatan desa
            </p>
          </div>

          <a
            href="/berita"
            className="hidden items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 md:flex"
          >
            Lihat Semua
            <i className="bi bi-arrow-right" />
          </a>
        </div>

        {/* MOBILE: Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 [-webkit-overflow-scrolling:touch]">
            {berita.map((item) => (
              <article
                key={item.id}
                className="min-w-[260px] overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm"
              >
                <img
                  src={item.gambar}
                  alt={item.judul}
                  className="h-36 w-full object-cover"
                  loading="lazy"
                />

                <div className="p-4">
                  <p className="mb-1 flex items-center gap-1 text-xs text-slate-500">
                    <i className="bi bi-calendar-event" />
                    {item.tanggal}
                  </p>

                  <h3 className="line-clamp-2 text-sm font-semibold text-slate-800">
                    {item.judul}
                  </h3>
                </div>
              </article>
            ))}
          </div>

          {/* Link mobile */}
          <div className="mt-4 text-center">
            <a
              href="/berita"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-600"
            >
              Lihat Semua Berita
              <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>

        {/* DESKTOP: Grid */}
        <div className="hidden gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
          {berita.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="overflow-hidden">
                <img
                  src={item.gambar}
                  alt={item.judul}
                  className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-5">
                <p className="mb-2 flex items-center gap-2 text-xs text-slate-500">
                  <i className="bi bi-calendar-event" />
                  {item.tanggal}
                </p>

                <h3 className="line-clamp-2 text-sm font-semibold text-slate-800">
                  {item.judul}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
