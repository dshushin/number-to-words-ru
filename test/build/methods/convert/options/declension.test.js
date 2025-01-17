const root = '../../../../../';
const numberToWordsRu = require(`${root}dist/bundle`);

describe('Проверка падежей', () => {
  describe('Родительный', () => {
    test('Обычные числа', () => {
      const options = {
        declension: 'genitive',
      };
      expect(numberToWordsRu.convert('0', options))
      .toBe('Ноля рублей 00 копеек');
      expect(numberToWordsRu.convert('1', options))
      .toBe('Одного рубля 00 копеек');
      expect(numberToWordsRu.convert('2', options))
      .toBe('Двух рублей 00 копеек');
      expect(numberToWordsRu.convert('3', options))
      .toBe('Трёх рублей 00 копеек');
      expect(numberToWordsRu.convert('4', options))
      .toBe('Четырёх рублей 00 копеек');
      expect(numberToWordsRu.convert('5', options))
      .toBe('Пяти рублей 00 копеек');
      expect(numberToWordsRu.convert('10', options))
      .toBe('Десяти рублей 00 копеек');
      expect(numberToWordsRu.convert('11', options))
      .toBe('Одиннадцати рублей 00 копеек');
      expect(numberToWordsRu.convert('12', options))
      .toBe('Двенадцати рублей 00 копеек');
      expect(numberToWordsRu.convert('15', options))
      .toBe('Пятнадцати рублей 00 копеек');
      expect(numberToWordsRu.convert('20', options))
      .toBe('Двадцати рублей 00 копеек');
      expect(numberToWordsRu.convert('21', options))
      .toBe('Двадцати одного рубля 00 копеек');
      expect(numberToWordsRu.convert('30', options))
      .toBe('Тридцати рублей 00 копеек');
      expect(numberToWordsRu.convert('32', options))
      .toBe('Тридцати двух рублей 00 копеек');
      expect(numberToWordsRu.convert('40', options))
      .toBe('Сорока рублей 00 копеек');
      expect(numberToWordsRu.convert('43', options))
      .toBe('Сорока трёх рублей 00 копеек');
      expect(numberToWordsRu.convert('50', options))
      .toBe('Пятидесяти рублей 00 копеек');
      expect(numberToWordsRu.convert('54', options))
      .toBe('Пятидесяти четырёх рублей 00 копеек');
      expect(numberToWordsRu.convert('60', options))
      .toBe('Шестидесяти рублей 00 копеек');
      expect(numberToWordsRu.convert('65', options))
      .toBe('Шестидесяти пяти рублей 00 копеек');
      expect(numberToWordsRu.convert('90', options))
      .toBe('Девяноста рублей 00 копеек');
      expect(numberToWordsRu.convert('99', options))
      .toBe('Девяноста девяти рублей 00 копеек');
      expect(numberToWordsRu.convert('100', options))
      .toBe('Ста рублей 00 копеек');
      expect(numberToWordsRu.convert('101', options))
      .toBe('Ста одного рубля 00 копеек');
      expect(numberToWordsRu.convert('110', options))
      .toBe('Ста десяти рублей 00 копеек');
      expect(numberToWordsRu.convert('200', options))
      .toBe('Двухсот рублей 00 копеек');
      expect(numberToWordsRu.convert('201', options))
      .toBe('Двухсот одного рубля 00 копеек');
      expect(numberToWordsRu.convert('210', options))
      .toBe('Двухсот десяти рублей 00 копеек');
      expect(numberToWordsRu.convert('500', options))
      .toBe('Пятисот рублей 00 копеек');
      expect(numberToWordsRu.convert('501', options))
      .toBe('Пятисот одного рубля 00 копеек');
      expect(numberToWordsRu.convert('510', options))
      .toBe('Пятисот десяти рублей 00 копеек');
      expect(numberToWordsRu.convert('1000', options))
      .toBe('Одной тысячи рублей 00 копеек');
      expect(numberToWordsRu.convert('1001', options))
      .toBe('Одной тысячи одного рубля 00 копеек');
      expect(numberToWordsRu.convert('1002', options))
      .toBe('Одной тысячи двух рублей 00 копеек');
      expect(numberToWordsRu.convert('1005', options))
      .toBe('Одной тысячи пяти рублей 00 копеек');
      expect(numberToWordsRu.convert('1100', options))
      .toBe('Одной тысячи ста рублей 00 копеек');
      expect(numberToWordsRu.convert('1000000', options))
      .toBe('Одного миллиона рублей 00 копеек');
      expect(numberToWordsRu.convert('987654321', options))
      .toBe('Девятисот восьмидесяти семи миллионов шестисот пятидесяти четырёх тысяч трёхсот двадцати одного рубля 00 копеек');
      expect(numberToWordsRu.convert('1001121.01',{...options, convertNumbertToWords: {fractional: true}}))
      .toBe('Одного миллиона одной тысячи ста двадцати одного рубля одной копейки');
      expect(numberToWordsRu.convert('2002122.02', {...options, convertNumbertToWords: {fractional: true}}))
      .toBe('Двух миллионов двух тысяч ста двадцати двух рублей двух копеек');
      expect(numberToWordsRu.convert('5005125.05', {...options, convertNumbertToWords: {fractional: true}}))
      .toBe('Пяти миллионов пяти тысяч ста двадцати пяти рублей пяти копеек');
    });
    test('С валютой "number"', () => {
      const options = {
        currency: 'number',
        declension: 'genitive',
        convertNumbertToWords: {fractional: true},
      };
      expect(numberToWordsRu.convert('1.0', options))
      .toBe('Одной целой ноля десятых');
      expect(numberToWordsRu.convert('1.1', options))
      .toBe('Одной целой одной десятой');
      expect(numberToWordsRu.convert('2.1', options))
      .toBe('Двух целых одной десятой');
      expect(numberToWordsRu.convert('5.1', options))
      .toBe('Пяти целых одной десятой');
      expect(numberToWordsRu.convert('11.1', options))
      .toBe('Одиннадцати целых одной десятой');
      expect(numberToWordsRu.convert('101.1', options))
      .toBe('Ста одной целой одной десятой');
      expect(numberToWordsRu.convert('102.1', options))
      .toBe('Ста двух целых одной десятой');
      expect(numberToWordsRu.convert('1.2', options))
      .toBe('Одной целой двух десятых');
      expect(numberToWordsRu.convert('1.5', options))
      .toBe('Одной целой пяти десятых');
      expect(numberToWordsRu.convert('1.11', options))
      .toBe('Одной целой одиннадцати сотых');
      expect(numberToWordsRu.convert('1.21', options))
      .toBe('Одной целой двадцати одной сотой');
      expect(numberToWordsRu.convert('1.22', options))
      .toBe('Одной целой двадцати двух сотых');
      expect(numberToWordsRu.convert('1.101', options))
      .toBe('Одной целой ста одной тысячной');
      expect(numberToWordsRu.convert('1.102', options))
      .toBe('Одной целой ста двух тысячных');
      expect(numberToWordsRu.convert('1.00001', options))
      .toBe('Одной целой одной стотысячной');
      expect(numberToWordsRu.convert('1.00002', options))
      .toBe('Одной целой двух стотысячных');
    });
    test('С разделителем "/"', () => {
      const options = {
        declension: 'genitive',
        convertNumbertToWords: {
          integer: true,
          fractional: true,
        },
      };
      expect(numberToWordsRu.convert('1/0', options))
      .toBe('Одной нулевой рубля');
      expect(numberToWordsRu.convert('1/1', options))
      .toBe('Одной первой рубля');
      expect(numberToWordsRu.convert('1/2', options))
      .toBe('Одной второй рубля');
      expect(numberToWordsRu.convert('1/5', options))
      .toBe('Одной пятой рубля');
      expect(numberToWordsRu.convert('2/0', options))
      .toBe('Двух нулевых рубля');
      expect(numberToWordsRu.convert('2/1', options))
      .toBe('Двух первых рубля');
      expect(numberToWordsRu.convert('2/2', options))
      .toBe('Двух вторых рубля');
      expect(numberToWordsRu.convert('2/5', options))
      .toBe('Двух пятых рубля');
      expect(numberToWordsRu.convert('1/10', options))
      .toBe('Одной десятой рубля');
      expect(numberToWordsRu.convert('1/11', options))
      .toBe('Одной одиннадцатой рубля');
      expect(numberToWordsRu.convert('1/12', options))
      .toBe('Одной двенадцатой рубля');
      expect(numberToWordsRu.convert('1/15', options))
      .toBe('Одной пятнадцатой рубля');
      expect(numberToWordsRu.convert('1/20', options))
      .toBe('Одной двадцатой рубля');
      expect(numberToWordsRu.convert('1/21', options))
      .toBe('Одной двадцать первой рубля');
      expect(numberToWordsRu.convert('1/100', options))
      .toBe('Одной сотой рубля');
      expect(numberToWordsRu.convert('1/101', options))
      .toBe('Одной сто первой рубля');
      expect(numberToWordsRu.convert('1/102', options))
      .toBe('Одной сто второй рубля');
      expect(numberToWordsRu.convert('1/110', options))
      .toBe('Одной сто десятой рубля');
      expect(numberToWordsRu.convert('1/112', options))
      .toBe('Одной сто двенадцатой рубля');
      expect(numberToWordsRu.convert('1/1000', options))
      .toBe('Одной тысячной рубля');
      expect(numberToWordsRu.convert('1/1001', options))
      .toBe('Одной одна тысяча первой рубля');
      expect(numberToWordsRu.convert('1/1002', options))
      .toBe('Одной одна тысяча второй рубля');
      expect(numberToWordsRu.convert('1/1010', options))
      .toBe('Одной одна тысяча десятой рубля');
      expect(numberToWordsRu.convert('1/1011', options))
      .toBe('Одной одна тысяча одиннадцатой рубля');
      expect(numberToWordsRu.convert('1/1020', options))
      .toBe('Одной одна тысяча двадцатой рубля');
      expect(numberToWordsRu.convert('1/1021', options))
      .toBe('Одной одна тысяча двадцать первой рубля');
      expect(numberToWordsRu.convert('1/10000', options))
      .toBe('Одной десятитысячной рубля');
      expect(numberToWordsRu.convert('1/11000', options))
      .toBe('Одной одиннадцатитысячной рубля');
      expect(numberToWordsRu.convert('1/521000', options))
      .toBe('Одной пятисотдвадцатиоднотысячной рубля');
      expect(numberToWordsRu.convert('1/1521000', options))
      .toBe('Одной один миллион пятисотдвадцатиоднотысячной рубля');
      expect(numberToWordsRu.convert('1/1001002', options))
      .toBe('Одной один миллион одна тысяча второй рубля');
    });
  });
  describe('Дательный', () => {
    test('Обычные числа', () => {
      const options = {
        declension: 'dative',
      };
      expect(numberToWordsRu.convert('0', options))
      .toBe('Нолю рублей 00 копеек');
      expect(numberToWordsRu.convert('1', options))
      .toBe('Одному рублю 00 копеек');
      expect(numberToWordsRu.convert('2', options))
      .toBe('Двум рублям 00 копеек');
      expect(numberToWordsRu.convert('3', options))
      .toBe('Трём рублям 00 копеек');
      expect(numberToWordsRu.convert('4', options))
      .toBe('Четырём рублям 00 копеек');
      expect(numberToWordsRu.convert('5', options))
      .toBe('Пяти рублям 00 копеек');
      expect(numberToWordsRu.convert('10', options))
      .toBe('Десяти рублям 00 копеек');
      expect(numberToWordsRu.convert('11', options))
      .toBe('Одиннадцати рублям 00 копеек');
      expect(numberToWordsRu.convert('12', options))
      .toBe('Двенадцати рублям 00 копеек');
      expect(numberToWordsRu.convert('15', options))
      .toBe('Пятнадцати рублям 00 копеек');
      expect(numberToWordsRu.convert('20', options))
      .toBe('Двадцати рублям 00 копеек');
      expect(numberToWordsRu.convert('21', options))
      .toBe('Двадцати одному рублю 00 копеек');
      expect(numberToWordsRu.convert('30', options))
      .toBe('Тридцати рублям 00 копеек');
      expect(numberToWordsRu.convert('32', options))
      .toBe('Тридцати двум рублям 00 копеек');
      expect(numberToWordsRu.convert('40', options))
      .toBe('Сорока рублям 00 копеек');
      expect(numberToWordsRu.convert('43', options))
      .toBe('Сорока трём рублям 00 копеек');
      expect(numberToWordsRu.convert('50', options))
      .toBe('Пятидесяти рублям 00 копеек');
      expect(numberToWordsRu.convert('54', options))
      .toBe('Пятидесяти четырём рублям 00 копеек');
      expect(numberToWordsRu.convert('60', options))
      .toBe('Шестидесяти рублям 00 копеек');
      expect(numberToWordsRu.convert('65', options))
      .toBe('Шестидесяти пяти рублям 00 копеек');
      expect(numberToWordsRu.convert('90', options))
      .toBe('Девяноста рублям 00 копеек');
      expect(numberToWordsRu.convert('99', options))
      .toBe('Девяноста девяти рублям 00 копеек');
      expect(numberToWordsRu.convert('100', options))
      .toBe('Ста рублям 00 копеек');
      expect(numberToWordsRu.convert('101', options))
      .toBe('Ста одному рублю 00 копеек');
      expect(numberToWordsRu.convert('110', options))
      .toBe('Ста десяти рублям 00 копеек');
      expect(numberToWordsRu.convert('200', options))
      .toBe('Двумстам рублям 00 копеек');
      expect(numberToWordsRu.convert('201', options))
      .toBe('Двумстам одному рублю 00 копеек');
      expect(numberToWordsRu.convert('210', options))
      .toBe('Двумстам десяти рублям 00 копеек');
      expect(numberToWordsRu.convert('500', options))
      .toBe('Пятистам рублям 00 копеек');
      expect(numberToWordsRu.convert('501', options))
      .toBe('Пятистам одному рублю 00 копеек');
      expect(numberToWordsRu.convert('510', options))
      .toBe('Пятистам десяти рублям 00 копеек');
      expect(numberToWordsRu.convert('1000', options))
      .toBe('Одной тысяче рублей 00 копеек');
      expect(numberToWordsRu.convert('1001', options))
      .toBe('Одной тысяче одному рублю 00 копеек');
      expect(numberToWordsRu.convert('1002', options))
      .toBe('Одной тысяче двум рублям 00 копеек');
      expect(numberToWordsRu.convert('1005', options))
      .toBe('Одной тысяче пяти рублям 00 копеек');
      expect(numberToWordsRu.convert('1100', options))
      .toBe('Одной тысяче ста рублям 00 копеек');
      expect(numberToWordsRu.convert('1000000', options))
      .toBe('Одному миллиону рублей 00 копеек');
      expect(numberToWordsRu.convert('987654321', options))
      .toBe('Девятистам восьмидесяти семи миллионам шестистам пятидесяти четырём тысячам трёмстам двадцати одному рублю 00 копеек');
      expect(numberToWordsRu.convert('1001121.01', {...options, convertNumbertToWords: {fractional: true}}))
      .toBe('Одному миллиону одной тысяче ста двадцати одному рублю одной копейке');
      expect(numberToWordsRu.convert('2002122.02', {...options, convertNumbertToWords: {fractional: true}}))
      .toBe('Двум миллионам двум тысячам ста двадцати двум рублям двум копейкам');
      expect(numberToWordsRu.convert('5005125.05', {...options, convertNumbertToWords: {fractional: true}}))
      .toBe('Пяти миллионам пяти тысячам ста двадцати пяти рублям пяти копейкам');
    });
    test('С валютой "number"', () => {
      const options = {
        currency: 'number',
        declension: 'dative',
        convertNumbertToWords: {fractional: true},
      };
      expect(numberToWordsRu.convert('1.0', options))
      .toBe('Одной целой нолю десятых');
      expect(numberToWordsRu.convert('1.1', options))
      .toBe('Одной целой одной десятой');
      expect(numberToWordsRu.convert('2.1', options))
      .toBe('Двум целым одной десятой');
      expect(numberToWordsRu.convert('5.1', options))
      .toBe('Пяти целым одной десятой');
      expect(numberToWordsRu.convert('11.1', options))
      .toBe('Одиннадцати целым одной десятой');
      expect(numberToWordsRu.convert('101.1', options))
      .toBe('Ста одной целой одной десятой');
      expect(numberToWordsRu.convert('102.1', options))
      .toBe('Ста двум целым одной десятой');
      expect(numberToWordsRu.convert('1.2', options))
      .toBe('Одной целой двум десятым');
      expect(numberToWordsRu.convert('1.5', options))
      .toBe('Одной целой пяти десятым');
      expect(numberToWordsRu.convert('1.11', options))
      .toBe('Одной целой одиннадцати сотым');
      expect(numberToWordsRu.convert('1.21', options))
      .toBe('Одной целой двадцати одной сотой');
      expect(numberToWordsRu.convert('1.22', options))
      .toBe('Одной целой двадцати двум сотым');
      expect(numberToWordsRu.convert('1.101', options))
      .toBe('Одной целой ста одной тысячной');
      expect(numberToWordsRu.convert('1.102', options))
      .toBe('Одной целой ста двум тысячным');
      expect(numberToWordsRu.convert('1.00001', options))
      .toBe('Одной целой одной стотысячной');
      expect(numberToWordsRu.convert('1.00002', options))
      .toBe('Одной целой двум стотысячным');
    });
    test('С разделителем "/"', () => {
      const options = {
        declension: 'dative',
        convertNumbertToWords: {
          integer: true,
          fractional: true,
        },
      };
      expect(numberToWordsRu.convert('1/0', options))
      .toBe('Одной нулевой рубля');
      expect(numberToWordsRu.convert('1/1', options))
      .toBe('Одной первой рубля');
      expect(numberToWordsRu.convert('1/2', options))
      .toBe('Одной второй рубля');
      expect(numberToWordsRu.convert('1/5', options))
      .toBe('Одной пятой рубля');
      expect(numberToWordsRu.convert('2/0', options))
      .toBe('Двум нулевым рубля');
      expect(numberToWordsRu.convert('2/1', options))
      .toBe('Двум первым рубля');
      expect(numberToWordsRu.convert('2/2', options))
      .toBe('Двум вторым рубля');
      expect(numberToWordsRu.convert('2/5', options))
      .toBe('Двум пятым рубля');
      expect(numberToWordsRu.convert('1/10', options))
      .toBe('Одной десятой рубля');
      expect(numberToWordsRu.convert('1/11', options))
      .toBe('Одной одиннадцатой рубля');
      expect(numberToWordsRu.convert('1/12', options))
      .toBe('Одной двенадцатой рубля');
      expect(numberToWordsRu.convert('1/15', options))
      .toBe('Одной пятнадцатой рубля');
      expect(numberToWordsRu.convert('1/20', options))
      .toBe('Одной двадцатой рубля');
      expect(numberToWordsRu.convert('1/21', options))
      .toBe('Одной двадцать первой рубля');
      expect(numberToWordsRu.convert('1/100', options))
      .toBe('Одной сотой рубля');
      expect(numberToWordsRu.convert('1/101', options))
      .toBe('Одной сто первой рубля');
      expect(numberToWordsRu.convert('1/102', options))
      .toBe('Одной сто второй рубля');
      expect(numberToWordsRu.convert('1/110', options))
      .toBe('Одной сто десятой рубля');
      expect(numberToWordsRu.convert('1/112', options))
      .toBe('Одной сто двенадцатой рубля');
      expect(numberToWordsRu.convert('1/1000', options))
      .toBe('Одной тысячной рубля');
      expect(numberToWordsRu.convert('1/1001', options))
      .toBe('Одной одна тысяча первой рубля');
      expect(numberToWordsRu.convert('1/1002', options))
      .toBe('Одной одна тысяча второй рубля');
      expect(numberToWordsRu.convert('1/1010', options))
      .toBe('Одной одна тысяча десятой рубля');
      expect(numberToWordsRu.convert('1/1011', options))
      .toBe('Одной одна тысяча одиннадцатой рубля');
      expect(numberToWordsRu.convert('1/1020', options))
      .toBe('Одной одна тысяча двадцатой рубля');
      expect(numberToWordsRu.convert('1/1021', options))
      .toBe('Одной одна тысяча двадцать первой рубля');
      expect(numberToWordsRu.convert('1/10000', options))
      .toBe('Одной десятитысячной рубля');
      expect(numberToWordsRu.convert('1/11000', options))
      .toBe('Одной одиннадцатитысячной рубля');
      expect(numberToWordsRu.convert('1/521000', options))
      .toBe('Одной пятисотдвадцатиоднотысячной рубля');
      expect(numberToWordsRu.convert('1/1521000', options))
      .toBe('Одной один миллион пятисотдвадцатиоднотысячной рубля');
      expect(numberToWordsRu.convert('1/1001002', options))
      .toBe('Одной один миллион одна тысяча второй рубля');
    });
  });
  describe('Винительный', () => {
    test('Обычные числа', () => {
      const options = {
        declension: 'accusative',
      };
      expect(numberToWordsRu.convert('0', options))
      .toBe('Ноль рублей 00 копеек');
      expect(numberToWordsRu.convert('1', options))
      .toBe('Один рубль 00 копеек');
      expect(numberToWordsRu.convert('2', options))
      .toBe('Два рубля 00 копеек');
      expect(numberToWordsRu.convert('3', options))
      .toBe('Три рубля 00 копеек');
      expect(numberToWordsRu.convert('4', options))
      .toBe('Четыре рубля 00 копеек');
      expect(numberToWordsRu.convert('5', options))
      .toBe('Пять рублей 00 копеек');
      expect(numberToWordsRu.convert('10', options))
      .toBe('Десять рублей 00 копеек');
      expect(numberToWordsRu.convert('11', options))
      .toBe('Одиннадцать рублей 00 копеек');
      expect(numberToWordsRu.convert('12', options))
      .toBe('Двенадцать рублей 00 копеек');
      expect(numberToWordsRu.convert('15', options))
      .toBe('Пятнадцать рублей 00 копеек');
      expect(numberToWordsRu.convert('20', options))
      .toBe('Двадцать рублей 00 копеек');
      expect(numberToWordsRu.convert('21', options))
      .toBe('Двадцать один рубль 00 копеек');
      expect(numberToWordsRu.convert('30', options))
      .toBe('Тридцать рублей 00 копеек');
      expect(numberToWordsRu.convert('32', options))
      .toBe('Тридцать два рубля 00 копеек');
      expect(numberToWordsRu.convert('40', options))
      .toBe('Сорок рублей 00 копеек');
      expect(numberToWordsRu.convert('43', options))
      .toBe('Сорок три рубля 00 копеек');
      expect(numberToWordsRu.convert('50', options))
      .toBe('Пятьдесят рублей 00 копеек');
      expect(numberToWordsRu.convert('54', options))
      .toBe('Пятьдесят четыре рубля 00 копеек');
      expect(numberToWordsRu.convert('60', options))
      .toBe('Шестьдесят рублей 00 копеек');
      expect(numberToWordsRu.convert('65', options))
      .toBe('Шестьдесят пять рублей 00 копеек');
      expect(numberToWordsRu.convert('90', options))
      .toBe('Девяносто рублей 00 копеек');
      expect(numberToWordsRu.convert('99', options))
      .toBe('Девяносто девять рублей 00 копеек');
      expect(numberToWordsRu.convert('100', options))
      .toBe('Сто рублей 00 копеек');
      expect(numberToWordsRu.convert('101', options))
      .toBe('Сто один рубль 00 копеек');
      expect(numberToWordsRu.convert('110', options))
      .toBe('Сто десять рублей 00 копеек');
      expect(numberToWordsRu.convert('200', options))
      .toBe('Двести рублей 00 копеек');
      expect(numberToWordsRu.convert('201', options))
      .toBe('Двести один рубль 00 копеек');
      expect(numberToWordsRu.convert('210', options))
      .toBe('Двести десять рублей 00 копеек');
      expect(numberToWordsRu.convert('500', options))
      .toBe('Пятьсот рублей 00 копеек');
      expect(numberToWordsRu.convert('501', options))
      .toBe('Пятьсот один рубль 00 копеек');
      expect(numberToWordsRu.convert('510', options))
      .toBe('Пятьсот десять рублей 00 копеек');
      expect(numberToWordsRu.convert('1000', options))
      .toBe('Одну тысячу рублей 00 копеек');
      expect(numberToWordsRu.convert('1001', options))
      .toBe('Одну тысячу один рубль 00 копеек');
      expect(numberToWordsRu.convert('1002', options))
      .toBe('Одну тысячу два рубля 00 копеек');
      expect(numberToWordsRu.convert('1005', options))
      .toBe('Одну тысячу пять рублей 00 копеек');
      expect(numberToWordsRu.convert('1100', options))
      .toBe('Одну тысячу сто рублей 00 копеек');
      expect(numberToWordsRu.convert('1000000', options))
      .toBe('Один миллион рублей 00 копеек');
      expect(numberToWordsRu.convert('987654321', options))
      .toBe('Девятьсот восемьдесят семь миллионов шестьсот пятьдесят четыре тысячи триста двадцать один рубль 00 копеек');
      expect(numberToWordsRu.convert('1001121.01', {...options, convertNumbertToWords: {fractional: true}}))
      .toBe('Один миллион одну тысячу сто двадцать один рубль одну копейку');
      expect(numberToWordsRu.convert('2002122.02', {...options, convertNumbertToWords: {fractional: true}}))
      .toBe('Два миллиона две тысячи сто двадцать два рубля две копейки');
      expect(numberToWordsRu.convert('5005125.05', {...options, convertNumbertToWords: {fractional: true}}))
      .toBe('Пять миллионов пять тысяч сто двадцать пять рублей пять копеек');
    });
    test('С валютой "number"', () => {
      const options = {
        currency: 'number',
        declension: 'accusative',
        convertNumbertToWords: {fractional: true},
      };
      expect(numberToWordsRu.convert('1.0', options))
      .toBe('Одну целую ноль десятых');
      expect(numberToWordsRu.convert('1.1', options))
      .toBe('Одну целую одну десятую');
      expect(numberToWordsRu.convert('2.1', options))
      .toBe('Две целых одну десятую');
      expect(numberToWordsRu.convert('5.1', options))
      .toBe('Пять целых одну десятую');
      expect(numberToWordsRu.convert('11.1', options))
      .toBe('Одиннадцать целых одну десятую');
      expect(numberToWordsRu.convert('101.1', options))
      .toBe('Сто одну целую одну десятую');
      expect(numberToWordsRu.convert('102.1', options))
      .toBe('Сто две целых одну десятую');
      expect(numberToWordsRu.convert('1.2', options))
      .toBe('Одну целую две десятых');
      expect(numberToWordsRu.convert('1.5', options))
      .toBe('Одну целую пять десятых');
      expect(numberToWordsRu.convert('1.11', options))
      .toBe('Одну целую одиннадцать сотых');
      expect(numberToWordsRu.convert('1.21', options))
      .toBe('Одну целую двадцать одну сотую');
      expect(numberToWordsRu.convert('1.22', options))
      .toBe('Одну целую двадцать две сотых');
      expect(numberToWordsRu.convert('1.101', options))
      .toBe('Одну целую сто одну тысячную');
      expect(numberToWordsRu.convert('1.102', options))
      .toBe('Одну целую сто две тысячных');
      expect(numberToWordsRu.convert('1.00001', options))
      .toBe('Одну целую одну стотысячную');
      expect(numberToWordsRu.convert('1.00002', options))
      .toBe('Одну целую две стотысячных');
    });
    test('С разделителем "/"', () => {
      const options = {
        declension: 'accusative',
        convertNumbertToWords: {
          integer: true,
          fractional: true,
        },
      };
      expect(numberToWordsRu.convert('1/0', options))
      .toBe('Одну нулевую рубля');
      expect(numberToWordsRu.convert('1/1', options))
      .toBe('Одну первую рубля');
      expect(numberToWordsRu.convert('1/2', options))
      .toBe('Одну вторую рубля');
      expect(numberToWordsRu.convert('1/5', options))
      .toBe('Одну пятую рубля');
      expect(numberToWordsRu.convert('2/0', options))
      .toBe('Две нулевых рубля');
      expect(numberToWordsRu.convert('2/1', options))
      .toBe('Две первых рубля');
      expect(numberToWordsRu.convert('2/2', options))
      .toBe('Две вторых рубля');
      expect(numberToWordsRu.convert('2/5', options))
      .toBe('Две пятых рубля');
      expect(numberToWordsRu.convert('1/10', options))
      .toBe('Одну десятую рубля');
      expect(numberToWordsRu.convert('1/11', options))
      .toBe('Одну одиннадцатую рубля');
      expect(numberToWordsRu.convert('1/12', options))
      .toBe('Одну двенадцатую рубля');
      expect(numberToWordsRu.convert('1/15', options))
      .toBe('Одну пятнадцатую рубля');
      expect(numberToWordsRu.convert('1/20', options))
      .toBe('Одну двадцатую рубля');
      expect(numberToWordsRu.convert('1/21', options))
      .toBe('Одну двадцать первую рубля');
      expect(numberToWordsRu.convert('1/100', options))
      .toBe('Одну сотую рубля');
      expect(numberToWordsRu.convert('1/101', options))
      .toBe('Одну сто первую рубля');
      expect(numberToWordsRu.convert('1/102', options))
      .toBe('Одну сто вторую рубля');
      expect(numberToWordsRu.convert('1/110', options))
      .toBe('Одну сто десятую рубля');
      expect(numberToWordsRu.convert('1/112', options))
      .toBe('Одну сто двенадцатую рубля');
      expect(numberToWordsRu.convert('1/1000', options))
      .toBe('Одну тысячную рубля');
      expect(numberToWordsRu.convert('1/1001', options))
      .toBe('Одну одна тысяча первую рубля');
      expect(numberToWordsRu.convert('1/1002', options))
      .toBe('Одну одна тысяча вторую рубля');
      expect(numberToWordsRu.convert('1/1010', options))
      .toBe('Одну одна тысяча десятую рубля');
      expect(numberToWordsRu.convert('1/1011', options))
      .toBe('Одну одна тысяча одиннадцатую рубля');
      expect(numberToWordsRu.convert('1/1020', options))
      .toBe('Одну одна тысяча двадцатую рубля');
      expect(numberToWordsRu.convert('1/1021', options))
      .toBe('Одну одна тысяча двадцать первую рубля');
      expect(numberToWordsRu.convert('1/10000', options))
      .toBe('Одну десятитысячную рубля');
      expect(numberToWordsRu.convert('1/11000', options))
      .toBe('Одну одиннадцатитысячную рубля');
      expect(numberToWordsRu.convert('1/521000', options))
      .toBe('Одну пятисотдвадцатиоднотысячную рубля');
      expect(numberToWordsRu.convert('1/1521000', options))
      .toBe('Одну один миллион пятисотдвадцатиоднотысячную рубля');
      expect(numberToWordsRu.convert('1/1001002', options))
      .toBe('Одну один миллион одна тысяча вторую рубля');
    });
  });
  describe('Творительный', () => {
    test('Обычные числа', () => {
      const options = {
        declension: 'instrumental',
      };
      expect(numberToWordsRu.convert('0', options))
      .toBe('Нолём рублей 00 копеек');
      expect(numberToWordsRu.convert('1', options))
      .toBe('Одним рублём 00 копеек');
      expect(numberToWordsRu.convert('2', options))
      .toBe('Двумя рублями 00 копеек');
      expect(numberToWordsRu.convert('3', options))
      .toBe('Тремя рублями 00 копеек');
      expect(numberToWordsRu.convert('4', options))
      .toBe('Четырьмя рублями 00 копеек');
      expect(numberToWordsRu.convert('5', options))
      .toBe('Пятью рублями 00 копеек');
      expect(numberToWordsRu.convert('10', options))
      .toBe('Десятью рублями 00 копеек');
      expect(numberToWordsRu.convert('11', options))
      .toBe('Одиннадцатью рублями 00 копеек');
      expect(numberToWordsRu.convert('12', options))
      .toBe('Двенадцатью рублями 00 копеек');
      expect(numberToWordsRu.convert('15', options))
      .toBe('Пятнадцатью рублями 00 копеек');
      expect(numberToWordsRu.convert('20', options))
      .toBe('Двадцатью рублями 00 копеек');
      expect(numberToWordsRu.convert('21', options))
      .toBe('Двадцатью одним рублём 00 копеек');
      expect(numberToWordsRu.convert('30', options))
      .toBe('Тридцатью рублями 00 копеек');
      expect(numberToWordsRu.convert('32', options))
      .toBe('Тридцатью двумя рублями 00 копеек');
      expect(numberToWordsRu.convert('40', options))
      .toBe('Сорока рублями 00 копеек');
      expect(numberToWordsRu.convert('43', options))
      .toBe('Сорока тремя рублями 00 копеек');
      expect(numberToWordsRu.convert('50', options))
      .toBe('Пятьюдесятью рублями 00 копеек');
      expect(numberToWordsRu.convert('54', options))
      .toBe('Пятьюдесятью четырьмя рублями 00 копеек');
      expect(numberToWordsRu.convert('60', options))
      .toBe('Шестьюдесятью рублями 00 копеек');
      expect(numberToWordsRu.convert('65', options))
      .toBe('Шестьюдесятью пятью рублями 00 копеек');
      expect(numberToWordsRu.convert('90', options))
      .toBe('Девяноста рублями 00 копеек');
      expect(numberToWordsRu.convert('99', options))
      .toBe('Девяноста девятью рублями 00 копеек');
      expect(numberToWordsRu.convert('100', options))
      .toBe('Ста рублями 00 копеек');
      expect(numberToWordsRu.convert('101', options))
      .toBe('Ста одним рублём 00 копеек');
      expect(numberToWordsRu.convert('110', options))
      .toBe('Ста десятью рублями 00 копеек');
      expect(numberToWordsRu.convert('200', options))
      .toBe('Двумястами рублями 00 копеек');
      expect(numberToWordsRu.convert('201', options))
      .toBe('Двумястами одним рублём 00 копеек');
      expect(numberToWordsRu.convert('210', options))
      .toBe('Двумястами десятью рублями 00 копеек');
      expect(numberToWordsRu.convert('500', options))
      .toBe('Пятьюстами рублями 00 копеек');
      expect(numberToWordsRu.convert('501', options))
      .toBe('Пятьюстами одним рублём 00 копеек');
      expect(numberToWordsRu.convert('510', options))
      .toBe('Пятьюстами десятью рублями 00 копеек');
      expect(numberToWordsRu.convert('1000', options))
      .toBe('Одной тысячей рублей 00 копеек');
      expect(numberToWordsRu.convert('1001', options))
      .toBe('Одной тысячей одним рублём 00 копеек');
      expect(numberToWordsRu.convert('1002', options))
      .toBe('Одной тысячей двумя рублями 00 копеек');
      expect(numberToWordsRu.convert('1005', options))
      .toBe('Одной тысячей пятью рублями 00 копеек');
      expect(numberToWordsRu.convert('1100', options))
      .toBe('Одной тысячей ста рублями 00 копеек');
      expect(numberToWordsRu.convert('1000000', options))
      .toBe('Одним миллионом рублей 00 копеек');
      expect(numberToWordsRu.convert('987654321', options))
      .toBe('Девятьюстами восемьюдесятью семью миллионами шестьюстами пятьюдесятью четырьмя тысячами тремястами двадцатью одним рублём 00 копеек');
      expect(numberToWordsRu.convert('1001121.01', {...options, convertNumbertToWords: {fractional: true}}))
      .toBe('Одним миллионом одной тысячей ста двадцатью одним рублём одной копейкой');
      expect(numberToWordsRu.convert('2002122.02', {...options, convertNumbertToWords: {fractional: true}}))
      .toBe('Двумя миллионами двумя тысячами ста двадцатью двумя рублями двумя копейками');
      expect(numberToWordsRu.convert('5005125.05', {...options, convertNumbertToWords: {fractional: true}}))
      .toBe('Пятью миллионами пятью тысячами ста двадцатью пятью рублями пятью копейками');
    });
    test('С валютой "number"', () => {
      const options = {
        currency: 'number',
        declension: 'instrumental',
        convertNumbertToWords: {fractional: true},
      };
      expect(numberToWordsRu.convert('1.0', options))
      .toBe('Одной целой нолём десятых');
      expect(numberToWordsRu.convert('1.1', options))
      .toBe('Одной целой одной десятой');
      expect(numberToWordsRu.convert('2.1', options))
      .toBe('Двумя целыми одной десятой');
      expect(numberToWordsRu.convert('5.1', options))
      .toBe('Пятью целыми одной десятой');
      expect(numberToWordsRu.convert('11.1', options))
      .toBe('Одиннадцатью целыми одной десятой');
      expect(numberToWordsRu.convert('101.1', options))
      .toBe('Ста одной целой одной десятой');
      expect(numberToWordsRu.convert('102.1', options))
      .toBe('Ста двумя целыми одной десятой');
      expect(numberToWordsRu.convert('1.2', options))
      .toBe('Одной целой двумя десятыми');
      expect(numberToWordsRu.convert('1.5', options))
      .toBe('Одной целой пятью десятыми');
      expect(numberToWordsRu.convert('1.11', options))
      .toBe('Одной целой одиннадцатью сотыми');
      expect(numberToWordsRu.convert('1.21', options))
      .toBe('Одной целой двадцатью одной сотой');
      expect(numberToWordsRu.convert('1.22', options))
      .toBe('Одной целой двадцатью двумя сотыми');
      expect(numberToWordsRu.convert('1.101', options))
      .toBe('Одной целой ста одной тысячной');
      expect(numberToWordsRu.convert('1.102', options))
      .toBe('Одной целой ста двумя тысячными');
      expect(numberToWordsRu.convert('1.00001', options))
      .toBe('Одной целой одной стотысячной');
      expect(numberToWordsRu.convert('1.00002', options))
      .toBe('Одной целой двумя стотысячными');
    });
    test('С разделителем "/"', () => {
      const options = {
        declension: 'instrumental',
        convertNumbertToWords: {
          integer: true,
          fractional: true,
        },
      };
      expect(numberToWordsRu.convert('1/0', options))
      .toBe('Одной нулевой рубля');
      expect(numberToWordsRu.convert('1/1', options))
      .toBe('Одной первой рубля');
      expect(numberToWordsRu.convert('1/2', options))
      .toBe('Одной второй рубля');
      expect(numberToWordsRu.convert('1/5', options))
      .toBe('Одной пятой рубля');
      expect(numberToWordsRu.convert('2/0', options))
      .toBe('Двумя нулевыми рубля');
      expect(numberToWordsRu.convert('2/1', options))
      .toBe('Двумя первыми рубля');
      expect(numberToWordsRu.convert('2/2', options))
      .toBe('Двумя вторыми рубля');
      expect(numberToWordsRu.convert('2/5', options))
      .toBe('Двумя пятыми рубля');
      expect(numberToWordsRu.convert('1/10', options))
      .toBe('Одной десятой рубля');
      expect(numberToWordsRu.convert('1/11', options))
      .toBe('Одной одиннадцатой рубля');
      expect(numberToWordsRu.convert('1/12', options))
      .toBe('Одной двенадцатой рубля');
      expect(numberToWordsRu.convert('1/15', options))
      .toBe('Одной пятнадцатой рубля');
      expect(numberToWordsRu.convert('1/20', options))
      .toBe('Одной двадцатой рубля');
      expect(numberToWordsRu.convert('1/21', options))
      .toBe('Одной двадцать первой рубля');
      expect(numberToWordsRu.convert('1/100', options))
      .toBe('Одной сотой рубля');
      expect(numberToWordsRu.convert('1/101', options))
      .toBe('Одной сто первой рубля');
      expect(numberToWordsRu.convert('1/102', options))
      .toBe('Одной сто второй рубля');
      expect(numberToWordsRu.convert('1/110', options))
      .toBe('Одной сто десятой рубля');
      expect(numberToWordsRu.convert('1/112', options))
      .toBe('Одной сто двенадцатой рубля');
      expect(numberToWordsRu.convert('1/1000', options))
      .toBe('Одной тысячной рубля');
      expect(numberToWordsRu.convert('1/1001', options))
      .toBe('Одной одна тысяча первой рубля');
      expect(numberToWordsRu.convert('1/1002', options))
      .toBe('Одной одна тысяча второй рубля');
      expect(numberToWordsRu.convert('1/1010', options))
      .toBe('Одной одна тысяча десятой рубля');
      expect(numberToWordsRu.convert('1/1011', options))
      .toBe('Одной одна тысяча одиннадцатой рубля');
      expect(numberToWordsRu.convert('1/1020', options))
      .toBe('Одной одна тысяча двадцатой рубля');
      expect(numberToWordsRu.convert('1/1021', options))
      .toBe('Одной одна тысяча двадцать первой рубля');
      expect(numberToWordsRu.convert('1/10000', options))
      .toBe('Одной десятитысячной рубля');
      expect(numberToWordsRu.convert('1/11000', options))
      .toBe('Одной одиннадцатитысячной рубля');
      expect(numberToWordsRu.convert('1/521000', options))
      .toBe('Одной пятисотдвадцатиоднотысячной рубля');
      expect(numberToWordsRu.convert('1/1521000', options))
      .toBe('Одной один миллион пятисотдвадцатиоднотысячной рубля');
      expect(numberToWordsRu.convert('1/1001002', options))
      .toBe('Одной один миллион одна тысяча второй рубля');
    });
  });
  describe('Предложный', () => {
    test('Обычные числа', () => {
      const options = {
        declension: 'prepositional',
      };
      expect(numberToWordsRu.convert('0', options))
      .toBe('Ноле рублей 00 копеек');
      expect(numberToWordsRu.convert('1', options))
      .toBe('Одном рубле 00 копеек');
      expect(numberToWordsRu.convert('2', options))
      .toBe('Двух рублях 00 копеек');
      expect(numberToWordsRu.convert('3', options))
      .toBe('Трёх рублях 00 копеек');
      expect(numberToWordsRu.convert('4', options))
      .toBe('Четырёх рублях 00 копеек');
      expect(numberToWordsRu.convert('5', options))
      .toBe('Пяти рублях 00 копеек');
      expect(numberToWordsRu.convert('10', options))
      .toBe('Десяти рублях 00 копеек');
      expect(numberToWordsRu.convert('11', options))
      .toBe('Одиннадцати рублях 00 копеек');
      expect(numberToWordsRu.convert('12', options))
      .toBe('Двенадцати рублях 00 копеек');
      expect(numberToWordsRu.convert('15', options))
      .toBe('Пятнадцати рублях 00 копеек');
      expect(numberToWordsRu.convert('20', options))
      .toBe('Двадцати рублях 00 копеек');
      expect(numberToWordsRu.convert('21', options))
      .toBe('Двадцати одном рубле 00 копеек');
      expect(numberToWordsRu.convert('30', options))
      .toBe('Тридцати рублях 00 копеек');
      expect(numberToWordsRu.convert('32', options))
      .toBe('Тридцати двух рублях 00 копеек');
      expect(numberToWordsRu.convert('40', options))
      .toBe('Сорока рублях 00 копеек');
      expect(numberToWordsRu.convert('43', options))
      .toBe('Сорока трёх рублях 00 копеек');
      expect(numberToWordsRu.convert('50', options))
      .toBe('Пятидесяти рублях 00 копеек');
      expect(numberToWordsRu.convert('54', options))
      .toBe('Пятидесяти четырёх рублях 00 копеек');
      expect(numberToWordsRu.convert('60', options))
      .toBe('Шестидесяти рублях 00 копеек');
      expect(numberToWordsRu.convert('65', options))
      .toBe('Шестидесяти пяти рублях 00 копеек');
      expect(numberToWordsRu.convert('90', options))
      .toBe('Девяноста рублях 00 копеек');
      expect(numberToWordsRu.convert('99', options))
      .toBe('Девяноста девяти рублях 00 копеек');
      expect(numberToWordsRu.convert('100', options))
      .toBe('Ста рублях 00 копеек');
      expect(numberToWordsRu.convert('101', options))
      .toBe('Ста одном рубле 00 копеек');
      expect(numberToWordsRu.convert('110', options))
      .toBe('Ста десяти рублях 00 копеек');
      expect(numberToWordsRu.convert('200', options))
      .toBe('Двухстах рублях 00 копеек');
      expect(numberToWordsRu.convert('201', options))
      .toBe('Двухстах одном рубле 00 копеек');
      expect(numberToWordsRu.convert('210', options))
      .toBe('Двухстах десяти рублях 00 копеек');
      expect(numberToWordsRu.convert('500', options))
      .toBe('Пятистах рублях 00 копеек');
      expect(numberToWordsRu.convert('501', options))
      .toBe('Пятистах одном рубле 00 копеек');
      expect(numberToWordsRu.convert('510', options))
      .toBe('Пятистах десяти рублях 00 копеек');
      expect(numberToWordsRu.convert('1000', options))
      .toBe('Одной тысяче рублей 00 копеек');
      expect(numberToWordsRu.convert('1001', options))
      .toBe('Одной тысяче одном рубле 00 копеек');
      expect(numberToWordsRu.convert('1002', options))
      .toBe('Одной тысяче двух рублях 00 копеек');
      expect(numberToWordsRu.convert('1005', options))
      .toBe('Одной тысяче пяти рублях 00 копеек');
      expect(numberToWordsRu.convert('1100', options))
      .toBe('Одной тысяче ста рублях 00 копеек');
      expect(numberToWordsRu.convert('1000000', options))
      .toBe('Одном миллионе рублей 00 копеек');
      expect(numberToWordsRu.convert('987654321', options))
      .toBe('Девятистах восьмидесяти семи миллионах шестистах пятидесяти четырёх тысячах трёхстах двадцати одном рубле 00 копеек');
      expect(numberToWordsRu.convert('1001121.01', {...options, convertNumbertToWords: {fractional: true}}))
      .toBe('Одном миллионе одной тысяче ста двадцати одном рубле одной копейке');
      expect(numberToWordsRu.convert('2002122.02', {...options, convertNumbertToWords: {fractional: true}}))
      .toBe('Двух миллионах двух тысячах ста двадцати двух рублях двух копейках');
      expect(numberToWordsRu.convert('5005125.05', {...options, convertNumbertToWords: {fractional: true}}))
      .toBe('Пяти миллионах пяти тысячах ста двадцати пяти рублях пяти копейках');
    });
    test('С валютой "number"', () => {
      const options = {
        currency: 'number',
        declension: 'prepositional',
        convertNumbertToWords: {fractional: true},
      };
      expect(numberToWordsRu.convert('1.0', options))
      .toBe('Одной целой ноле десятых');
      expect(numberToWordsRu.convert('1.1', options))
      .toBe('Одной целой одной десятой');
      expect(numberToWordsRu.convert('2.1', options))
      .toBe('Двух целых одной десятой');
      expect(numberToWordsRu.convert('5.1', options))
      .toBe('Пяти целых одной десятой');
      expect(numberToWordsRu.convert('11.1', options))
      .toBe('Одиннадцати целых одной десятой');
      expect(numberToWordsRu.convert('101.1', options))
      .toBe('Ста одной целой одной десятой');
      expect(numberToWordsRu.convert('102.1', options))
      .toBe('Ста двух целых одной десятой');
      expect(numberToWordsRu.convert('1.2', options))
      .toBe('Одной целой двух десятых');
      expect(numberToWordsRu.convert('1.5', options))
      .toBe('Одной целой пяти десятых');
      expect(numberToWordsRu.convert('1.11', options))
      .toBe('Одной целой одиннадцати сотых');
      expect(numberToWordsRu.convert('1.21', options))
      .toBe('Одной целой двадцати одной сотой');
      expect(numberToWordsRu.convert('1.22', options))
      .toBe('Одной целой двадцати двух сотых');
      expect(numberToWordsRu.convert('1.101', options))
      .toBe('Одной целой ста одной тысячной');
      expect(numberToWordsRu.convert('1.102', options))
      .toBe('Одной целой ста двух тысячных');
      expect(numberToWordsRu.convert('1.00001', options))
      .toBe('Одной целой одной стотысячной');
      expect(numberToWordsRu.convert('1.00002', options))
      .toBe('Одной целой двух стотысячных');
    });
    test('С разделителем "/"', () => {
      const options = {
        declension: 'prepositional',
        convertNumbertToWords: {
          integer: true,
          fractional: true,
        },
      };
      expect(numberToWordsRu.convert('1/0', options))
      .toBe('Одной нулевой рубля');
      expect(numberToWordsRu.convert('1/1', options))
      .toBe('Одной первой рубля');
      expect(numberToWordsRu.convert('1/2', options))
      .toBe('Одной второй рубля');
      expect(numberToWordsRu.convert('1/5', options))
      .toBe('Одной пятой рубля');
      expect(numberToWordsRu.convert('2/0', options))
      .toBe('Двух нулевых рубля');
      expect(numberToWordsRu.convert('2/1', options))
      .toBe('Двух первых рубля');
      expect(numberToWordsRu.convert('2/2', options))
      .toBe('Двух вторых рубля');
      expect(numberToWordsRu.convert('2/5', options))
      .toBe('Двух пятых рубля');
      expect(numberToWordsRu.convert('1/10', options))
      .toBe('Одной десятой рубля');
      expect(numberToWordsRu.convert('1/11', options))
      .toBe('Одной одиннадцатой рубля');
      expect(numberToWordsRu.convert('1/12', options))
      .toBe('Одной двенадцатой рубля');
      expect(numberToWordsRu.convert('1/15', options))
      .toBe('Одной пятнадцатой рубля');
      expect(numberToWordsRu.convert('1/20', options))
      .toBe('Одной двадцатой рубля');
      expect(numberToWordsRu.convert('1/21', options))
      .toBe('Одной двадцать первой рубля');
      expect(numberToWordsRu.convert('1/100', options))
      .toBe('Одной сотой рубля');
      expect(numberToWordsRu.convert('1/101', options))
      .toBe('Одной сто первой рубля');
      expect(numberToWordsRu.convert('1/102', options))
      .toBe('Одной сто второй рубля');
      expect(numberToWordsRu.convert('1/110', options))
      .toBe('Одной сто десятой рубля');
      expect(numberToWordsRu.convert('1/112', options))
      .toBe('Одной сто двенадцатой рубля');
      expect(numberToWordsRu.convert('1/1000', options))
      .toBe('Одной тысячной рубля');
      expect(numberToWordsRu.convert('1/1001', options))
      .toBe('Одной одна тысяча первой рубля');
      expect(numberToWordsRu.convert('1/1002', options))
      .toBe('Одной одна тысяча второй рубля');
      expect(numberToWordsRu.convert('1/1010', options))
      .toBe('Одной одна тысяча десятой рубля');
      expect(numberToWordsRu.convert('1/1011', options))
      .toBe('Одной одна тысяча одиннадцатой рубля');
      expect(numberToWordsRu.convert('1/1020', options))
      .toBe('Одной одна тысяча двадцатой рубля');
      expect(numberToWordsRu.convert('1/1021', options))
      .toBe('Одной одна тысяча двадцать первой рубля');
      expect(numberToWordsRu.convert('1/10000', options))
      .toBe('Одной десятитысячной рубля');
      expect(numberToWordsRu.convert('1/11000', options))
      .toBe('Одной одиннадцатитысячной рубля');
      expect(numberToWordsRu.convert('1/521000', options))
      .toBe('Одной пятисотдвадцатиоднотысячной рубля');
      expect(numberToWordsRu.convert('1/1521000', options))
      .toBe('Одной один миллион пятисотдвадцатиоднотысячной рубля');
      expect(numberToWordsRu.convert('1/1001002', options))
      .toBe('Одной один миллион одна тысяча второй рубля');
    });
  });
  describe('Падежи с настроенной валютой', () => {
    test('Объект падежей не указан', () => {
      const options = {
        convertNumbertToWords: {
          integer: true,
          fractional: true,
        },
      };
      const currency = {
        currencyNameCases: ['доллар', 'доллара', 'долларов'],
        fractionalPartNameCases: ['цент', 'цента', 'центов'],
        currencyNounGender: {
          integer: 0,
          fractionalPart: 0,
        },
      };
      expect(numberToWordsRu.convert('4011121.01', {
        ...options,
        declension: 'nominative',
        currency: {
          ...currency,
          currencyNounGender: {
            integer: 0,
            fractionalPart: 0,
          },
        },
      }))
      .toBe('Четыре миллиона одиннадцать тысяч сто двадцать один доллар один цент');
      expect(numberToWordsRu.convert('4011123.02', {
        ...options,
        declension: 'nominative',
        currency: {
          ...currency,
          currencyNounGender: {
            integer: 0,
            fractionalPart: 0,
          },
        },
      }))
      .toBe('Четыре миллиона одиннадцать тысяч сто двадцать три доллара два цента');
      expect(numberToWordsRu.convert('4011121.01', {
        ...options,
        declension: 'genitive',
        currency: {
          ...currency,
        },
      }))
      .toBe('Четырёх миллионов одиннадцати тысяч ста двадцати одного доллара одного цента');
      expect(numberToWordsRu.convert('4011122.02', {
        ...options,
        declension: 'genitive',
        currency: {
          ...currency,
        },
      }))
      .toBe('Четырёх миллионов одиннадцати тысяч ста двадцати двух долларов двух центов');
      expect(numberToWordsRu.convert('4011121.01', {
        ...options,
        declension: 'instrumental',
        currency: {
          ...currency,
        },
      }))
      .toBe('Четырьмя миллионами одиннадцатью тысячами ста двадцатью одним рублём одним копейкой');
      expect(numberToWordsRu.convert('4011122.02', {
        ...options,
        declension: 'instrumental',
        currency: {
          ...currency,
        },
      }))
      .toBe('Четырьмя миллионами одиннадцатью тысячами ста двадцатью двумя рублями двумя копейками');
    });
    test('Объект падежей указан', () => {
      const options = {
        currency: {
          currencyNameCases: ['доллар', 'доллара', 'долларов'],
          currencyNameDeclensions: {
            nominative: ['доллар', 'доллары'],
            genitive: ['доллара', 'долларов'],
            dative: ['доллару', 'долларам'],
            accusative: ['доллар', 'доллары'],
            instrumental: ['долларом', 'долларами'],
            prepositional: ['долларе', 'долларах'],
          },
          fractionalPartNameCases: ['цент', 'цента', 'центов'],
          fractionalPartNameDeclensions: {
            nominative: ['цент', 'центы'],
            genitive: ['цента', 'центов'],
            dative: ['центу', 'центам'],
            accusative: ['цент', 'центы'],
            instrumental: ['центом', 'центами'],
            prepositional: ['центе', 'центах'],
          },
          currencyNounGender: {
            integer: 0,
            fractionalPart: 0,
          },
        },
        convertNumbertToWords: {
          integer: true,
          fractional: true,
        },
      };
      expect(numberToWordsRu.convert('4011121.01', {
        ...options,
        declension: 'nominative',
      }))
      .toBe('Четыре миллиона одиннадцать тысяч сто двадцать один доллар один цент');
      expect(numberToWordsRu.convert('4011122.02', {
        ...options,
        declension: 'nominative',
      }))
      .toBe('Четыре миллиона одиннадцать тысяч сто двадцать два доллара два цента');
      expect(numberToWordsRu.convert('4011121.01', {
        ...options,
        declension: 'genitive',
      }))
      .toBe('Четырёх миллионов одиннадцати тысяч ста двадцати одного доллара одного цента');
      expect(numberToWordsRu.convert('4011122.02', {
        ...options,
        declension: 'genitive',
      }))
      .toBe('Четырёх миллионов одиннадцати тысяч ста двадцати двух долларов двух центов');
      expect(numberToWordsRu.convert('4011121.01', {
        ...options,
        declension: 'instrumental',
      }))
      .toBe('Четырьмя миллионами одиннадцатью тысячами ста двадцатью одним долларом одним центом');
      expect(numberToWordsRu.convert('4011122.02', {
        ...options,
        declension: 'instrumental',
      }))
      .toBe('Четырьмя миллионами одиннадцатью тысячами ста двадцатью двумя долларами двумя центами');
    });
  });
});
