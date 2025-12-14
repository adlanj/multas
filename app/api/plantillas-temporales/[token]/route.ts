// ✅ 2) app/api/plantillas-temporales/[token]/route.ts
// Devuelve la plantilla ya guardada (solo lectura)
import { NextResponse } from "next/server";
import { Pool } from "pg";

export const runtime = "nodejs";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET(
  req: Request,
  { params }: { params: Promise<{ token: string }> } // ✅ Next 15
) {
  const { token } = await params;

  try {
    const r = await pool.query(
      `SELECT *
       FROM plantillas_temporales
       WHERE token = $1
       LIMIT 1`,
      [token]
    );

    if (r.rows.length === 0) {
      return NextResponse.json({ error: "No existe" }, { status: 404 });
    }

    const row = r.rows[0];
    const now = new Date();

    if (row.expires_at && new Date(row.expires_at) < now) {
      return NextResponse.json({ error: "Link expirado" }, { status: 410 });
    }

    return NextResponse.json(row);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
