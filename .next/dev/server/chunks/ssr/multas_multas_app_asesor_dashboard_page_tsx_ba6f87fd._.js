module.exports = [
"[project]/multas/multas/app/asesor/dashboard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardAsesorPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/multas/multas/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-ssr] (ecmascript) <export default as LayoutGrid>");
"use client";
;
;
;
;
function DashboardAsesorPage() {
    const [plantillas, setPlantillas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const fetchPlantillas = async ()=>{
        setLoading(true);
        try {
            const res = await fetch("/api/plantillas", {
                cache: "no-store"
            });
            if (!res.ok) throw new Error("Error al cargar plantillas");
            const data = await res.json();
            setPlantillas(Array.isArray(data) ? data : []);
        } catch  {
            setPlantillas([
                {
                    id: 1,
                    nombre: "Plantilla A",
                    subproducto: "Crédito Personal",
                    url: null
                },
                {
                    id: 2,
                    nombre: "Plantilla B",
                    subproducto: "Préstamo Vehicular",
                    url: null
                }
            ]);
            setToast("Mostrando datos de ejemplo");
            setTimeout(()=>setToast(""), 1500);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchPlantillas();
    }, []);
    return(// ✅ Aquí NO ponemos background ni main con paddingLeft (eso ya lo hace el layout)
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl sm:text-4xl font-semibold tracking-tight",
                                children: "Dashboard Asesor"
                            }, void 0, false, {
                                fileName: "[project]/multas/multas/app/asesor/dashboard/page.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 mt-2",
                                children: "Selecciona una plantilla para editar."
                            }, void 0, false, {
                                fileName: "[project]/multas/multas/app/asesor/dashboard/page.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/multas/multas/app/asesor/dashboard/page.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "   hidden sm:flex items-center gap-2   px-4 py-2 rounded-2xl   bg-white/60 backdrop-blur-xl   border border-slate-200/60   shadow-sm   text-sm text-slate-600   ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/multas/multas/app/asesor/dashboard/page.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            "Plantillas"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/multas/multas/app/asesor/dashboard/page.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/multas/multas/app/asesor/dashboard/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 rounded-2xl bg-white/60 border border-slate-200/60 px-4 py-3 text-slate-700 shadow-sm",
                children: toast
            }, void 0, false, {
                fileName: "[project]/multas/multas/app/asesor/dashboard/page.tsx",
                lineNumber: 70,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 border-t border-slate-200/70"
            }, void 0, false, {
                fileName: "[project]/multas/multas/app/asesor/dashboard/page.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-8",
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-3xl bg-white/55 border border-slate-200/60 shadow-[0_8px_30px_rgba(15,23,42,0.06)] p-6 text-slate-500",
                    children: "Cargando plantillas…"
                }, void 0, false, {
                    fileName: "[project]/multas/multas/app/asesor/dashboard/page.tsx",
                    lineNumber: 80,
                    columnNumber: 11
                }, this) : plantillas.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-3xl bg-white/55 border border-slate-200/60 shadow-[0_8px_30px_rgba(15,23,42,0.06)] p-6 text-slate-500",
                    children: "No hay plantillas disponibles."
                }, void 0, false, {
                    fileName: "[project]/multas/multas/app/asesor/dashboard/page.tsx",
                    lineNumber: 84,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: plantillas.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: `/asesor/plantilla/${p.id}`,
                            className: "   group   rounded-3xl   bg-white/55 backdrop-blur-xl   border border-slate-200/60   shadow-[0_8px_30px_rgba(15,23,42,0.06)]   p-5   hover:shadow-[0_12px_40px_rgba(15,23,42,0.10)]   hover:-translate-y-0.5   transition   flex flex-col   ",
                            children: [
                                p.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: p.url,
                                    alt: p.subproducto || `Plantilla ${p.id}`,
                                    className: "w-full h-36 object-cover rounded-2xl border border-slate-200/60 bg-white/60"
                                }, void 0, false, {
                                    fileName: "[project]/multas/multas/app/asesor/dashboard/page.tsx",
                                    lineNumber: 107,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-36 rounded-2xl border border-slate-200/60 bg-white/60 flex items-center justify-center text-slate-500",
                                    children: "Sin imagen"
                                }, void 0, false, {
                                    fileName: "[project]/multas/multas/app/asesor/dashboard/page.tsx",
                                    lineNumber: 113,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-semibold text-slate-900 truncate",
                                            children: p.nombre || `Plantilla #${p.id}`
                                        }, void 0, false, {
                                            fileName: "[project]/multas/multas/app/asesor/dashboard/page.tsx",
                                            lineNumber: 119,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-slate-500 mt-1 truncate",
                                            children: [
                                                "Subproducto: ",
                                                p.subproducto || "—"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/multas/multas/app/asesor/dashboard/page.tsx",
                                            lineNumber: 122,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/multas/multas/app/asesor/dashboard/page.tsx",
                                    lineNumber: 118,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multas$2f$multas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "   w-full text-center   px-4 py-3 rounded-2xl   bg-gradient-to-r from-sky-700 to-slate-800   text-white font-semibold   shadow-sm   group-hover:from-sky-800 group-hover:to-slate-900   transition   ",
                                        children: "Editar →"
                                    }, void 0, false, {
                                        fileName: "[project]/multas/multas/app/asesor/dashboard/page.tsx",
                                        lineNumber: 128,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/multas/multas/app/asesor/dashboard/page.tsx",
                                    lineNumber: 127,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, p.id, true, {
                            fileName: "[project]/multas/multas/app/asesor/dashboard/page.tsx",
                            lineNumber: 90,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/multas/multas/app/asesor/dashboard/page.tsx",
                    lineNumber: 88,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/multas/multas/app/asesor/dashboard/page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/multas/multas/app/asesor/dashboard/page.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this));
}
}),
];

//# sourceMappingURL=multas_multas_app_asesor_dashboard_page_tsx_ba6f87fd._.js.map