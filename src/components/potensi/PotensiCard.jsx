import { Link } from "react-router-dom";

export default function PotensiCard({ potensi }) {
  return (
    <Link
      to={`/potensi/${potensi.id}`}
      className="group overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      {/* IMAGE */}
      <div className="h-44 overflow-hidden">
        <img
          src={potensi.gambar}
          alt={potensi.nama}
          className="h-full w-full object-cover transition group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <p className="mb-1 flex items-center gap-1 text-xs text-slate-500">
          <i className="bi bi-geo-alt"></i>
          {potensi.alamat}
        </p>
        <h3 className="line-clamp-2 text-sm font-semibold text-slate-800">
          {potensi.nama}
        </h3>
      </div>
    </Link>
  );
}
