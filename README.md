# expand-to-hex-color

Expands any string to valid full hex color.

## Install

```bash
npm install --save expand-to-hex-color
```

## Usage

```js
var expandToHexColor = require('expand-to-hex-color');

expandToHexColor('fff'); // returns '#FFFFFF'
expandToHexColor('000'); // returns '#000000'
expandToHexColor('f'); // returns '#FFFFFF'
expandToHexColor('0'); // returns '#000000'
expandToHexColor('ff'); // returns '#FFFFFF'
expandToHexColor('00'); // returns '#000000'
expandToHexColor('f0'); // returns '#FF00FF'
expandToHexColor('0f'); // returns '#00FF00'
expandToHexColor('ff0'); // returns '#FFFF00'
expandToHexColor('0ff'); // returns '#00FFFF'
expandToHexColor('000000'); // returns '#000000'
expandToHexColor('ffffff'); // returns '#FFFFFF'
expandToHexColor('00000000'); // returns '#000000'
expandToHexColor('red'); // returns '#FF0000'
expandToHexColor('blue'); // returns '#0000FF'
expandToHexColor('aliceblue'); // returns '#F0F8FF'
expandToHexColor('purple'); // returns '#800080'
expandToHexColor('linen'); // returns '#FAF0E6'
expandToHexColor('xxz'); // returns null
```

## Options
| Option             | Values                           | Default value | Description                                              |
|--------------------|----------------------------------|---------------|----------------------------------------------------------|
| `string`           | `string`                         | N/A           | String to be converted to a hex color.                   |
| `outputTextCase`   | `'uppercase' &#124; 'lowercase'` | `'uppercase'` | The output text case for color.                          |
| `includeHexSymbol` | `boolean`                        | `true`        | Whether to include the `#` symbol before the color code. |