(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ImageScroll.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImageScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const images = [
    '2',
    '3',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11'
];
const directions = [
    {
        x: '180%',
        y: '0%'
    },
    {
        x: '-180%',
        y: '0%'
    }
];
function ImageScroll() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "217e87feae88a72af0c63c0a9e91738f578a74b86e246d2e7bf7d96d26744eaa") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "217e87feae88a72af0c63c0a9e91738f578a74b86e246d2e7bf7d96d26744eaa";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(_ImageScrollUseEffect, t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "relative",
                zIndex: 1
            },
            children: images.map(_ImageScrollImagesMap)
        }, void 0, false, {
            fileName: "[project]/components/ImageScroll.js",
            lineNumber: 33,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_s(ImageScroll, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ImageScroll;
function _ImageScrollImagesMap(num) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "zoom-container",
        style: {
            position: "relative",
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            className: "zoom-image",
            src: `/images/${num}.webp`,
            alt: num,
            style: {
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "480px",
                height: "480px",
                objectFit: "cover",
                borderRadius: "16px",
                transformOrigin: "center center",
                boxShadow: "0 0 60px rgba(180,160,255,0.4)",
                willChange: "transform, opacity"
            }
        }, void 0, false, {
            fileName: "[project]/components/ImageScroll.js",
            lineNumber: 51,
            columnNumber: 6
        }, this)
    }, num, false, {
        fileName: "[project]/components/ImageScroll.js",
        lineNumber: 44,
        columnNumber: 10
    }, this);
}
function _ImageScrollUseEffect() {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
    const sections = document.querySelectorAll(".zoom-container");
    sections.forEach(_ImageScrollUseEffectSectionsForEach);
    return _temp;
}
function _temp() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach(_ImageScrollUseEffectAnonymousAnonymous);
}
function _ImageScrollUseEffectAnonymousAnonymous(t) {
    return t.kill();
}
function _ImageScrollUseEffectSectionsForEach(section, i) {
    const img = section.querySelector(".zoom-image");
    const dir = directions[i % directions.length];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(img, {
        scale: 0.2,
        xPercent: -50,
        yPercent: -50,
        x: 0,
        y: 0,
        opacity: 0
    });
    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
        scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=2000",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            onEnter: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(img, {
                    opacity: 0.8
                }),
            onLeaveBack: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(img, {
                    opacity: 0
                })
        }
    });
    tl.to(img, {
        scale: 1.5,
        x: dir.x,
        y: dir.y,
        opacity: 0,
        ease: "power2.in",
        duration: 2
    });
}
var _c;
__turbopack_context__.k.register(_c, "ImageScroll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ImageScroll.js [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/ImageScroll.js [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_ImageScroll_2df6b042.js.map