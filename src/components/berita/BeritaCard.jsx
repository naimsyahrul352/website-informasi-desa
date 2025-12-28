import { Link } from "react-router-dom";

export default function BeritaCard({ berita }) {
  return (
    <Link
      to={`/berita/${berita.id}`}
      className="group overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      {/* IMAGE */}
      <div className="h-44 overflow-hidden">
        <img
          src={berita.gambar}
          alt={berita.judul}
          className="h-full w-full object-cover transition group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <p className="mb-1 text-xs text-slate-500">{berita.tanggal}</p>
        <h3 className="line-clamp-2 text-sm font-semibold text-slate-800">
          {berita.judul}
        </h3>
      </div>
    </Link>
  );
}
