import React$1, { useState } from 'react';

const Select = ({ options = [], label = 'Please select an option ...', onOptionSelected: handler }) => {
    const [isOpen, setIsOpen] = useState(false);
    const onOptionSelected = (option, optionIndex) => {
        if (handler) {
            handler(option, optionIndex);
        }
    };
    const onLabelClick = () => {
        setIsOpen(!isOpen);
    };
    return React$1.createElement("div", null,
        React$1.createElement("button", { onClick: () => onLabelClick() }, label),
        isOpen ? (React$1.createElement("ul", null, options.map((option, optionIndex) => {
            return React$1.createElement("li", { onClick: () => onOptionSelected(option, optionIndex), key: option.value }, option.label);
        }))) : null);
};

export default Select;
//# sourceMappingURL=Select.js.map
