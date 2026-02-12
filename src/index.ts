import * as cssColorNames from 'css-color-names';

export function expandToHexColor(
  string: string,
  outputTextCase: 'uppercase'|'lowercase' = 'uppercase',
  includeHexSymbol = true,
  customColorMapping?: Record<string, string>
) {

    let hex: string;

    // check if string matches a custom color mapping (e.g. design tokens, theme colors)
    if (customColorMapping?.[string.toLowerCase()]) {
        hex = customColorMapping[string.toLowerCase()].replace("#", "");
    }
    // check if string is a valid css color name
    else if (cssColorNames[string.toLowerCase()]) {
        hex = cssColorNames[string.toLowerCase()].replace("#", "");
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
        if (hex.length === 3 || hex.length === 5) {
          hex = hex
            .substring(0, 3)
            .split("")
            .map((char) => char + char)
            .join("");
        }

        if (hex.length === 4) {
          hex = hex
            .split("")
            .map((char) => char + char)
            .join("");
        }
    }

    // A final check to make sure the hex value is valid
    if (hex.length === 6 || hex.length === 8) {
        if (includeHexSymbol) {
            hex = `#${hex}`;
        }

        return outputTextCase === 'lowercase' ? hex.toLowerCase() : hex.toUpperCase();
    }

    // If everything fails, return null
    return null;
}
