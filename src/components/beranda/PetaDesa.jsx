export default function PetaDesa() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 md:px-6">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-base font-semibold text-slate-800 sm:text-lg md:text-2xl">
            Peta Lokasi Desa
          </h2>
          <p className="mt-2 text-xs text-slate-500 sm:text-sm">
            Lokasi Desa Sukamaju, Kecamatan Kabor, Kabupaten Bojonegoro
          </p>
          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-blue-600" />
        </div>

        {/* Map Container */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <iframe
            title="Peta Lokasi Desa"
            src="https://www.google.com/maps?q=Bojonegoro,Jawa%20Timur&output=embed"
            className="h-[280px] w-full sm:h-[360px] md:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
