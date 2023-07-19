# expand-to-hex-color

A simple utility that expands any string to valid full hex color.

## Install

```bash
npm install --save expand-to-hex-color
```

## Usage

```js
import { expandToHexColor } from 'expand-to-hex-color';
```

## Output
```js
expandToHexColor('fff'); // returns '#FFFFFF'
expandToHexColor('000'); // returns '#000000'
expandToHexColor('f'); // returns '#FFFFFF'
expandToHexColor('0'); // returns '#000000'
expandToHexColor('ff'); // returns '#FFFFFF'
expandToHexColor('00'); // returns '#000000'
expandToHexColor('f0'); // returns '#F0F0F0'
expandToHexColor('0f'); // returns '#0F0F0F'
expandToHexColor('ff0'); // returns '#FFFF00'
expandToHexColor('0ff'); // returns '#00FFFF'
expandToHexColor('000000'); // returns '#000000'
expandToHexColor('ffffff'); // returns '#FFFFFF'
expandToHexColor('00000000'); // returns '#000000'

/* Converts color name to hex */
expandToHexColor('red'); // returns '#FF0000'
expandToHexColor('blue'); // returns '#0000FF'
expandToHexColor('aliceblue'); // returns '#F0F8FF'
expandToHexColor('purple'); // returns '#800080'
expandToHexColor('linen'); // returns '#FAF0E6'

/* With additional formatting options */
expandToHexColor('xzzc7', 'lowercase'); // returns '#c7c7c7'
expandToHexColor('C13', 'lowercase'); // returns '#cc1133'
expandToHexColor('c13', 'lowercase', false); // returns 'cc1133' (no hex symbol)

/* Fallback for any hex-invalid string (removes non-hex characters first) */
expandToHexColor('batman'); // 'batman' -> 'baa' -> returns '#BBAAAA'
expandToHexColor('invalid string'); // 'invalid string' -> 'ad' -> returns '#ADADAD'
expandToHexColor('xxz'); // no valid hex-characters, returns null
expandToHexColor(''); // no valid hex-characters, returns null
expandToHexColor(' '); // no valid hex-characters, returns null
```

## API
| Property           | Values                           | Default value | Description                                              |
|--------------------|----------------------------------|---------------|----------------------------------------------------------|
| `string`           | `string`                         | N/A           | String to be converted to a hex color.                   |
| `outputTextCase`   | `'uppercase'` &#124; `'lowercase'` | `'uppercase'` | The output text case for color.                          |
| `includeHexSymbol` | `boolean`                        | `true`        | Whether to include the `#` symbol before the color code. |
