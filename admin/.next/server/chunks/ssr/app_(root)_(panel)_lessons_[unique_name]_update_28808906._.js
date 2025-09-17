module.exports = {

"[project]/app/(root)/(panel)/lessons/[unique_name]/update/UpdatePlaylistForm.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>UpdatePlaylistForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$services$2f$playlistsService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api/services/playlistsService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$slices$2f$playlistSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/store/slices/playlistSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f28$panel$292f$lessons$2f5b$unique_name$5d2f$layout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(root)/(panel)/lessons/[unique_name]/layout.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function UpdatePlaylistForm() {
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { playlist, setPlaylist } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f28$panel$292f$lessons$2f5b$unique_name$5d2f$layout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlobalContext"]);
    // form data
    const [thumbnail, setThumbnail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(playlist.thumbnail);
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(playlist.title);
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(playlist.description);
    // Clean up preview URL on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (preview) URL.revokeObjectURL(preview);
        };
    }, [
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
        return true;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError(null);
        if (!validateForm()) return;
        const data = {
            title,
            description,
            ...thumbnail && {
                thumbnail
            }
        };
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        if (thumbnail) {
            formData.append("thumbnail", data.thumbnail);
        }
        try {
            setLoading(true);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$services$2f$playlistsService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].update(playlist.unique_name, formData);
            const res_playlist = res;
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$store$2f$slices$2f$playlistSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replacePlaylist"])(res_playlist));
            setPlaylist(res_playlist);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: " font-medium text-gray-900",
                        children: "Dars nomi*"
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/(panel)/lessons/[unique_name]/update/UpdatePlaylistForm.tsx",
                        lineNumber: 105,
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
                        className: "global_input",
                        placeholder: "Masalan: Frontend asoslari"
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/(panel)/lessons/[unique_name]/update/UpdatePlaylistForm.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500",
                        children: "10–140 ta belgi ishlatish mumkin"
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/(panel)/lessons/[unique_name]/update/UpdatePlaylistForm.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(root)/(panel)/lessons/[unique_name]/update/UpdatePlaylistForm.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: " font-medium text-gray-900",
                        children: "Darslar haqida*"
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/(panel)/lessons/[unique_name]/update/UpdatePlaylistForm.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: description,
                        onChange: (e)=>setDescription(e.target.value),
                        required: true,
                        minLength: 50,
                        maxLength: 270,
                        className: "global_input resize-none h-28",
                        placeholder: "Playlist tavsifi..."
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/(panel)/lessons/[unique_name]/update/UpdatePlaylistForm.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500",
                        children: "50–270 ta belgi ishlatish mumkin"
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/(panel)/lessons/[unique_name]/update/UpdatePlaylistForm.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(root)/(panel)/lessons/[unique_name]/update/UpdatePlaylistForm.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onDrop: handleDrop,
                onDragOver: (e)=>e.preventDefault(),
                className: "border-2 border-dashed border-gray-300 rounded-xl space-y-2 p-6 flex flex-col items-center justify-center cursor-pointer hover:border-[#26a269] transition",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: " font-medium text-gray-900",
                        children: "Dars sarlavha rasmi*"
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/(panel)/lessons/[unique_name]/update/UpdatePlaylistForm.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        accept: "image/*",
                        onChange: handleFileChange,
                        className: "hidden",
                        id: "thumbnail"
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/(panel)/lessons/[unique_name]/update/UpdatePlaylistForm.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "thumbnail",
                        className: "flex flex-col items-center gap-3 text-center w-full",
                        children: preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: preview,
                            alt: "Thumbnail preview",
                            className: "w-full aspect-video object-cover rounded-xl"
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/(panel)/lessons/[unique_name]/update/UpdatePlaylistForm.tsx",
                            lineNumber: 156,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-500",
                                children: [
                                    "Drag & Drop yoki",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-500 underline",
                                        children: "Browse"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/(panel)/lessons/[unique_name]/update/UpdatePlaylistForm.tsx",
                                        lineNumber: 165,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(root)/(panel)/lessons/[unique_name]/update/UpdatePlaylistForm.tsx",
                                lineNumber: 163,
                                columnNumber: 15
                            }, this)
                        }, void 0, false)
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/(panel)/lessons/[unique_name]/update/UpdatePlaylistForm.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500",
                        children: "Rasm 16:9 formatida bo‘lishi kerak"
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/(panel)/lessons/[unique_name]/update/UpdatePlaylistForm.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(root)/(panel)/lessons/[unique_name]/update/UpdatePlaylistForm.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "font-medium text-gray-900 flex",
                children: "Saqlang*"
            }, void 0, false, {
                fileName: "[project]/app/(root)/(panel)/lessons/[unique_name]/update/UpdatePlaylistForm.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-600 bg-red-50 rounded-xl px-4 py-2 text-center",
                children: error
            }, void 0, false, {
                fileName: "[project]/app/(root)/(panel)/lessons/[unique_name]/update/UpdatePlaylistForm.tsx",
                lineNumber: 177,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "basic_button w-full disabled:opacity-70 disabled:cursor-not-allowed",
                disabled: loading,
                children: loading ? "Tahrirlanmoqda..." : "Playlistni tahrirlash"
            }, void 0, false, {
                fileName: "[project]/app/(root)/(panel)/lessons/[unique_name]/update/UpdatePlaylistForm.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(root)/(panel)/lessons/[unique_name]/update/UpdatePlaylistForm.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/(root)/(panel)/lessons/[unique_name]/update/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PlaylistUpdatePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$global_components$292f$Heading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(global_components)/Heading.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f28$panel$292f$lessons$2f5b$unique_name$5d2f$update$2f$UpdatePlaylistForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(root)/(panel)/lessons/[unique_name]/update/UpdatePlaylistForm.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function PlaylistUpdatePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$global_components$292f$Heading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: "Tahrirlash"
            }, void 0, false, {
                fileName: "[project]/app/(root)/(panel)/lessons/[unique_name]/update/page.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f28$panel$292f$lessons$2f5b$unique_name$5d2f$update$2f$UpdatePlaylistForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/(root)/(panel)/lessons/[unique_name]/update/page.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(root)/(panel)/lessons/[unique_name]/update/page.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=app_%28root%29_%28panel%29_lessons_%5Bunique_name%5D_update_28808906._.js.map