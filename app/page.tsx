"use client";

import Link from "next/link";

// PAGE: /
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#e0ccb1]">
      <section
        className="w-[900px] h-[520px] grid grid-cols-2 rounded-2xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.75)]"
        style={{
          backgroundImage: "url(/fondo.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Administrador (ANTES derecha, AHORA izquierda) */}
        <div className="flex flex-col items-center justify-center bg-black/35 text-white p-10">
          <h1 className="text-4xl font-semibold mb-6">ADMINISTRADOR</h1>
          <p className="text-sm text-white/80 mb-10 text-center">
            Acceso administrativo
          </p>
          <Link
            href="/admin"
            className="px-10 py-3 rounded-full bg-[#c9a98f] text-black font-medium"
          >
            Entrar
          </Link>
        </div>

        {/* Asesor (ANTES izquierda, AHORA derecha) */}
        <div className="flex flex-col items-center justify-center text-white p-10">
          <h1 className="text-4xl font-semibold mb-6">ASESOR</h1>
          <p className="text-sm text-white/80 mb-10 text-center">
            Acceso para asesores
          </p>
          <Link
            href="/asesor"
            className="px-10 py-3 rounded-full bg-white/70 text-black font-medium"
          >
            Entrar
          </Link>
        </div>
      </section>
    </main>
  );
}

/*
ESTRUCTURA FINAL
----------------
/app/page.tsx        → selector (este archivo)
/app/admin/page.tsx  → login admin
/app/asesor/page.tsx → login asesor

No hay refresh, navegación cliente.
*/
