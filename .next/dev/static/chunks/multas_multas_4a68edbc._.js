(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PagoFastCashForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function PagoFastCashForm({ data = {} }) {
    _s();
    // =========================
    // Helpers
    // =========================
    const isHex = (s)=>/^#([0-9A-Fa-f]{6})$/.test(String(s || ""));
    const origin = ("TURBOPACK compile-time truthy", 1) ? window.location.origin : "TURBOPACK unreachable";
    const normalizeUrl = (u)=>{
        if (!u) return null;
        let s = String(u).trim().replaceAll("\\", "/");
        if (/^https?:\/\//i.test(s)) return s;
        if (s.startsWith("public/uploads/")) s = s.replace("public/", "");
        if (s.startsWith("uploads/")) s = `/${s}`;
        if (s.startsWith("/")) return origin ? `${origin}${s}` : s;
        return origin ? `${origin}/${s}` : s;
    };
    const mergeDefined = (base = {}, override = {})=>{
        const out = {
            ...base
        };
        for (const [k, v] of Object.entries(override || {})){
            if (v !== undefined && v !== null && v !== "") out[k] = v;
        }
        return out;
    };
    // =========================
    // 1) ID: primero del URL, luego del prop data
    // =========================
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])(); // { id: "123" }
    const idFromUrl = params?.id ? String(params.id) : null;
    const idFromData = data.plantilla_pago_id ?? data.plantillas_pago_id ?? data.plantilla_id ?? data.id_plantilla ?? data.plantillaPagoId ?? data.plantillaId ?? data.id ?? null;
    const plantillaId = idFromUrl ?? (idFromData ? String(idFromData) : null);
    // =========================
    // 2) Traer plantilla desde BD por ID
    // =========================
    const [plantillaBD, setPlantillaBD] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingPlantilla, setLoadingPlantilla] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [errorPlantilla, setErrorPlantilla] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PagoFastCashForm.useEffect": ()=>{
            let cancel = false;
            async function fetchPlantilla() {
                setLoadingPlantilla(true);
                setErrorPlantilla("");
                try {
                    // ✅ SIEMPRE por ID cuando existe
                    // /api/plantillas/[id] => /api/plantillas/${id}
                    const url = plantillaId ? `/api/plantillas/${encodeURIComponent(plantillaId)}` : `/api/plantilla-pago`; // (opcional) fallback SOLO si no hay ID
                    const res = await fetch(url, {
                        cache: "no-store"
                    });
                    const json = await res.json().catch({
                        "PagoFastCashForm.useEffect.fetchPlantilla": ()=>({})
                    }["PagoFastCashForm.useEffect.fetchPlantilla"]);
                    if (!res.ok) throw new Error(json?.error || "No se pudo cargar la plantilla");
                    const plantilla = json?.data ?? json;
                    if (!cancel) setPlantillaBD(plantilla);
                } catch (e) {
                    console.error("❌ Error cargando plantilla:", e);
                    if (!cancel) {
                        setPlantillaBD(null);
                        setErrorPlantilla(e?.message || "Error cargando plantilla");
                    }
                } finally{
                    if (!cancel) setLoadingPlantilla(false);
                }
            }
            fetchPlantilla();
            return ({
                "PagoFastCashForm.useEffect": ()=>{
                    cancel = true;
                }
            })["PagoFastCashForm.useEffect"];
        }
    }["PagoFastCashForm.useEffect"], [
        plantillaId
    ]);
    // =========================
    // 3) Merge BD + temporal (data)
    // =========================
    const merged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PagoFastCashForm.useMemo[merged]": ()=>mergeDefined(plantillaBD ?? {}, data ?? {})
    }["PagoFastCashForm.useMemo[merged]"], [
        plantillaBD,
        data
    ]);
    // =========================
    // 4) Derivados (SIN defaults)
    // =========================
    const producto = merged?.subproducto ?? merged?.ubproducto ?? "";
    const cuentaBancaria = merged?.cuenta_bancaria ?? "";
    const logoUrlRaw = merged?.url ?? merged?.logo_url ?? merged?.imagen_url ?? merged?.logoUrl ?? merged?.logo ?? null;
    const resolvedLogoUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PagoFastCashForm.useMemo[resolvedLogoUrl]": ()=>normalizeUrl(logoUrlRaw)
    }["PagoFastCashForm.useMemo[resolvedLogoUrl]"], [
        logoUrlRaw
    ]);
    const baseListo = !!producto && !!cuentaBancaria && !!logoUrlRaw;
    // =========================
    // 5) EXTRAS EDITABLES
    // =========================
    const [nombre, setNombre] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [telefono, setTelefono] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [mostrarExtras, setMostrarExtras] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // =========================
    // 6) EDITABLES
    // =========================
    const [monto, setMonto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [importePagar, setImportePagar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [fechaVencimiento, setFechaVencimiento] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [diasVencidos, setDiasVencidos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PagoFastCashForm.useEffect": ()=>{
            if (merged?.monto != null && monto === "") setMonto(String(merged.monto));
            if (merged?.importe_pagar != null && importePagar === "") setImportePagar(String(merged.importe_pagar));
            if (merged?.fecha_vencimiento && !fechaVencimiento) setFechaVencimiento(String(merged.fecha_vencimiento));
            if (typeof merged?.dias_vencidos === "number") setDiasVencidos(merged.dias_vencidos);
            if (merged?.nombre_cliente && !nombre) setNombre(String(merged.nombre_cliente));
            if (merged?.telefono_cliente && !telefono) setTelefono(String(merged.telefono_cliente));
            if (typeof merged?.mostrar_extras === "boolean") setMostrarExtras(merged.mostrar_extras);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["PagoFastCashForm.useEffect"], [
        merged
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PagoFastCashForm.useEffect": ()=>{
            setImportePagar(monto);
        }
    }["PagoFastCashForm.useEffect"], [
        monto
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PagoFastCashForm.useEffect": ()=>{
            if (!fechaVencimiento) return setDiasVencidos(0);
            const hoy = new Date();
            const venc = new Date(fechaVencimiento + "T00:00:00");
            const diff = Math.ceil((venc.getTime() - hoy.getTime()) / 86400000);
            setDiasVencidos(diff);
        }
    }["PagoFastCashForm.useEffect"], [
        fechaVencimiento
    ]);
    // =========================
    // 7) COLORES
    // =========================
    const [cardBg, setCardBg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#ffffff");
    const [cardBgHexInput, setCardBgHexInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#ffffff");
    const [primaryColor, setPrimaryColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#0F56F7");
    const [primaryHexInput, setPrimaryHexInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#0F56F7");
    const [cardBgError, setCardBgError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [primaryError, setPrimaryError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PagoFastCashForm.useEffect": ()=>{
            if (merged?.card_bg_color && isHex(merged.card_bg_color)) {
                setCardBg(String(merged.card_bg_color));
                setCardBgHexInput(String(merged.card_bg_color));
            }
            if (merged?.primary_color && isHex(merged.primary_color)) {
                setPrimaryColor(String(merged.primary_color));
                setPrimaryHexInput(String(merged.primary_color));
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["PagoFastCashForm.useEffect"], [
        merged?.card_bg_color,
        merged?.primary_color
    ]);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shareLink, setShareLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleCardBgHexChange = (value)=>{
        setCardBgHexInput(value);
        if (isHex(value)) {
            setCardBg(value);
            setCardBgError("");
        } else {
            setCardBgError("Ingresa color en formato #RRGGBB");
        }
    };
    const handlePrimaryHexChange = (value)=>{
        setPrimaryHexInput(value);
        if (isHex(value)) {
            setPrimaryColor(value);
            setPrimaryError("");
        } else {
            setPrimaryError("Ingresa color en formato #RRGGBB");
        }
    };
    const cardBgOptions = [
        {
            label: "Blanco",
            value: "#FFFFFF"
        },
        {
            label: "Gris claro",
            value: "#F8FAFC"
        },
        {
            label: "Gris suave",
            value: "#EEF2F6"
        },
        {
            label: "Marfil",
            value: "#FFF4E6"
        },
        {
            label: "Crema",
            value: "#FFF7ED"
        },
        {
            label: "Very Light Blue",
            value: "#F0F9FF"
        },
        {
            label: "Lavanda",
            value: "#F5F3FF"
        },
        {
            label: "Rosa claro",
            value: "#FFF1F2"
        },
        {
            label: "Verde suave",
            value: "#ECFDF5"
        },
        {
            label: "Amarillo suave",
            value: "#FFFBEB"
        },
        {
            label: "Gris perla",
            value: "#F1F5F9"
        },
        {
            label: "Humo",
            value: "#F3F4F6"
        }
    ];
    const primaryOptions = [
        {
            label: "Azul (default)",
            value: "#0F56F7"
        },
        {
            label: "Naranja",
            value: "#FF6B00"
        },
        {
            label: "Verde",
            value: "#10B981"
        },
        {
            label: "Rojo",
            value: "#EF4444"
        },
        {
            label: "Morado",
            value: "#7C3AED"
        },
        {
            label: "Teal",
            value: "#06B6D4"
        },
        {
            label: "Indigo",
            value: "#4F46E5"
        },
        {
            label: "Cian",
            value: "#0891B2"
        },
        {
            label: "Rosa fuerte",
            value: "#EC4899"
        },
        {
            label: "Amarillo",
            value: "#F59E0B"
        },
        {
            label: "Gris oscuro",
            value: "#374151"
        },
        {
            label: "Negro",
            value: "#111827"
        }
    ];
    const disabled = saving;
    async function crearLinkEstatico() {
        const payload = {
            // ✅ referencia real de la plantilla: ID DEL URL
            plantilla_pago_id: plantillaId,
            subproducto: merged.subproducto ?? merged.ubproducto,
            cuenta_bancaria: merged.cuenta_bancaria,
            url: resolvedLogoUrl,
            monto,
            importe_pagar: importePagar,
            fecha_vencimiento: fechaVencimiento || null,
            dias_vencidos: diasVencidos,
            nombre_cliente: nombre,
            telefono_cliente: telefono,
            mostrar_extras: mostrarExtras,
            card_bg_color: cardBg,
            primary_color: primaryColor,
            locked: true
        };
        const res = await fetch("/api/plantillas-temporales", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        const json = await res.json().catch(()=>({}));
        if (!res.ok) throw new Error(json?.error || "No se pudo generar el link");
        return String(json.link);
    }
    const handleConfirmAndLock = async ()=>{
        if (saving) return;
        setSaving(true);
        try {
            const link = await crearLinkEstatico();
            setShareLink(link);
            window.location.href = link;
        } catch (e) {
            alert(e?.message || "Error generando link");
        } finally{
            setSaving(false);
        }
    };
    // =========================
    // UI Estados
    // =========================
    if (loadingPlantilla || !baseListo && !errorPlantilla) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-[#152032] text-white p-6",
            children: [
                "Cargando plantilla ",
                plantillaId ? `#${plantillaId}` : "",
                "…"
            ]
        }, void 0, true, {
            fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
            lineNumber: 297,
            columnNumber: 7
        }, this);
    }
    if (errorPlantilla && !baseListo) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-[#152032] text-white p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xl font-bold mb-2",
                        children: "No se pudo cargar la plantilla"
                    }, void 0, false, {
                        fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                        lineNumber: 307,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm opacity-90",
                        children: errorPlantilla
                    }, void 0, false, {
                        fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                        lineNumber: 308,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                lineNumber: 306,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
            lineNumber: 305,
            columnNumber: 7
        }, this);
    }
    // =========================
    // Render
    // =========================
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full min-h-screen flex items-center justify-center p-6 relative bg-[#152032]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-6 top-16 z-50 flex flex-col gap-4 w-60",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium",
                                children: "Mostrar datos del cliente"
                            }, void 0, false, {
                                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                lineNumber: 321,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "relative inline-flex items-center cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: mostrarExtras,
                                        onChange: ()=>setMostrarExtras(!mostrarExtras),
                                        className: "sr-only peer",
                                        disabled: disabled
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                        lineNumber: 323,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-11 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full relative   after:content-[''] after:w-5 after:h-5 after:bg-white after:rounded-full   after:absolute after:left-1 after:top-0.5 peer-checked:after:translate-x-5 transition-all"
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                        lineNumber: 330,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                lineNumber: 322,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                        lineNumber: 320,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/5 p-3 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-white mb-2 font-medium",
                                children: "Fondo de la tarjeta"
                            }, void 0, false, {
                                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                lineNumber: 339,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "w-full p-2 rounded-md mb-2 text-sm",
                                value: cardBg,
                                onChange: (e)=>{
                                    setCardBg(e.target.value);
                                    setCardBgHexInput(e.target.value);
                                    setCardBgError("");
                                },
                                disabled: disabled,
                                children: cardBgOptions.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: o.value,
                                        children: [
                                            o.label,
                                            " — ",
                                            o.value
                                        ]
                                    }, o.value, true, {
                                        fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                        lineNumber: 351,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                lineNumber: 340,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: cardBgHexInput,
                                        onChange: (e)=>handleCardBgHexChange(e.target.value),
                                        className: "flex-1 p-2 rounded-md text-sm",
                                        placeholder: "#RRGGBB",
                                        disabled: disabled
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                        lineNumber: 358,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-md border",
                                        style: {
                                            backgroundColor: isHex(cardBgHexInput) ? cardBgHexInput : cardBg
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                        lineNumber: 366,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                lineNumber: 357,
                                columnNumber: 11
                            }, this),
                            cardBgError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-rose-400 mt-1",
                                children: cardBgError
                            }, void 0, false, {
                                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                lineNumber: 371,
                                columnNumber: 27
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                        lineNumber: 338,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/5 p-3 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-white mb-2 font-medium",
                                children: "Color del botón / burbuja"
                            }, void 0, false, {
                                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                lineNumber: 375,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "w-full p-2 rounded-md mb-2 text-sm",
                                value: primaryColor,
                                onChange: (e)=>{
                                    setPrimaryColor(e.target.value);
                                    setPrimaryHexInput(e.target.value);
                                    setPrimaryError("");
                                },
                                disabled: disabled,
                                children: primaryOptions.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: o.value,
                                        children: [
                                            o.label,
                                            " — ",
                                            o.value
                                        ]
                                    }, o.value, true, {
                                        fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                        lineNumber: 387,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                lineNumber: 376,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: primaryHexInput,
                                        onChange: (e)=>handlePrimaryHexChange(e.target.value),
                                        className: "flex-1 p-2 rounded-md text-sm",
                                        placeholder: "#RRGGBB",
                                        disabled: disabled
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                        lineNumber: 394,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-md border",
                                        style: {
                                            backgroundColor: isHex(primaryHexInput) ? primaryHexInput : primaryColor
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                        lineNumber: 402,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                lineNumber: 393,
                                columnNumber: 11
                            }, this),
                            primaryError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-rose-400 mt-1",
                                children: primaryError
                            }, void 0, false, {
                                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                lineNumber: 407,
                                columnNumber: 28
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                        lineNumber: 374,
                        columnNumber: 9
                    }, this),
                    shareLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/5 p-3 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-white mb-2 font-medium",
                                children: "Link generado"
                            }, void 0, false, {
                                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                lineNumber: 412,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "w-full p-2 rounded-md text-sm",
                                value: shareLink,
                                readOnly: true
                            }, void 0, false, {
                                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                lineNumber: 413,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "mt-2 w-full p-2 rounded-md text-sm bg-white/10 hover:bg-white/20 text-white",
                                onClick: ()=>navigator.clipboard.writeText(shareLink),
                                type: "button",
                                children: "Copiar link"
                            }, void 0, false, {
                                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                lineNumber: 414,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                        lineNumber: 411,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                lineNumber: 319,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[420px] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.45)]",
                style: {
                    backgroundColor: cardBg
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-[160px] flex flex-col items-center pt-6",
                        style: {
                            background: "linear-gradient(180deg,#5CB0FF 0%,#A3D4FF 100%)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 bg-white rounded-xl flex items-center justify-center overflow-hidden shadow",
                                children: resolvedLogoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: resolvedLogoUrl,
                                    className: "w-full h-full object-cover",
                                    alt: "logo",
                                    crossOrigin: "anonymous",
                                    onError: ()=>console.log("❌ NO carga IMG:", resolvedLogoUrl)
                                }, void 0, false, {
                                    fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                    lineNumber: 435,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg font-bold text-[#142546]",
                                    children: "IMG"
                                }, void 0, false, {
                                    fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                    lineNumber: 443,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                lineNumber: 433,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-bold text-[#142546] mt-4",
                                children: producto
                            }, void 0, false, {
                                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                lineNumber: 447,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                        lineNumber: 429,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-4 -mt-4 rounded-xl p-4 text-white shadow-md",
                        style: {
                            backgroundColor: primaryColor
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs opacity-90",
                                children: "Monto de Préstamo"
                            }, void 0, false, {
                                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                lineNumber: 451,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: monto,
                                onChange: (e)=>setMonto(e.target.value),
                                placeholder: "$0.00",
                                className: "w-full bg-transparent text-3xl font-bold outline-none",
                                disabled: disabled
                            }, void 0, false, {
                                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                lineNumber: 452,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                        lineNumber: 450,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-5 flex flex-col gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-transparent rounded-xl border p-3 shadow-sm",
                                style: {
                                    backgroundColor: cardBg
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center py-3 border-b",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "Producto"
                                            }, void 0, false, {
                                                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                                lineNumber: 465,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-600",
                                                children: producto
                                            }, void 0, false, {
                                                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                                lineNumber: 466,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                        lineNumber: 464,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center py-3 border-b",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "Importe a Pagar"
                                            }, void 0, false, {
                                                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                                lineNumber: 470,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: importePagar,
                                                onChange: (e)=>setImportePagar(e.target.value),
                                                className: "text-gray-400 text-right w-28 bg-transparent font-semibold outline-none",
                                                disabled: disabled
                                            }, void 0, false, {
                                                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                                lineNumber: 471,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                        lineNumber: 469,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center py-3 border-b",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "Fecha Vencimiento"
                                            }, void 0, false, {
                                                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                                lineNumber: 481,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                value: fechaVencimiento,
                                                onChange: (e)=>setFechaVencimiento(e.target.value),
                                                className: "text-gray-400 text-right bg-transparent outline-none",
                                                disabled: disabled
                                            }, void 0, false, {
                                                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                                lineNumber: 482,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                        lineNumber: 480,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "Días vencimiento"
                                            }, void 0, false, {
                                                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                                lineNumber: 492,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-500",
                                                children: [
                                                    diasVencidos,
                                                    " días"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                                lineNumber: 493,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                        lineNumber: 491,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                lineNumber: 463,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-transparent rounded-xl p-3 shadow-sm",
                                style: {
                                    backgroundColor: cardBg
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-medium text-gray-700 mb-2",
                                        children: "Elige el método de pago"
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                        lineNumber: 498,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center bg-[#F8FAFB] p-4 rounded-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-gray-500",
                                                    children: "SPEI"
                                                }, void 0, false, {
                                                    fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                                    lineNumber: 501,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-lg md:text-xl lg:text-2xl font-extrabold text-gray-700 mt-1",
                                                    children: cuentaBancaria
                                                }, void 0, false, {
                                                    fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                                    lineNumber: 502,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                            lineNumber: 500,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                        lineNumber: 499,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                lineNumber: 497,
                                columnNumber: 11
                            }, this),
                            mostrarExtras && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-transparent rounded-xl p-3 shadow-sm",
                                style: {
                                    backgroundColor: cardBg
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center py-2 border-b",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "Nombre"
                                            }, void 0, false, {
                                                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                                lineNumber: 512,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "text-sm text-right bg-transparent outline-none text-gray-700",
                                                placeholder: "Nombre",
                                                value: nombre,
                                                onChange: (e)=>setNombre(e.target.value),
                                                disabled: disabled
                                            }, void 0, false, {
                                                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                                lineNumber: 513,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                        lineNumber: 511,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center py-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "Teléfono"
                                            }, void 0, false, {
                                                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                                lineNumber: 523,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "text-sm text-right bg-transparent outline-none text-gray-700",
                                                placeholder: "Teléfono",
                                                value: telefono,
                                                onChange: (e)=>setTelefono(e.target.value),
                                                disabled: disabled
                                            }, void 0, false, {
                                                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                                lineNumber: 524,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                        lineNumber: 522,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                lineNumber: 510,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleConfirmAndLock,
                                className: "w-full text-white p-3 rounded-xl text-lg font-semibold mt-2 disabled:opacity-60",
                                style: {
                                    backgroundColor: primaryColor
                                },
                                disabled: disabled,
                                type: "button",
                                children: saving ? "Generando link..." : "Confirmar y Generar Link"
                            }, void 0, false, {
                                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                                lineNumber: 535,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                        lineNumber: 462,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
                lineNumber: 425,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/multas/multas/app/gestion/multas/plantillas/[id]/page.jsx",
        lineNumber: 318,
        columnNumber: 5
    }, this);
}
_s(PagoFastCashForm, "rvVhZKbA/COdFnnHxlJbwhksgok=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = PagoFastCashForm;
var _c;
__turbopack_context__.k.register(_c, "PagoFastCashForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/multas/multas/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/multas/multas/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/multas/multas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/multas/multas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/multas/multas/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/multas/multas/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/multas/multas/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/multas/multas/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=multas_multas_4a68edbc._.js.map