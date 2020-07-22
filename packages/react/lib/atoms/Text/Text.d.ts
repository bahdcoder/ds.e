import React from 'react';
import FontSizes from '../../foundation/FontSize';
interface TextProps {
    size?: keyof typeof FontSizes;
}
declare const Text: React.FC<TextProps>;
export default Text;
