import { Link } from "react-router-dom";

export default function UmkmCard({ umkm }) {
  return (
    <Link
      to={`/umkm/${umkm.id}`}
      className="group overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="h-44 overflow-hidden">
        <img
          src={umkm.gambar}
          alt={umkm.nama}
          className="h-full w-full object-cover transition group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <p className="mb-1 flex items-center gap-1 text-xs text-slate-500">
          <i className="bi bi-geo-alt"></i>
          {umkm.alamat}
        </p>
        <h3 className="line-clamp-2 text-sm font-semibold text-slate-800">
          {umkm.nama}
        </h3>
      </div>
    </Link>
  );
}
