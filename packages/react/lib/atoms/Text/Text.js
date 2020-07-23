import React$1 from 'react';
import { FontSize } from '@ds.e/foundation';

const Text = ({ size = FontSize.base, children }) => {
    const className = `dse-text dse-text-${size}`;
    return React$1.createElement("p", { className: className }, children);
};

export default Text;
//# sourceMappingURL=Text.js.map
