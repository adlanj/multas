import { NextResponse } from "next/server";
import { Pool } from "pg";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export const runtime = "nodejs"; // ✅ IMPORTANTÍSIMO (para usar fs)

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET() {
  try {
    const res = await pool.query(
      "SELECT * FROM plantillas_pago ORDER BY id DESC"
    );
    return NextResponse.json(res.rows);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const cuentaBancaria = String(form.get("cuenta_bancaria") || "").trim();
    const subproducto = String(form.get("subproducto") || "").trim();
    const file = form.get("url");

    if (!cuentaBancaria || !subproducto || !(file instanceof File)) {
      return NextResponse.json({ error: "Faltan campos" }, { status: 400 });
    }

    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    await mkdir(uploadsDir, { recursive: true });

    const safeName = (file.name || "imagen")
      .replace(/\s+/g, "_")
      .replace(/[^a-zA-Z0-9._-]/g, "");

    const filename = `${Date.now()}_${safeName}`;
    const filepath = path.join(uploadsDir, filename);

    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(filepath, buffer);

    const url = `/uploads/${filename}`;

    const result = await pool.query(
      `INSERT INTO plantillas_pago (cuenta_bancaria, subproducto, url)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [cuentaBancaria, subproducto, url]
    );

    return NextResponse.json(result.rows[0]);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
