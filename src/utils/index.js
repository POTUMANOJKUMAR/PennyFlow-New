export const toCamelCase = (input) =>
    input.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) =>
        index === 0 ? letter.toLowerCase() : letter.toUpperCase()
    ).replace(/\s+/g, '');