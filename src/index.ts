export function expandToHexColor(
  string: string,
  outputTextCase: 'uppercase'|'lowercase' = 'uppercase',
  includeHexSymbol: boolean = true
) {
    const cssColorNames = require('css-color-names');
    let hex: string;

    // check if string is a valid css color name
    if (cssColorNames[string]) {
        hex = cssColorNames[string].replace("#", "");
    } else {
        // Remove the hash symbol if it exists + remove all non-hex characters
        hex = string.replace("#", "").replace(/[^0-9a-fA-F]/g, "");

        // If the hex value has 1 character, expand it to 6 characters
        if (hex.length === 1) {
            hex = hex.repeat(6);
        }

        // If the hex value has 2 characters, expand it to 6 characters
        if (hex.length === 2) {
            hex = hex.repeat(3);
        }

        // If the hex value has 3 characters, expand it to 6 characters
        if (hex.length >= 3 && hex.length <= 5) {
            hex = hex.substring(0, 3)
              .split("")
              .map((char) => char + char)
              .join("");
        }
    }

    // A final check to make sure the hex value is valid
    if (hex.length === 6) {
        if (includeHexSymbol) {
            hex = `#${hex}`;
        }

        return outputTextCase === 'lowercase' ? hex.toLowerCase() : hex.toUpperCase();
    }

    // If everything fails, return null
    return null;
}
