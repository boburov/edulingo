(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/api/api.config.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: "http://localhost:8000",
    headers: {
        Accept: "application/json"
    }
});
api.interceptors.request.use((config)=>{
    const token = localStorage.getItem("access_token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error)=>Promise.reject(error));
api.interceptors.response.use((response)=>response.data, (error)=>{
    if (error.response?.status === 404) {
        localStorage.removeItem("access_token");
    }
    return Promise.reject(error);
});
const __TURBOPACK__default__export__ = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/api/api.endpoint.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const apiEndpoints = {
    home: "/",
    // admin
    verifyAdmin: "/admin/verify",
    // playlists
    createplaylist: "/playlists/new",
    getPlaylistByName: (unique_name)=>`/playlists/${unique_name}`,
    getAllPlaylists: "/playlists",
    // lessons
    createNewLesson: (unique_name)=>`/playlists/${unique_name}/lessons/new`
};
const __TURBOPACK__default__export__ = apiEndpoints;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/api/services/playlistsService.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$api$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/api.config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$api$2e$endpoint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/api.endpoint.ts [app-client] (ecmascript)");
;
;
const playlistService = {
    create: (data)=>{
        try {
            console.log(data);
            return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$api$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$api$2e$endpoint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createplaylist, data);
        } catch (error) {
            throw error;
        }
    },
    getAll: ()=>{
        try {
            return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$api$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$api$2e$endpoint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getAllPlaylists);
        } catch (error) {
            throw error;
        }
    },
    getByUniqueName: (unique_name)=>{
        try {
            return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$api$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$api$2e$endpoint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getPlaylistByName(unique_name));
        } catch (error) {
            throw error;
        }
    },
    update: (unique_name, data)=>{
        try {
            return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$api$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].patch(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$api$2e$endpoint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getPlaylistByName(unique_name), data);
        } catch (error) {
            throw error;
        }
    },
    delete: (unique_name)=>{
        try {
            return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$api$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$api$2e$endpoint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getPlaylistByName(unique_name));
        } catch (error) {
            throw error;
        }
    }
};
const __TURBOPACK__default__export__ = playlistService;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreatePlaylistForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$services$2f$playlistsService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/services/playlistsService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$slices$2f$playlistSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/store/slices/playlistSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function CreatePlaylistForm() {
    _s();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [thumbnail, setThumbnail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Clean up preview URL on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreatePlaylistForm.useEffect": ()=>{
            return ({
                "CreatePlaylistForm.useEffect": ()=>{
                    if (preview) URL.revokeObjectURL(preview);
                }
            })["CreatePlaylistForm.useEffect"];
        }
    }["CreatePlaylistForm.useEffect"], [
        preview
    ]);
    const handleDrop = (e)=>{
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith("image/")) {
            setThumbnail(file);
            setPreview(URL.createObjectURL(file));
        }
    };
    const handleFileChange = (e)=>{
        const file = e.target.files?.[0];
        if (file && file.type.startsWith("image/")) {
            setThumbnail(file);
            setPreview(URL.createObjectURL(file));
        }
    };
    const validateForm = ()=>{
        if (!title || title.length < 10 || title.length > 140) {
            setError("Sarlavha 10 dan 140 ta belgigacha bo‘lishi kerak.");
            return false;
        }
        if (!description || description.length < 50 || description.length > 270) {
            setError("Tavsif 50 dan 270 ta belgigacha bo‘lishi kerak.");
            return false;
        }
        if (!thumbnail) {
            setError("Iltimos, sarlavha uchun rasm yuklang.");
            return false;
        }
        return true;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError(null);
        if (!validateForm()) return;
        if (!thumbnail) {
            return setError("Iltimos, sarlavha uchun rasm yuklang");
        }
        const data = {
            title,
            description,
            thumbnail
        };
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("thumbnail", data.thumbnail);
        try {
            setLoading(true);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$services$2f$playlistsService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create(formData);
            const res_playlist = res;
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$slices$2f$playlistSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushPlaylist"])(res_playlist));
            router.push(`/lessons/${res_playlist.unique_name}`);
        } catch (err) {
            if (err.response?.data?.message) {
                setError(err.response.data.message);
            } else {
                setError("Xatolik yuz berdi. Iltimos, qaytadan urinib ko‘ring.");
            }
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-semibold text-gray-800",
                children: "Yangi Playlist Yaratish"
            }, void 0, false, {
                fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: " font-medium text-gray-900",
                        children: "Dars nomi*"
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: title,
                        onChange: (e)=>setTitle(e.target.value),
                        required: true,
                        maxLength: 140,
                        minLength: 10,
                        autoFocus: true,
                        className: "global_input",
                        placeholder: "Masalan: Frontend asoslari"
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500",
                        children: "10–140 ta belgi ishlatish mumkin"
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: " font-medium text-gray-900",
                        children: "Darslar haqida*"
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: description,
                        onChange: (e)=>setDescription(e.target.value),
                        required: true,
                        minLength: 50,
                        maxLength: 270,
                        className: "global_input resize-none h-28",
                        placeholder: "Playlist tavsifi..."
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500",
                        children: "50–270 ta belgi ishlatish mumkin"
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onDrop: handleDrop,
                onDragOver: (e)=>e.preventDefault(),
                className: "border-2 border-dashed border-gray-300 rounded-xl space-y-2 p-6 flex flex-col items-center justify-center cursor-pointer hover:border-[#26a269] transition",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: " font-medium text-gray-900",
                        children: "Dars sarlavha rasmi*"
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        accept: "image/*",
                        onChange: handleFileChange,
                        className: "hidden",
                        id: "thumbnail"
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "thumbnail",
                        className: "flex flex-col items-center gap-3 text-center w-full",
                        children: preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: preview,
                            alt: "Thumbnail preview",
                            className: "w-full aspect-video object-cover rounded-xl"
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                            lineNumber: 153,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-500",
                                children: [
                                    "Drag & Drop yoki",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-500 underline",
                                        children: "Browse"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                                        lineNumber: 162,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                                lineNumber: 160,
                                columnNumber: 15
                            }, this)
                        }, void 0, false)
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500",
                        children: "Rasm 16:9 formatida bo‘lishi kerak"
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "font-medium text-gray-900 flex",
                children: "Saqlang*"
            }, void 0, false, {
                fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-600 bg-red-50 rounded-xl px-4 py-2 text-center",
                children: error
            }, void 0, false, {
                fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                lineNumber: 174,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "basic_button w-full disabled:opacity-70 disabled:cursor-not-allowed",
                disabled: loading,
                children: loading ? "Yaratilmoqda..." : "Playlistni yaratish"
            }, void 0, false, {
                fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_s(CreatePlaylistForm, "BkljEo+HtaqCEY9OeROZ3AQGu3c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CreatePlaylistForm;
var _c;
__turbopack_context__.k.register(_c, "CreatePlaylistForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_5a64e74c._.js.map