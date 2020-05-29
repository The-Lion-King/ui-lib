"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var IconCustom_1 = require("./IconCustom");
function isValidCustomScriptUrl(scriptUrl) {
    return typeof scriptUrl === 'string' && Boolean(scriptUrl.length);
}
function createScriptUrl(scriptUrls, index) {
    if (index === void 0) { index = 0; }
    var currentScriptUrl = scriptUrls[index];
    if (isValidCustomScriptUrl(currentScriptUrl)) {
        var script = document.createElement('script');
        script.setAttribute('src', currentScriptUrl);
        script.setAttribute('data-namespace', currentScriptUrl);
        if (scriptUrls.length > index + 1) {
            script.onload = function () {
                createScriptUrl(scriptUrls, index + 1);
            };
            script.onerror = function () {
                createScriptUrl(scriptUrls, index + 1);
            };
        }
        document.body.appendChild(script);
    }
}
var Create = function (props) {
    var scriptUrl = props.scriptUrl;
    if (typeof document !== 'undefined' &&
        typeof window !== 'undefined' &&
        typeof document.createElement === 'function') {
        if (Array.isArray(scriptUrl)) {
            createScriptUrl(scriptUrl.reverse());
        }
        else {
            createScriptUrl([scriptUrl]);
        }
    }
    var IconFont = function (createProps) {
        var icon = createProps.icon, restProps = __rest(createProps, ["icon"]);
        var content = null;
        if (icon) {
            content = react_1.default.createElement("use", { xlinkHref: "#" + icon });
        }
        return (react_1.default.createElement(IconCustom_1.default, __assign({}, restProps), content));
    };
    return IconFont;
};
exports.default = Create;
//# sourceMappingURL=IconCreate.js.map