import { NextResponse } from "next/server";
import { Pool } from "pg";

export const runtime = "nodejs";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const res = await pool.query("SELECT * FROM plantillas_pago WHERE id=$1", [
      id,
    ]);

    if (res.rows.length === 0) {
      return NextResponse.json({ error: "No existe" }, { status: 404 });
    }

    return NextResponse.json(res.rows[0]);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const res = await pool.query(
      "DELETE FROM plantillas_pago WHERE id=$1 RETURNING *",
      [id]
    );

    if (res.rowCount === 0) {
      return NextResponse.json(
        { error: "Plantilla no encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
