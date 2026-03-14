(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/StarScene.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StarScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
// 用 Canvas 生成一個柔邊圓形漸層，模擬雲霧團
function createCloudTexture() {
    const size = 256;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    const cx = size / 2;
    const gradient = ctx.createRadialGradient(cx, cx, 0, cx, cx, cx);
    gradient.addColorStop(0, 'rgba(200, 210, 255, 0.18)');
    gradient.addColorStop(0.4, 'rgba(180, 190, 240, 0.10)');
    gradient.addColorStop(1, 'rgba(150, 160, 220, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](canvas);
}
function StarScene() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "9cf1a894b00d36efe0cc5aaf2b7796e8cafb831f4b81a9d22ac2c0103fc96ece") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9cf1a894b00d36efe0cc5aaf2b7796e8cafb831f4b81a9d22ac2c0103fc96ece";
    }
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "StarScene[useEffect()]": ()=>{
                const canvas = canvasRef.current;
                const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                    canvas,
                    antialias: false,
                    alpha: true
                });
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.setClearColor(0, 1);
                const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
                scene.fog = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FogExp2"](0, 0.0008);
                const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 0.1, 3000);
                camera.position.z = 0;
                const texture = createCloudTexture();
                const clouds = Array.from({
                    length: 80
                }, {
                    "StarScene[useEffect() > Array.from()]": ()=>{
                        const sprite = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sprite"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpriteMaterial"]({
                            map: texture,
                            transparent: true,
                            blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                            depthWrite: false,
                            opacity: Math.random() * 0.5 + 0.15
                        }));
                        const size = Math.random() * 600 + 200;
                        sprite.scale.set(size, size, 1);
                        sprite.position.set((Math.random() - 0.5) * 2000, (Math.random() - 0.5) * 1200, -Math.random() * 2000);
                        sprite.userData = {
                            speedZ: Math.random() * 0.8 + 0.3,
                            driftX: (Math.random() - 0.5) * 0.3,
                            driftY: (Math.random() - 0.5) * 0.15
                        };
                        scene.add(sprite);
                        return sprite;
                    }
                }["StarScene[useEffect() > Array.from()]"]);
                let animId;
                function animate() {
                    animId = requestAnimationFrame(animate);
                    clouds.forEach(_StarSceneUseEffectAnimateCloudsForEach);
                    renderer.render(scene, camera);
                }
                animate();
                const onResize = {
                    "StarScene[useEffect() > onResize]": ()=>{
                        camera.aspect = window.innerWidth / window.innerHeight;
                        camera.updateProjectionMatrix();
                        renderer.setSize(window.innerWidth, window.innerHeight);
                    }
                }["StarScene[useEffect() > onResize]"];
                window.addEventListener("resize", onResize);
                return ()=>{
                    cancelAnimationFrame(animId);
                    window.removeEventListener("resize", onResize);
                    texture.dispose();
                    renderer.dispose();
                };
            }
        })["StarScene[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            style: {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
                pointerEvents: "none"
            }
        }, void 0, false, {
            fileName: "[project]/components/StarScene.js",
            lineNumber: 107,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_s(StarScene, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = StarScene;
function _StarSceneUseEffectAnimateCloudsForEach(sprite_0) {
    const { speedZ, driftX, driftY } = sprite_0.userData;
    sprite_0.position.z = sprite_0.position.z + speedZ;
    sprite_0.position.x = sprite_0.position.x + driftX;
    sprite_0.position.y = sprite_0.position.y + driftY;
    if (sprite_0.position.z > 200) {
        sprite_0.position.set((Math.random() - 0.5) * 2000, (Math.random() - 0.5) * 1200, -2000);
    }
}
var _c;
__turbopack_context__.k.register(_c, "StarScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/StarScene.js [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/StarScene.js [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_StarScene_c79de113.js.map