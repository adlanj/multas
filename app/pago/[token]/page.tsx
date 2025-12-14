import PagoFastCashStatic from "./static";

export default async function Page({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params; // ✅ Next 16 requiere await
  return <PagoFastCashStatic token={token} />;
}
