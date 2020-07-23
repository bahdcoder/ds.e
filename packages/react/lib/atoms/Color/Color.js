import React$1 from 'react';
import { Spacing } from '@ds.e/foundation';

const Color = ({ hexCode, width = Spacing.sm, height = Spacing.sm }) => {
    const className = `dse-width-${width} dse-height-${height}`;
    return React$1.createElement("div", { className: className, style: {
            backgroundColor: hexCode,
        } });
};

export default Color;
//# sourceMappingURL=Color.js.map
