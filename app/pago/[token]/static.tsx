"use client";

import { useEffect, useMemo, useState } from "react";

export default function PagoFastCashStatic({ token }: { token: string }) {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const origin = useMemo(() => {
    if (typeof window === "undefined") return "";
    return window.location.origin;
  }, []);

  useEffect(() => {
    if (!token) {
      setError("Token no recibido en la URL");
      return;
    }

    (async () => {
      try {
        const res = await fetch(`/api/plantillas-temporales/${token}`, {
          cache: "no-store",
        });
        const json = await res.json().catch(() => ({}));

        if (!res.ok) {
          setError(json?.error || "Error cargando plantilla");
          return;
        }

        setData(json);
      } catch (e) {
        setError("Error de conexión");
      }
    })();
  }, [token]);

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white p-10">
        <div className="text-red-400 font-semibold">Error:</div>
        <div className="mt-2">{error}</div>
      </div>
    );
  }

  if (!data) {
    return <div className="min-h-screen bg-black text-white p-10">Cargando...</div>;
  }

  const cardBg = data.card_bg_color || "#FFFFFF";
  const primaryColor = data.primary_color || "#0F56F7";

  // ✅ logo soporta varios nombres
  const logoRaw =
    data.logo_url ?? data.url ?? data.imagen_url ?? data.logoUrl ?? null;

  // ✅ convertir a absoluta en cliente si viene "/uploads/..."
  const logoUrl =
    logoRaw && typeof logoRaw === "string" && logoRaw.startsWith("/")
      ? `${origin}${logoRaw}`
      : logoRaw;

  const formatDateReadable = (iso: string | null) => {
    if (!iso) return "—";
    try {
      return new Date(iso + "T00:00:00").toLocaleDateString(undefined, {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    } catch {
      return String(iso);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-6 bg-[#152032]">
      <div
        className="w-[420px] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
        style={{ backgroundColor: cardBg }}
      >
        {/* HEADER */}
        <div
          className="w-full h-[160px] flex flex-col items-center pt-6"
          style={{ background: "linear-gradient(180deg,#5CB0FF 0%,#A3D4FF 100%)" }}
        >
          <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center overflow-hidden shadow">
            {logoUrl ? (
              <img
                src={logoUrl}
                className="w-full h-full object-cover"
                alt="logo"
              />
            ) : (
              <span className="text-lg font-bold text-[#142546]">IMG</span>
            )}
          </div>

          <h2 className="text-lg font-bold text-[#142546] mt-4">
            {data.producto ?? data.subproducto ?? "Producto"}
          </h2>
        </div>

        {/* MONTO (solo texto) */}
        <div
          className="mx-4 -mt-4 rounded-xl p-4 text-white shadow-md"
          style={{ backgroundColor: primaryColor }}
        >
          <div className="text-xs opacity-90">Monto de Préstamo</div>
          <div className="text-3xl font-bold">{data.monto ?? "$0.00"}</div>
        </div>

        {/* CONTENIDO */}
        <div className="px-4 py-5 flex flex-col gap-4">
          <div className="rounded-xl border p-3 shadow-sm" style={{ backgroundColor: cardBg }}>
            <div className="flex justify-between items-center py-3 border-b">
              <span className="text-sm font-medium text-gray-700">Producto</span>
              <span className="text-sm text-gray-600">
                {data.producto ?? data.subproducto ?? "—"}
              </span>
            </div>

            <div className="flex justify-between items-center py-3 border-b">
              <span className="text-sm font-medium text-gray-700">Importe a Pagar</span>
              <span className="text-sm font-semibold text-gray-600">
                {data.importe_pagar ?? "—"}
              </span>
            </div>

            <div className="flex justify-between items-center py-3 border-b">
              <span className="text-sm font-medium text-gray-700">Fecha Vencimiento</span>
              <div className="text-sm text-gray-600">
                {formatDateReadable(data.fecha_vencimiento ?? null)}
              </div>
            </div>

            <div className="flex justify-between items-center py-3">
              <span className="text-sm font-medium text-gray-700">Días vencimiento</span>
              <span className="text-sm text-gray-500">
                {data.dias_vencidos ?? 0} días
              </span>
            </div>
          </div>

          {/* SPEI */}
          <div className="rounded-xl p-3 shadow-sm" style={{ backgroundColor: cardBg }}>
            <div className="text-sm font-medium text-gray-700 mb-2">
              Elige el método de pago
            </div>
            <div className="flex items-center justify-center bg-[#F8FAFB] p-4 rounded-md">
              <div className="text-center">
                <div className="text-xs text-gray-500">SPEI</div>
                <div className="text-lg md:text-xl lg:text-2xl font-extrabold text-gray-700 mt-1">
                  {data.cuenta_bancaria ?? "—"}
                </div>
              </div>
            </div>
          </div>

          {/* EXTRAS */}
          {data.mostrar_extras && (
            <div className="rounded-xl p-3 shadow-sm" style={{ backgroundColor: cardBg }}>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-sm font-medium text-gray-700">Nombre</span>
                <span className="text-sm text-gray-700">
                  {data.nombre_cliente ?? "—"}
                </span>
              </div>

              <div className="flex justify-between items-center py-2">
                <span className="text-sm font-medium text-gray-700">Teléfono</span>
                <span className="text-sm text-gray-700">
                  {data.telefono_cliente ?? "—"}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
