import { NextResponse } from "next/server";
import { Pool } from "pg";
import crypto from "crypto";

export const runtime = "nodejs";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function POST(req) {
  try {
    const body = await req.json();

    const token = crypto.randomBytes(16).toString("hex"); // 32 chars
    const now = new Date();
    const expiresAt = new Date(now.getTime() + 1000 * 60 * 60 * 24); // 24h

    const producto = body?.producto ?? body?.subproducto ?? null;
    const cuenta_bancaria = body?.cuenta_bancaria ?? null;
    const logo_url = body?.logo_url ?? body?.url ?? null;

    if (!producto || !cuenta_bancaria) {
      return NextResponse.json(
        { error: "Faltan campos: producto y cuenta_bancaria" },
        { status: 400 }
      );
    }

    const q = `
      INSERT INTO plantillas_temporales
      (producto, cuenta_bancaria, logo_url,
       monto, importe_pagar, fecha_vencimiento, dias_vencidos,
       nombre_cliente, telefono_cliente, mostrar_extras,
       card_bg_color, primary_color, locked,
       created_at, expires_at, token)
      VALUES
      ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)
      RETURNING token;
    `;

    const r = await pool.query(q, [
      producto,
      cuenta_bancaria,
      logo_url,
      body?.monto ?? null,
      body?.importe_pagar ?? null,
      body?.fecha_vencimiento ?? null,
      body?.dias_vencidos ?? 0,
      body?.nombre_cliente ?? null,
      body?.telefono_cliente ?? null,
      body?.mostrar_extras ?? true,
      body?.card_bg_color ?? "#FFFFFF",
      body?.primary_color ?? "#0F56F7",
      true,
      now,
      expiresAt,
      token,
    ]);

    const link = `${req.nextUrl.origin}/pago/${r.rows[0].token}`;

    return NextResponse.json({ token: r.rows[0].token, link, expires_at: expiresAt });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
