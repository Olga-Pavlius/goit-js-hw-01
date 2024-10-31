function getElementWidth(content, padding, border) {
    const numberContent = Number.parseInt(content);
    const numberPadding = Number.parseInt(padding);
    const numberBorder = Number.parseFloat(border);
    const boxSizing = numberContent + numberPadding + numberPadding + numberBorder + numberBorder;
    return boxSizing;
}


console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px"));