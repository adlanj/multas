"use client";

import Link from "next/link";
import Sidebar from "./components/Sidebar";
import { FileText, Upload, Users, LayoutGrid } from "lucide-react";

export default function GestionPage() {
  const cards = [
    {
      title: "Multas",
      desc: "Administrar y gestionar multas.",
      icon: <FileText size={22} />,
      href: "/gestion/multas",
    },
    {
      title: "Base",
      desc: "Administración visual de las Bases.",
      icon: <LayoutGrid size={22} />,
      href: "/gestion/base",
    },
    {
      title: "Usuarios",
      desc: "Gestión de usuarios y roles.",
      icon: <Users size={22} />,
      href: "/gestion/usuarios",
    },
    {
      title: "Subir Base",
      desc: "Importar base de datos en formato CSV o Excel.",
      icon: <Upload size={22} />,
      href: "/gestion",
    },
  ];

  return (
    <div className="min-h-screen text-slate-900">
      {/* Sidebar fija (la deja el layout), si aún la estás renderizando acá, déjala */}
      <Sidebar />

      {/* Contenido (respeta el ancho de la sidebar por la variable --sidebar-w) */}
      <main
        className="
          min-h-screen
          px-6 sm:px-10
          py-8 sm:py-10
          bg-gradient-to-b from-slate-50 via-sky-50/60 to-slate-100
          transition-[padding] duration-300
        "
        style={{
          // ✅ Si --sidebar-w es 18rem (abierta), quitamos el padding para overlay.
          // ✅ Si es 88px (cerrada), dejamos 88px para que no tape.
          paddingLeft: "min(var(--sidebar-w), 88px)",
        }}
      >
        {/* Header superior tipo dashboard */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Panel de Gestión
            </h1>
            <p className="text-slate-500 mt-2">
              Bienvenido al panel de administración.
            </p>
          </div>

          {/* Badge/Chip suave como en la referencia */}
          <div
            className="
              hidden sm:flex items-center gap-2
              px-4 py-2 rounded-2xl
              bg-white/60 backdrop-blur-xl
              border border-slate-200/60
              shadow-sm
              text-sm text-slate-600
            "
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Sistema activo
          </div>
        </div>

        {/* Separador suave */}
        <div className="mt-8 border-t border-slate-200/70" />

        {/* Grid estilo “cards” neumorphism */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {cards.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="
                group
                rounded-3xl
                bg-white/55 backdrop-blur-xl
                border border-slate-200/60
                shadow-[0_8px_30px_rgba(15,23,42,0.06)]
                p-6
                transition
                hover:shadow-[0_12px_40px_rgba(15,23,42,0.10)]
                hover:-translate-y-0.5
                focus:outline-none focus:ring-2 focus:ring-sky-300/60
              "
            >
              <div className="flex items-center gap-4">
                {/* Icon pill */}
                <div
                  className="
                    h-11 w-11 rounded-2xl
                    flex items-center justify-center
                    bg-white/70
                    border border-slate-200/70
                    shadow-sm
                    transition
                    group-hover:bg-white
                  "
                >
                  <span className="text-slate-800">{item.icon}</span>
                </div>

                <div className="min-w-0">
                  <h2 className="text-lg font-semibold text-slate-900 truncate">
                    {item.title}
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Línea y acción inferior (muy similar a UI modernas) */}
              <div className="mt-5 flex items-center justify-between">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200/80 to-transparent" />
              </div>

              <div className="mt-4 flex items-center justify-end">
                <span
                  className="
                    text-sm font-medium
                    text-slate-600
                    group-hover:text-slate-900
                    transition
                  "
                >
                  Abrir →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
