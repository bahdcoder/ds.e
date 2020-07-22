import React$1 from 'react';
import FontSizes from '../../foundation/FontSize.js';

const Text = ({ size = FontSizes.base, children }) => {
    const className = `dse-text-${size}`;
    return React$1.createElement("p", { className: className }, children);
};

export default Text;
//# sourceMappingURL=Text.js.map
