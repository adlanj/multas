"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import NewTemplateForm from "../components/NewTemplateForm";

type PlantillaDB = {
  id: number;
  cuenta_bancaria: string;
  subproducto: string;
  url: string;
  creado_en?: string;
};

type PlantillaUI = {
  id: number;
  numero_cuenta: string;
  subproducto: string;
  imagen_url: string;
  creado_en?: string;
};

export default function TemplatesView() {
  const [plantillas, setPlantillas] = useState<PlantillaUI[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  async function load() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/plantillas", { cache: "no-store" });
      const json = await res.json();

      if (!res.ok) {
        setPlantillas([]);
        setError(json?.error ? String(json.error) : "Error cargando plantillas");
        return;
      }

      if (!Array.isArray(json)) {
        setPlantillas([]);
        setError("Respuesta inválida del servidor");
        return;
      }

      // Mapear nombres reales de la BD -> nombres UI
      const mapped: PlantillaUI[] = (json as PlantillaDB[]).map((p) => ({
        id: p.id,
        numero_cuenta: p.cuenta_bancaria,
        subproducto: p.subproducto,
        imagen_url: p.url,
        creado_en: p.creado_en,
      }));

      setPlantillas(mapped);
    } catch (err) {
      console.error("Error cargando plantillas:", err);
      setError("Error de conexión al cargar plantillas");
      setPlantillas([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function deleteTemplate(id: number) {
    if (!confirm("¿Eliminar plantilla?")) return;

    try {
      setDeletingId(id);

      const res = await fetch(`/api/plantillas/${id}`, { method: "DELETE" });
      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        alert(json?.error || "No se pudo eliminar");
      } else {
        load();
      }
    } catch (err) {
      console.error("Error eliminando plantilla:", err);
      alert("Error de conexión");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="space-y-10 text-slate-900">
      <div className="grid md:grid-cols-2 gap-10">
        {/* CREAR */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Nueva plantilla</h2>
          <NewTemplateForm onCreated={load} />
        </div>

        {/* LISTADO */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Plantillas existentes</h2>

          {loading ? (
            <p className="text-slate-500">Cargando...</p>
          ) : error ? (
            <p className="text-red-600">Error: {error}</p>
          ) : plantillas.length === 0 ? (
            <p className="text-slate-500">No hay plantillas registradas.</p>
          ) : (
            <div className="space-y-4">
              {plantillas.map((p) => (
                <div
                  key={p.id}
                  className="
                    flex items-center gap-4
                    rounded-3xl
                    bg-white/55 backdrop-blur-xl
                    border border-slate-200/60
                    shadow-[0_8px_30px_rgba(15,23,42,0.06)]
                    p-4
                  "
                >
                  {/* IMAGEN */}
                  <img
                    src={`${p.imagen_url}?v=${p.id}`}
                    alt={p.subproducto}
                    className="
                      w-20 h-20 object-contain
                      rounded-2xl
                      border border-slate-200/60
                      bg-white/60
                    "
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/no-image.png";
                    }}
                  />

                  {/* INFO */}
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-lg text-slate-900 truncate">
                      {p.subproducto}
                    </div>
                    <div className="text-slate-600 text-sm truncate">
                      {p.numero_cuenta}
                    </div>
                    <div className="text-slate-500 text-xs mt-1">
                      {p.creado_en ? new Date(p.creado_en).toLocaleString() : ""}
                    </div>
                  </div>

                  {/* BOTONES (✅ “Ver” ahora se distingue) */}
                  <div className="flex flex-col gap-2 min-w-[110px]">
                    <Link
                      href={`/gestion/multas/plantillas/${p.id}`}
                      className="
                        text-center
                        px-3 py-2
                        rounded-xl
                        bg-sky-600/90
                        text-white text-sm font-medium
                        shadow-sm
                        hover:bg-sky-700
                        transition
                        focus:outline-none focus:ring-2 focus:ring-sky-300/60
                      "
                    >
                      Ver
                    </Link>

                    <button
                      onClick={() => deleteTemplate(p.id)}
                      disabled={deletingId === p.id}
                      className="
                        px-3 py-2
                        rounded-xl
                        bg-red-600/90
                        text-white text-sm font-medium
                        shadow-sm
                        hover:bg-red-700
                        transition
                        disabled:opacity-40 disabled:cursor-not-allowed
                      "
                    >
                      {deletingId === p.id ? "Eliminando..." : "Eliminar"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
