"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var classnames_1 = require("classnames");
var menu_1 = require("./menu");
exports.MenuItem = function (props) {
    var index = props.index, disabled = props.disabled, className = props.className, style = props.style, children = props.children;
    var menuContext = react_1.useContext(menu_1.MenuContext);
    var classes = classnames_1.default('menu-item', className, {
        'is-disabled': disabled,
        'is-active': index === menuContext.index
    });
    var handleSelect = function () {
        if (menuContext.onSelect && !disabled && (typeof index === 'string')) {
            menuContext.onSelect(index);
        }
    };
    return (react_1.default.createElement("li", { className: classes, style: style, onClick: handleSelect }, children));
};
exports.MenuItem.displayName = 'MenuItem';
exports.default = exports.MenuItem;
//# sourceMappingURL=menuItem.js.map