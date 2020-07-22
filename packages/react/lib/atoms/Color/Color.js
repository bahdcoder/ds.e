import React$1 from 'react';
import Spacing$1 from '../../foundation/Spacing.js';

const Color = ({ hexCode, width = Spacing$1.sm, height = Spacing$1.sm }) => {
    const className = `dse-width-${width} dse-height-${height}`;
    return React$1.createElement("div", { className: className, style: {
            backgroundColor: hexCode,
        } });
};

export default Color;
//# sourceMappingURL=Color.js.map
