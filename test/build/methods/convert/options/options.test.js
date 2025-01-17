const root = '../../../../../';
const numberToWordsRu = require(`${root}dist/bundle`);

test('combined options', () => {
  expect(numberToWordsRu.convert('1234567.12345', {
    showNumberParts: {
      integer: false,
    },
    convertNumbertToWords: {
      fractional: true,
    },
    showCurrency: {
      fractional: false,
    },
  })).toBe('Двенадцать');
  expect(numberToWordsRu.convert('1234567.12345', {
    currency: 'number',
    showNumberParts: {
      fractional: false,
    },
    convertNumbertToWords: {
      integer: true,
    },
    showCurrency: {
      integer: true,
    },
  })).toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь целых');
});
