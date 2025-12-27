export default function UMKMDesa() {
  const umkm = [
    {
      id: 1,
      nama: "UMKM Keripik Singkong",
      produk: "Keripik Singkong Original",
      gambar:
        "https://images.unsplash.com/photo-1585238342028-4e65b41f8b7c?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      nama: "UMKM Kopi Desa",
      produk: "Kopi Robusta Bubuk",
      gambar:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      nama: "UMKM Anyaman Bambu",
      produk: "Keranjang Anyaman",
      gambar:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e748c?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 md:px-6">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-base font-semibold text-slate-800 sm:text-lg md:text-2xl">
              Promosi UMKM Desa
            </h2>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Produk unggulan UMKM desa
            </p>
          </div>

          <a
            href="/umkm"
            className="hidden items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 md:flex"
          >
            Lihat Semua
            <i className="bi bi-arrow-right" />
          </a>
        </div>

        {/* MOBILE — Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 [-webkit-overflow-scrolling:touch]">
            {umkm.map((item) => (
              <article
                key={item.id}
                className="min-w-[260px] overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm"
              >
                <img
                  src={item.gambar}
                  alt={item.produk}
                  className="h-36 w-full object-cover"
                  loading="lazy"
                />

                <div className="p-4">
                  <h3 className="text-sm font-semibold text-slate-800">
                    {item.produk}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">{item.nama}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Link mobile */}
          <div className="mt-4 text-center">
            <a
              href="/umkm"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-600"
            >
              Lihat Semua UMKM
              <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>

        {/* DESKTOP — Grid */}
        <div className="hidden gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
          {umkm.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="overflow-hidden">
                <img
                  src={item.gambar}
                  alt={item.produk}
                  className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-5">
                <h3 className="text-sm font-semibold text-slate-800">
                  {item.produk}
                </h3>
                <p className="mt-1 text-xs text-slate-500">{item.nama}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
