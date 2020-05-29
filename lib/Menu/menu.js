"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var classnames_1 = require("classnames");
exports.MenuContext = react_1.createContext({ index: '0' });
var Menu = function (props) {
    var className = props.className, defaultIndex = props.defaultIndex, style = props.style, mode = props.mode, onSelect = props.onSelect, children = props.children, defaultOpenSubMenus = props.defaultOpenSubMenus;
    var _a = react_1.useState(defaultIndex), active = _a[0], setActive = _a[1];
    var classes = classnames_1.default('viking-menu', className, {
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
        defaultOpenSubMenus: defaultOpenSubMenus,
        mode: mode,
    };
    var renderChildren = function () {
        return react_1.default.Children.map(children, function (child, index) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                return react_1.default.cloneElement(childElement, { index: childElement.props.index ? childElement.props.index : index.toString() });
            }
            else {
                console.error("Warning: Menu has a child which is not a MenuItem component");
            }
        });
    };
    return (react_1.default.createElement("ul", { className: classes, style: style },
        react_1.default.createElement(exports.MenuContext.Provider, { value: contextVal }, renderChildren())));
};
Menu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizontal',
    defaultOpenSubMenus: []
};
exports.default = Menu;
//# sourceMappingURL=menu.js.map