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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var classnames_1 = require("classnames");
var menu_1 = require("./menu");
var Icon_1 = require("../Icon");
var Transition_1 = require("../Transition");
var SubMenu = function (props) {
    var index = props.index, className = props.className, style = props.style, children = props.children, title = props.title, onTitleClick = props.onTitleClick;
    var context = react_1.useContext(menu_1.MenuContext);
    var openedSubMenus = context.defaultOpenSubMenus;
    var isOpend = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false;
    var _a = react_1.useState(isOpend), open = _a[0], setOpen = _a[1];
    var classes = classnames_1.default('menu-item submenu-item', className, {
        'is-active': context.index === index,
        'is-opened': open,
        'is-vertical': context.mode === 'vertical'
    });
    var renderChild = function () {
        var subMenuClasses = classnames_1.default('viking-submenu', {
            'menu-opened': open
        });
        var items = react_1.default.Children.map(children, function (item, i) {
            var child = item;
            var displayName = child.type.displayName;
            if (displayName === 'MenuItem') {
                return react_1.default.cloneElement(child, {
                    index: child.props.index ? child.props.index : index + "-" + i,
                });
            }
            else {
                console.error("Warning: SubMenu has a child which is not a MenuItem component");
            }
        });
        return react_1.default.createElement(Transition_1.default, { timeout: 300, in: open, animation: "zoom-in-top" },
            react_1.default.createElement("ul", { className: subMenuClasses }, items));
    };
    var handleClick = function (e) {
        e.preventDefault();
        setOpen(!open);
        if (onTitleClick && index) {
            onTitleClick(index, e);
        }
    };
    var timer;
    var handleHover = function (e, isOpen) {
        e.preventDefault();
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            setOpen(isOpen);
        }, 300);
    };
    var clickEvents = context.mode === 'vertical' ? {
        onClick: handleClick
    } : {};
    var hoverClick = context.mode !== 'vertical' ? {
        onMouseEnter: function (e) { handleHover(e, true); },
        onMouseLeave: function (e) { handleHover(e, false); }
    } : {};
    return (react_1.default.createElement("li", __assign({ key: index, className: classes, style: style }, hoverClick),
        react_1.default.createElement("div", __assign({ className: "submenu-title" }, clickEvents),
            title,
            react_1.default.createElement(Icon_1.default, { icon: "angle-down", className: "arrow-icon" })),
        renderChild()));
};
SubMenu.displayName = 'SubMenu';
exports.default = SubMenu;
//# sourceMappingURL=subMenu.js.map