import { expandToHexColor } from '../index';

test('Expanding values', () => {
  expect(expandToHexColor('f')).toBe('#FFFFFF');
  expect(expandToHexColor('ff')).toBe('#FFFFFF');
  expect(expandToHexColor('fa')).toBe('#FAFAFA');
  expect(expandToHexColor('faf')).toBe('#FFAAFF');
  expect(expandToHexColor('F00')).toBe('#FF0000');
  expect(expandToHexColor('fff')).toBe('#FFFFFF');
  expect(expandToHexColor('FFFFFF')).toBe('#FFFFFF');
  expect(expandToHexColor('FFFF7')).toBe('#FFFFFF');
  expect(expandToHexColor('FF7F')).toBe('#FFFF77');
  expect(expandToHexColor('#f')).toBe('#FFFFFF');
  expect(expandToHexColor('#FF')).toBe('#FFFFFF');
  expect(expandToHexColor('#f00')).toBe('#FF0000');
  expect(expandToHexColor('#fff')).toBe('#FFFFFF');
  expect(expandToHexColor('#ffffff')).toBe('#FFFFFF');
  expect(expandToHexColor('xxz')).toBe(null);
  expect(expandToHexColor('023')).toBe('#002233');
  expect(expandToHexColor('c13')).toBe('#CC1133');
  expect(expandToHexColor('ab77')).toBe('#AABB77');
  expect(expandToHexColor('xzz77')).toBe('#777777');
  expect(expandToHexColor('xzzc7')).toBe('#C7C7C7');
  expect(expandToHexColor('batman')).toBe('#BBAAAA');
  expect(expandToHexColor('99')).toBe('#999999');

});

test('Converting names to hex', () => {
  expect(expandToHexColor('red')).toBe('#FF0000');
  expect(expandToHexColor('blue')).toBe('#0000FF');
  expect(expandToHexColor('aliceblue')).toBe('#F0F8FF');
  expect(expandToHexColor('purple')).toBe('#800080');
  expect(expandToHexColor('linen')).toBe('#FAF0E6');
});


test('Return as lowercase', () => {
  expect(expandToHexColor('c13', 'lowercase')).toBe('#cc1133');
  expect(expandToHexColor('ab77', 'lowercase')).toBe('#aabb77');
  expect(expandToHexColor('xzz7a', 'lowercase')).toBe("#7a7a7a");
  expect(expandToHexColor('xzzc7', 'lowercase')).toBe("#c7c7c7");
  expect(expandToHexColor('batman', 'lowercase')).toBe('#bbaaaa');
});

test('No hex symbol + lowercase', () => {
  expect(expandToHexColor('c13', 'lowercase', false)).toBe('cc1133');
  expect(expandToHexColor('ab77', 'lowercase', false)).toBe('aabb77');
  expect(expandToHexColor('xzz7a', 'lowercase', false)).toBe("7a7a7a");
  expect(expandToHexColor('xzzc7', 'lowercase', false)).toBe("c7c7c7");
  expect(expandToHexColor('batman', 'lowercase', false)).toBe('bbaaaa');
});
