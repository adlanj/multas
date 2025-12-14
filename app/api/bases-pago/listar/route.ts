import { NextResponse } from "next/server";
import { Pool } from "pg";

export const runtime = "nodejs";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET() {
  try {
    const res = await pool.query(`
      SELECT 
        id,
        producto,
        cuenta_bancaria,
        logo_url,
        created_at
      FROM plantillas_temporales
      ORDER BY id DESC
    `);

    return NextResponse.json(res.rows);
  } catch (e: any) {
    return NextResponse.json(
      { error: e.message },
      { status: 500 }
    );
  }
}
