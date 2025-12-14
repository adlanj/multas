import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { message: "Usuario y contraseña son requeridos" },
        { status: 400 }
      );
    }

    // Traemos role (nombre de columna: role)
    const result = await query(
      "SELECT id, username, password, role FROM users WHERE username = $1",
      [username]
    );

    if (result.rowCount === 0) {
      return NextResponse.json(
        { message: "Credenciales incorrectas" },
        { status: 401 }
      );
    }

    const user = result.rows[0];

    // Comprobar role usando user.role (no user.rol)
    if (user.role !== "asesor") {
      return NextResponse.json(
        { message: "No tienes permisos de asesor" },
        { status: 403 }
      );
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return NextResponse.json(
        { message: "Contraseña incorrecta" },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { id: user.id, role: user.role, username: user.username },
      process.env.JWT_SECRET!,
      { expiresIn: "1d" }
    );

    const response = NextResponse.json({ success: true });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // true en prod, false en dev
      sameSite: "lax", // 'lax' facilita pruebas locales; cámbialo a 'strict' en prod si quieres
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return response;
  } catch (error: any) {
    console.log("ERROR login-asesor:", error);
    return NextResponse.json(
      { message: "Error en el servidor" },
      { status: 500 }
    );
  }
}
