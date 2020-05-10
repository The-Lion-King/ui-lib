import React, { useContext } from 'react';
import classnames from 'classnames';
import { MenuContext } from './menu';
export var MenuItem = function (props) {
    var index = props.index, disabled = props.disabled, className = props.className, style = props.style, children = props.children;
    var menuContext = useContext(MenuContext);
    var classes = classnames('menu-item', className, {
        'is-disabled': disabled,
        'is-active': index === menuContext.index
    });
    var handleSelect = function () {
        if (menuContext.onSelect && !disabled && (typeof index === 'string')) {
            menuContext.onSelect(index);
        }
    };
    return (React.createElement("li", { className: classes, style: style, onClick: handleSelect }, children));
};
MenuItem.displayName = 'MenuItem';
export default MenuItem;
