"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AsesorLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/auth/login-asesor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Error de login");
        return;
      }

      localStorage.setItem("username", username);
      router.push("/asesor/dashboard");
    } catch {
      setError("Error de conexión. Intenta nuevamente.");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#e0ccb1]">
      <section
        className={`w-[900px] h-[520px] grid grid-cols-2 rounded-2xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.75)"
        }`}
        style={{
          backgroundImage: "url(/fondo.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* IZQUIERDA – ADMIN CTA */}
        <div className="bg-white/25 flex flex-col items-center justify-center text-white px-12 text-center">
          <h1 className="text-3xl font-semibold mb-6">
            ¿Eres administrador?
          </h1>

          <p className="text-sm text-white/90 mb-10 max-w-xs">
            Si tu rol es administrador, presiona aquí
          </p>

          <Link
            href="/admin"
            className="
              px-10
              py-3
              rounded-full
              bg-black/40
              text-white
              text-base
              hover:bg-black/55
              transition
            "
          >
            Ingresa aquí
          </Link>
        </div>

        {/* DERECHA – LOGIN ASESOR */}
        <div className="bg-black/40 flex flex-col justify-center px-14 text-white">
          <h2 className="text-2xl font-semibold tracking-wide mb-12">
            ASESOR
          </h2>

          {error && (
            <p className="text-red-400 text-sm mb-6">{error}</p>
          )}

          <form onSubmit={handleLogin} className="space-y-10">
            {/* Usuario */}
            <div>
              <label className="block text-white/90 text-lg mb-2">
                Usuario
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="off"
                className="
                  w-full
                  bg-transparent
                  border-0
                  border-b
                  border-white
                  px-0
                  py-1
                  text-white
                  text-lg
                  outline-none
                "
                required
              />
            </div>

            {/* Contraseña */}
            <div>
              <label className="block text-white/90 text-lg mb-2">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                className="
                  w-full
                  bg-transparent
                  border-0
                  border-b
                  border-white
                  px-0
                  py-1
                  text-white
                  text-lg
                  outline-none
                "
                required
              />
            </div>

            <button
              type="submit"
              className="
                w-full
                mt-6
                py-4
                rounded-2xl
                bg-white/40
                text-white
                text-lg
                hover:bg-white/50
                transition
              "
            >
              Ingresar
            </button>

            <p className="text-sm text-white/80 mt-2">
              Acceso para asesores
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
