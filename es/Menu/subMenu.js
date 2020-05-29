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
import React, { useContext, useState } from 'react';
import classnames from 'classnames';
import { MenuContext } from './menu';
import Icon from '../Icon';
import Transition from '../Transition';
var SubMenu = function (props) {
    var index = props.index, className = props.className, style = props.style, children = props.children, title = props.title, onTitleClick = props.onTitleClick;
    var context = useContext(MenuContext);
    var openedSubMenus = context.defaultOpenSubMenus;
    var isOpend = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false;
    var _a = useState(isOpend), open = _a[0], setOpen = _a[1];
    var classes = classnames('menu-item submenu-item', className, {
        'is-active': context.index === index,
        'is-opened': open,
        'is-vertical': context.mode === 'vertical'
    });
    var renderChild = function () {
        var subMenuClasses = classnames('viking-submenu', {
            'menu-opened': open
        });
        var items = React.Children.map(children, function (item, i) {
            var child = item;
            var displayName = child.type.displayName;
            if (displayName === 'MenuItem') {
                return React.cloneElement(child, {
                    index: child.props.index ? child.props.index : index + "-" + i,
                });
            }
            else {
                console.error("Warning: SubMenu has a child which is not a MenuItem component");
            }
        });
        return React.createElement(Transition, { timeout: 300, in: open, animation: "zoom-in-top" },
            React.createElement("ul", { className: subMenuClasses }, items));
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
    return (React.createElement("li", __assign({ key: index, className: classes, style: style }, hoverClick),
        React.createElement("div", __assign({ className: "submenu-title" }, clickEvents),
            title,
            React.createElement(Icon, { icon: "angle-down", className: "arrow-icon" })),
        renderChild()));
};
SubMenu.displayName = 'SubMenu';
export default SubMenu;
//# sourceMappingURL=subMenu.js.map