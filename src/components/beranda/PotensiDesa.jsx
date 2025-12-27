export default function PotensiDesa() {
  const potensi = [
    {
      id: 1,
      judul: "Wisata Alam Bukit Hijau",
      gambar:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      judul: "Agrowisata Perkebunan Desa",
      gambar:
        "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      judul: "Kerajinan UMKM Lokal",
      gambar:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 md:px-6">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-base font-semibold text-slate-800 sm:text-lg md:text-2xl">
              Potensi Desa
            </h2>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Potensi unggulan yang dimiliki desa
            </p>
          </div>

          <a
            href="/potensi-desa"
            className="hidden items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 md:flex"
          >
            Lihat Semua
            <i className="bi bi-arrow-right" />
          </a>
        </div>

        {/* MOBILE — Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 [-webkit-overflow-scrolling:touch]">
            {potensi.map((item) => (
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
                  <h3 className="text-sm font-semibold text-slate-800">
                    {item.judul}
                  </h3>
                </div>
              </article>
            ))}
          </div>

          {/* Link mobile */}
          <div className="mt-4 text-center">
            <a
              href="/potensi-desa"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-600"
            >
              Lihat Semua Potensi
              <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>

        {/* DESKTOP — Grid */}
        <div className="hidden gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
          {potensi.map((item) => (
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
                <h3 className="text-sm font-semibold text-slate-800">
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
