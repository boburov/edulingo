module.exports = {

"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[project]/app/api/api.config.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: "http://localhost:8000",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});
api.interceptors.request.use((config)=>{
    const token = localStorage.getItem("access_token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error)=>{
    return Promise.reject(error);
});
api.interceptors.response.use((response)=>{
    return response.data;
}, (error)=>{
    if (error.response && error.response?.status === 404) {
        localStorage.removeItem("token");
    }
    return Promise.reject(error);
});
const __TURBOPACK__default__export__ = api;
}}),
"[project]/app/api/api.endpoint.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
    getAllPlaylists: "/playlists"
};
const __TURBOPACK__default__export__ = apiEndpoints;
}}),
"[project]/app/api/services/playlistsService.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$api$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/api.config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$api$2e$endpoint$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/api.endpoint.ts [app-ssr] (ecmascript)");
;
;
const playlistService = {
    create: (data)=>{
        try {
            return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$api$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$api$2e$endpoint$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createplaylist, data);
        } catch (error) {
            throw error;
        }
    },
    getAll: ()=>{
        try {
            return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$api$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$api$2e$endpoint$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getAllPlaylists);
        } catch (error) {
            throw error;
        }
    },
    getByUniqueName: (unique_name)=>{
        try {
            return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$api$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$api$2e$endpoint$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getPlaylistByName(unique_name));
        } catch (error) {
            throw error;
        }
    }
};
const __TURBOPACK__default__export__ = playlistService;
}}),
"[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreatePlaylistForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$services$2f$playlistsService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/services/playlistsService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$slices$2f$playlistSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/store/slices/playlistSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function CreatePlaylistForm() {
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [thumbnail, setThumbnail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
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
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!thumbnail) {
            alert("Iltimos sarlavha rasmini joylang");
            return;
        }
        const data = {
            title,
            description,
            thumbnail
        };
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("file", data.thumbnail);
        try {
            setLoading(true);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$services$2f$playlistsService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create(formData);
            console.log(res);
            const res_playlist = res;
            console.log(res_playlist);
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$slices$2f$playlistSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pushPlaylist"])(res_playlist));
            setLoading(false);
            alert("Playlist created!");
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data.message || "An error occurred while validating the password.");
            }
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-5 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-semibold text-gray-800",
                children: "Malumotlarni kiriting"
            }, void 0, false, {
                fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium text-gray-900",
                        children: "Dars nomi*"
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: title,
                        onChange: (e)=>setTitle(e.target.value),
                        required: true,
                        maxLength: 140,
                        minLength: 10,
                        autoFocus: true,
                        className: "global_input"
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "block text-sm font-medium text-gray-700",
                        children: "10 dan 140 tagacha harf ishlatish mumkin!"
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium text-gray-900",
                        children: "Darslar haqida*"
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: description,
                        onChange: (e)=>setDescription(e.target.value),
                        required: true,
                        minLength: 50,
                        maxLength: 270,
                        className: "global_input resize-none"
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "block text-sm font-medium text-gray-700",
                        children: "50 dan 270 tagacha harf ishlatish mumkin!"
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onDrop: handleDrop,
                onDragOver: (e)=>e.preventDefault(),
                className: "border-2 border-dashed border-gray-300 space-y-2 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:border-[#26a269] transition",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium text-gray-900",
                        children: "Dars sarlavha rasmi*"
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        accept: "image/*",
                        onChange: handleFileChange,
                        className: "hidden",
                        id: "thumbnail"
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "thumbnail",
                        className: "cursor-pointer text-center",
                        children: preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: preview,
                            alt: "Thumbnail preview",
                            className: "w-full aspect-video object-cover rounded-xl mx-auto"
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                            lineNumber: 136,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-gray-500",
                            children: [
                                "Drag & Drop your thumbnail or",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-blue-500 underline",
                                    children: "Browse"
                                }, void 0, false, {
                                    fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                            lineNumber: 142,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "block text-sm font-medium text-gray-700",
                        children: 'rasm "16x9" formatida saqlanadi!'
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full",
                children: error !== "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-600 bg-red-600/10 rounded-xl px-4 py-2 text-center",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                    lineNumber: 155,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-medium text-gray-900",
                children: "Saqlang*"
            }, void 0, false, {
                fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "basic_button w-full",
                children: loading ? "yaratilmoqda..." : "Darslarni yaratish"
            }, void 0, false, {
                fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(root)/(panel)/lessons/new/NewPlaylistForm.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__52f8ce16._.js.map