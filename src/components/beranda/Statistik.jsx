export default function Statistik() {
  const data = [
    {
      icon: "bi-people-fill",
      jumlah: "5.432",
      label: "Jumlah Penduduk",
    },
    {
      icon: "bi-person-fill",
      jumlah: "2.780",
      label: "Laki-laki",
    },
    {
      icon: "bi-person-fill",
      jumlah: "2.652",
      label: "Perempuan",
    },
    {
      icon: "bi-house-door-fill",
      jumlah: "1.487",
      label: "Kepala Keluarga",
    },
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-8 sm:px-10 md:px-6">
        {/* Judul */}
        <div className="mb-12 text-center">
          <h2 className="text-xl font-semibold text-slate-800 sm:text-2xl md:text-3xl">
            Administrasi Kependudukan
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Statistik Kependudukan Desa
          </p>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600" />
        </div>

        {/* Statistik */}
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <i className={`bi ${item.icon} text-2xl`} />
              </div>

              <p className="text-2xl font-bold text-slate-800">{item.jumlah}</p>

              <p className="mt-1 text-sm text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
