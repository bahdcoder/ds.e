import React$1 from 'react';

const Margin = ({ space = 'xxxs', children, left, right, top, bottom }) => {
    let className = ``;
    if (!left && !right && !top && !bottom) {
        className = `dse-margin-${space}`;
    }
    if (left) {
        className = `${className} dse-margin-left-${space}`;
    }
    if (right) {
        className = `${className} dse-margin-right-${space}`;
    }
    if (top) {
        className = `${className} dse-margin-top-${space}`;
    }
    if (bottom) {
        className = `${className} dse-margin-bottom-${space}`;
    }
    return React$1.createElement("div", { className: className }, children);
};

export default Margin;
//# sourceMappingURL=Margin.js.map
