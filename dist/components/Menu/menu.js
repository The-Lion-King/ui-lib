import React, { createContext, useState } from 'react';
import classnames from 'classnames';
export var MenuContext = createContext({ index: '0' });
var Menu = function (props) {
    var className = props.className, defaultIndex = props.defaultIndex, style = props.style, mode = props.mode, onSelect = props.onSelect, children = props.children;
    var _a = useState(defaultIndex), active = _a[0], setActive = _a[1];
    var classes = classnames('viking-menu', className, {
        'menu-horizontal': mode === 'horizontal',
        'menu-vertical': mode === 'vertical'
    });
    var handleSelect = function (index) {
        setActive(index);
        if (onSelect) {
            onSelect(index);
        }
    };
    var contextVal = {
        index: active ? active : '0',
        onSelect: handleSelect,
    };
    var renderChildren = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === 'MenuItem') {
                return React.cloneElement(childElement, { index: index.toString() });
            }
            else {
                console.error("Warning: Menu has a child which is not a MenuItem component");
            }
        });
    };
    return (React.createElement("ul", { className: classes, style: style },
        React.createElement(MenuContext.Provider, { value: contextVal }, renderChildren())));
};
Menu.defaultProps = { defaultIndex: '0', mode: 'horizontal' };
export default Menu;
