export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import { comparePassword, signToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    // Traemos el usuario
    const result = await query(
      "SELECT username, password, role FROM users WHERE username = $1",
      [username]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: "Usuario no encontrado" },
        { status: 404 }
      );
    }

    const user = result.rows[0];

    // ✅ Enforzar rol asesor
    if (user.role !== "asesor") {
      return NextResponse.json(
        { error: "No autorizado: rol inválido" },
        { status: 403 }
      );
    }

    // Validar password
    const isValid = await comparePassword(password, user.password);
    if (!isValid) {
      return NextResponse.json(
        { error: "Contraseña incorrecta" },
        { status: 401 }
      );
    }

    // Token con rol
    const token = signToken({
      username: user.username,
      role: user.role,
    });

    // Respuesta OK + cookie
    const res = NextResponse.json({
      ok: true,
      redirectTo: "/asesor/dashboard",
      user: {
        username: user.username,
        role: user.role,
      },
    });

    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return res;
  } catch (error) {
    console.error("LOGIN ASESOR ERROR:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
